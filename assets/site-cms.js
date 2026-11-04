/* Prisma Global Export - public content loader. Pages CMS edits files stored in GitHub.
   Public website never exposes editor credentials or writes to the repository. */
(function(){
  'use strict';
  function element(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=String(text);return el;}
  function setAll(selector,text){document.querySelectorAll(selector).forEach(el=>el.textContent=String(text));}
  function safeImage(path){if(typeof path!=='string')return null;
    // Only assets uploaded into this website's media directory are allowed.
    const v=path.trim();if(!/^\/?media\/[a-zA-Z0-9_./-]+$/.test(v)||v.includes('..'))return null;
    return v.startsWith('/')?v:'/'+v;
  }
  async function loadJson(url){const response=await fetch(url,{cache:'no-store'});if(!response.ok)throw Error('Could not fetch '+url);return response.json();}
  function renderSite(s){
    if(!s||typeof s!=='object')return;
    if(s.brand_top)setAll('.logo-name',s.brand_top);
    if(s.brand_bottom)setAll('.logo-sub',s.brand_bottom);
    if(s.logo){const src=safeImage(s.logo);if(src){document.querySelectorAll('[data-site-logo]').forEach(el=>{el.src=src;});}}
    if(s.full_logo){const src=safeImage(s.full_logo);if(src){document.querySelectorAll('[data-site-full-logo]').forEach(el=>{el.src=src;});}}
    const h1=document.querySelector('.hero h1');
    if(h1&&s.tagline_first&&s.tagline_second){h1.replaceChildren(document.createTextNode(s.tagline_first),document.createElement('br'),element('em','',s.tagline_second));}
    const intro=document.querySelector('.hero-text');if(intro&&s.hero_intro)intro.textContent=s.hero_intro;
    const about=document.querySelectorAll('.about .section-heading p');
    if(about.length>0&&s.about_first)about[0].textContent=s.about_first;
    if(about.length>1&&s.about_second)about[1].textContent=s.about_second;
    if(s.brand_name){
      const name=String(s.brand_name);
      document.title=name+' | Indonesian Products & B2B Sourcing';
      const heroLabel=document.querySelector('.hero .eyebrow');
      if(heroLabel)heroLabel.replaceChildren(element('span'),document.createTextNode(' '+name+' · INDONESIA'));
      const aboutCaption=document.querySelector('.about-visual-caption');
      if(aboutCaption)aboutCaption.textContent=name+' · INDONESIA';
    }
    if(s.location){
      const facts=document.querySelectorAll('.about-facts>div');
      if(facts.length>=3){const location=facts[2].querySelector('strong');if(location)location.textContent=String(s.location);}
      const span=document.querySelector('.hero-meta span');
      if(span&&span.lastChild&&span.lastChild.nodeType===Node.TEXT_NODE)span.lastChild.textContent=' Based in '+String(s.location);
    }
    const wa=String(s.whatsapp||'').replace(/\D/g,'');
    const phone=String(s.phone_display||'').trim();
    const email=String(s.email||'').trim();
    if(wa&&/^\d{8,16}$/.test(wa))document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>{
      let message='Hello Prisma Global Export, I would like to discuss an international B2B product inquiry.';
      try{const old=new URL(a.href);const q=old.searchParams.get('text');if(q)message=q;}catch(_){ }
      a.href='https://wa.me/'+wa+'?text='+encodeURIComponent(message);
      if(phone) a.textContent=a.textContent.replace(/(?:\+62|0)[\d\s-]{9,}/g,phone);
    });
    if(email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{
      a.href='mailto:'+email;a.textContent=email;
    });
    if(phone){document.querySelectorAll('a[href^="tel:"]').forEach(a=>{a.href='tel:+'+wa;a.textContent=phone;});}
  }
  function productCard(p,i){
    const title=String(p.title||'').trim();if(!title)return null;
    const article=element('article','product-card');
    const visual=element('div','product-visual cms-image');
    const imageSrc=safeImage(p.image);
    if(imageSrc){const img=element('img','cms-product-photo'+(imageSrc.endsWith('.svg')?' contain':''));img.loading='lazy';img.decoding='async';img.alt=String(p.image_alt||title);img.src=imageSrc;visual.append(img);}
    else {visual.classList.remove('cms-image');visual.classList.add('vis-art');visual.append(element('p','',title));}
    visual.append(element('div','product-index',String(i+1).padStart(2,'0')+' / PRODUCT'));
    const body=element('div','product-body');
    body.append(element('div','product-category',[p.category,p.status].filter(Boolean).join(' · ')));
    body.append(element('h3','',title));body.append(element('p','',String(p.description||'')));
    const chips=element('div','chip-row');
    if(Array.isArray(p.tags))p.tags.slice(0,5).forEach(t=>{if(typeof t==='string'&&t.trim())chips.append(element('span','chip',t.trim()));});
    body.append(chips);
    const action=element('div','card-action');action.append(element('small','',String(p.footer_note||'Details available on request')));
    const button=element('button','product-rfq','Inquire Now ↗');button.type='button';
    button.addEventListener('click',()=>{const sel=document.querySelector('#product');
      if(sel){sel.value=title; if(sel.value!==title){const opt=element('option','',title);opt.value=title;sel.append(opt);sel.value=title;}}
      document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
    });
    action.append(button);body.append(action);article.append(visual,body);return article;
  }
  function renderProducts(products){
    if(!Array.isArray(products))return;
    const grid=document.querySelector('.product-grid');const sel=document.getElementById('product');
    const visible=products.filter(p=>p&&p.published!==false&&typeof p.title==='string'&&p.title.trim());
    if(grid){const nodes=visible.map((p,i)=>productCard(p,i)).filter(Boolean);if(!nodes.length)nodes.push(element('p','catalog-empty','Our public catalog is being updated. Please send an inquiry for current sourcing requests.'));grid.replaceChildren(...nodes);}
    if(sel){const previous=sel.value;sel.replaceChildren();const empty=element('option','','Select a product');empty.value='';sel.append(empty);
      visible.forEach(p=>{const opt=element('option','',p.title+(p.status==='Under Review'?' (sourcing review)':''));opt.value=p.title;sel.append(opt);});
      const other=element('option','','Other / Custom Sourcing');other.value='Other / Custom Sourcing';sel.append(other);
      if(previous&&[...sel.options].some(o=>o.value===previous))sel.value=previous;
    }
  }
  async function run(){
    // Local file previews show the static fallback. For online publishing use a web server.
    if(location.protocol==='file:')return;
    const [settings,products]=await Promise.allSettled([loadJson('/data/site.json'),loadJson('/data/products.json')]);
    if(settings.status==='fulfilled')renderSite(settings.value);
    else console.warn('CMS site settings unavailable; using current page defaults.',settings.reason);
    if(products.status==='fulfilled')renderProducts(products.value);
    else console.warn('CMS product catalog unavailable; showing original content.',products.reason);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();