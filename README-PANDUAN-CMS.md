# PRISMA GLOBAL EXPORT — WEBSITE CMS

**Brand:** PRISMA GLOBAL EXPORT  
**Badan hukum:** PT Prisma Creative Indonesia  
**WhatsApp:** +62 851 2219 2100  
**Email:** prismacreativeid@gmail.com

## Apa yang sudah ada?
- Tampilan website bahasa Inggris, responsif, sama seperti versi sebelumnya.
- Logo Prisma Global Export terpasang sebagai file yang bisa diganti.
- Katalog produk dibuat dari `data/products.json` (foto, nama, kategori, status, deskripsi, tag, publikasi).
- Profil, kontak dan logo tersimpan di `data/site.json`.
- `.pages.yml` adalah konfigurasi dashboard **Pages CMS**.
- Formulir RFQ tetap menggunakan **Netlify Forms** dan terpisah dari CMS.
- `admin/index.html` menjelaskan cara masuk ke Pages CMS dengan akun GitHub; halaman tersebut BUKAN sistem login yang menerima kata sandi.

## Wajib: aktifkan GitHub + CMS + Netlify
1. Buat akun gratis di https://github.com (jika belum punya).
2. Buat repository baru, misalnya `prisma-global-export`. Pilih **private** atau **public** sesuai kebutuhan. Jangan unggah kredensial, kata sandi, dokumen pribadi atau rahasia ke repo.
3. Upload **semua isi folder website** ini ke root repository, termasuk file tersembunyi `.pages.yml`, folder `data/`, `media/`, `assets/` dan semua file `.html`. **Jangan** hanya upload file ZIP.
4. Buka https://app.pagescms.org → masuk dengan GitHub → install aplikasi GitHub Pages CMS dan izinkan mengakses repository yang tadi dibuat. Jika tidak terlihat, cek akses aplikasi GitHub ke repository.
5. Dashboard CMS menampilkan **01 · Branding and Company** dan **02 · Export Products**. Klik item → edit → Save.
6. Buka https://app.netlify.com/start → Import from Git → GitHub → pilih repository yang sama → build command kosong → publish directory `.` → Deploy. Setelah tersambung, perubahan CMS yang tersimpan ke GitHub akan memicu deploy Netlify otomatis.
7. Di Netlify: Forms → Enable form detection → redeploy. Jika sudah terdeteksi, pilih form `buyer-rfq` dan kirim satu inquiry tes dari website online, bukan halaman lokal.
8. Di Netlify Forms, atur notifikasi email ke `prismacreativeid@gmail.com` (tidak diatur otomatis oleh paket website).

**Jika website sebelumnya dibuat dengan Netlify Drop:** GitHub-connected deploy adalah alur baru untuk publikasi otomatis. Sambungkan repositori ke proyek Netlify yang ada bila tersedia di akun Anda, atau buat proyek baru; periksa alamat URL dan domain sebelum menghapus proyek lama. Upload ulang lewat Drop saja tidak otomatis menyimpan perubahan dari Pages CMS.

## Cara mengubah logo
Di Pages CMS → **01 · Branding and Company** → pada kolom **Small brand icon** unggah logo ringkas untuk header/footer; pada **Full logo image** unggah logo versi penuh; klik Save. Gambar disimpan di folder `media` milik repositori.

## Cara mengubah foto dan katalog
Di Pages CMS → **02 · Export Products** → pilih produk → upload foto produk (direkomendasikan JPG atau WebP 1200 px, ukuran file teroptimasi) → ubah nama, kategori, status, deskripsi, fitur, dan Save.
- Untuk tambah produk gunakan **Add item** di editor, isi judul, gambar, deskripsi dan status.
- Untuk menyembunyikan produk, ubah **Display on website?** menjadi false.
- Untuk menghapus produk, hapus item pada daftar kemudian Save.
- Setelah commit ke GitHub dan Netlify deploy selesai, refresh website untuk melihat hasilnya.
- Status `Under Review` digunakan sampai legalitas, supplier, kapasitas, sertifikasi dan kelayakan ekspor telah diverifikasi. Jangan mengklaim sertifikasi/ekspor ready jika belum benar.

## Foto & logo
Foto pada katalog bawaan adalah ilustrasi SVG, bukan foto barang asli; ganti dengan foto yang memang Anda berhak gunakan. Logo awal berasal dari desain Anda di percakapan. File asli resolusi penuh berada di `media/prisma-global-export-logo.webp`.

## Batasan penting
- CMS *tidak langsung aktif* hanya dengan download ZIP. Anda perlu akun GitHub, akses Pages CMS dan deploy GitHub-Netlify.
- Tidak ada database/back-end admin lokal dan tidak ada akun admin bawaan. Jangan mencoba login dengan password ke situs publik.
- Form Netlify tidak dapat diuji pada `file://` dan belum terverifikasi sampai dideploy.
- Pratinjau file `index.html` yang dibuka langsung di komputer akan menunjukkan konten cadangan statis. Konten CMS aktif ketika website diakses dari server (Netlify atau localhost HTTP).
- Pages CMS mengubah file di GitHub; Netlify menyajikan website. Kedua layanan punya kebijakan penggunaan dan kuota masing-masing.
- Deskripsi produk yang sudah diedit via CMS ditampilkan dengan aman sebagai teks biasa, bukan HTML mentah.

## Penjelasan folder
- `index.html` — desain utama dan formulir.
- `assets/site-cms.js` — pembaca pengaturan dan produk; tidak perlu diedit.
- `data/site.json` — informasi brand dan kontak.
- `data/products.json` — katalog yang dikelola CMS.
- `media/` — logo dan foto produk.
- `.pages.yml` — struktur dashboard.
- `admin/index.html` — halaman petunjuk dan pintu masuk dashboard.
- `privacy.html` dan `thank-you.html` — halaman tambahan untuk RFQ.
- `netlify.toml` — pengaturan publikasi Netlify.

Rujukan: https://pagescms.org/docs/quick-start/ dan https://docs.netlify.com/manage/forms/setup/
