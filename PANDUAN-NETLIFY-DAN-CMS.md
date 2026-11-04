# PRISMA GLOBAL EXPORT — Website Netlify + Pages CMS (V8)

## File ini siap diunggah ke Netlify
- Brand utama: **PRISMA GLOBAL EXPORT**
- Badan hukum pengelola: **PT Prisma Creative Indonesia**
- Kontak: **+62 851 2219 2100**, **prismacreativeid@gmail.com**
- Logo yang dikirim pengguna disertakan asli di `media/prisma-global-export-logo-original.png` serta versi WebP lebih ringan yang digunakan website.
- Katalog: Layered Wooden Wall Art, Coconut Charcoal Briquettes, Fresh Jasmine Flowers.
- Briket dan melati masih kategori pengadaan yang menunggu verifikasi pemasok dan legalitas.

## Cara paling cepat mencoba website TANPA beli domain
1. Ekstrak ZIP ini di komputer Windows.
2. Buka https://app.netlify.com/drop dan masuk ke akun Anda.
3. Tarik **folder hasil ekstrak** yang berisi `index.html` ke Netlify Drop. Jangan tarik gambar logo saja.
4. Alamat gratis berakhiran `.netlify.app` akan muncul. Gunakan itu untuk memeriksa tampilan awal.
5. Untuk melihat semua perubahan katalog secara benar, akses situs di Netlify (jangan mengandalkan membuka file `index.html` lokal; CMS JSON dibaca saat disajikan melalui web server).

## Cara mengaktifkan RFQ di Netlify
1. Pada dashboard site Netlify, buka **Forms** dan pilih **Enable form detection** jika belum aktif.
2. **Deploy ulang** folder website agar Netlify mendeteksi form HTML bernama `buyer-rfq`.
3. Isi dan kirim RFQ uji dari URL `netlify.app`. Cek menu Forms > Verified submissions / Spam.
4. Tambahkan email notifikasi dari **Forms > Submission notifications** ke `prismacreativeid@gmail.com`.
5. Sebelum mengumumkan ke buyer, verifikasi satu pengiriman berhasil. Netlify Forms tunduk pada batas pemakaian sesuai paket Anda.

## Cara mengaktifkan dashboard untuk mengganti logo dan foto produk
**Netlify adalah hosting, bukan editor konten.** Fitur admin disediakan oleh Pages CMS via GitHub.
1. Buat repositori GitHub (misalnya `prisma-global-export`) dan unggah SEMUA isi folder ini ke root repository, termasuk file `.pages.yml`.
2. Di Netlify: Add new project > Import from Git > GitHub, pilih repositori tersebut agar setiap perubahan diterbitkan otomatis.
3. Masuk ke https://app.pagescms.org dan login GitHub, izinkan repositori lalu buka `01 · Branding and Company` atau `02 · Export Products`.
4. Logo baru dan foto katalog dapat diunggah ke media. Untuk menambah produk, tambahkan baris data katalog dan pastikan statusnya benar sebelum publikasi.
5. Simpan. Pages CMS memperbarui repositori GitHub, lalu Netlify melakukan deploy otomatis.

Perhatian: folder `/admin` dalam proyek hanya menampilkan panduan tautan, bukan halaman login lokal dengan autentikasi. Untuk keamanan, jangan membuat sandi admin di HTML.

## Website WordPress
Paket ini dibuat untuk Netlify (website statis), bukan tema WordPress. Tidak diperlukan paket WordPress untuk menggunakannya.

## File penting
- `index.html`: homepage, katalog, form RFQ.
- `data/site.json`: info dan kontak perusahaan yang dapat diedit via CMS.
- `data/products.json`: katalog produk.
- `.pages.yml`: konfigurasi Pages CMS.
- `privacy.html`, `thank-you.html`: privasi dan halaman setelah RFQ.
- `media/`: logo, ikon, gambar katalog placeholder.
- `netlify.toml`: konfigurasi hosting Netlify.

## Catatan
- Nama Prisma Global Export belum memperoleh jaminan pendaftaran merek DJKI; jangan menulis "registered trademark".
- Domain `.com` masih opsional: website berjalan lebih dulu di alamat gratis `netlify.app`.
- Email dan WA telah diisi sesuai data yang dikonfirmasi pengguna.
