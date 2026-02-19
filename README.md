# KSP CU Sinar Sejahtera — Website Resmi

Website resmi **Koperasi Simpan Pinjam Credit Union Sinar Sejahtera (KSP CU Sinar Sejahtera)**, dibangun dengan [Astro](https://astro.build) dan ditenagai oleh [Sanity CMS](https://sanity.io) untuk pengelolaan konten berita & pengumuman.

---

## ✨ Fitur

- 🏠 Halaman beranda dengan hero, sorotan layanan, dan berita terkini
- ℹ️ Halaman tentang kami dengan profil koperasi dan struktur organisasi
- 💼 Halaman layanan koperasi
- 👥 Halaman keanggotaan
- 📰 Halaman berita & pengumuman (konten dikelola via Sanity CMS)
- 📍 Halaman kontak dengan embed Google Maps
- 📱 Desain responsif dengan menu mobile

---

## 🛠️ Tech Stack

| Layer       | Teknologi                                         |
| :---------- | :------------------------------------------------ |
| Framework   | [Astro 5](https://astro.build)                    |
| UI Library  | [React 19](https://react.dev) (Islands)           |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com)        |
| CMS         | [Sanity](https://sanity.io)                       |
| Font        | [Inter Variable](https://fontsource.org)          |
| Package Mgr | [pnpm](https://pnpm.io)                           |

---

## 📋 Prasyarat

Pastikan sudah terinstal:

- [Node.js](https://nodejs.org) **v18 atau lebih baru**
- [pnpm](https://pnpm.io/installation) — `npm install -g pnpm`

---

## 🚀 Cara Menjalankan

### 1. Clone repository

```sh
git clone <url-repository>
cd kspcuss
```

### 2. Instal dependensi

```sh
pnpm install
```

### 3. Siapkan environment variables

Salin file `.env.example` menjadi `.env`, lalu isi nilainya:

```sh
cp .env.example .env
```

Buka `.env` dan isi dengan nilai yang sesuai (lihat bagian [Environment Variables](#-environment-variables) di bawah).

### 4. Jalankan dev server

```sh
pnpm dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

---

## 🔑 Environment Variables

Buat file `.env` di root project berdasarkan `.env.example`:

```env
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
```

| Variable           | Keterangan                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------------- |
| `SANITY_PROJECT_ID` | Project ID dari [sanity.io/manage](https://sanity.io/manage). Temukan di dashboard project Anda |
| `SANITY_DATASET`   | Dataset yang digunakan (biasanya `production`)                                                 |

---

## 📁 Struktur Project

```
/
├── public/                  # Aset statis (gambar, favicon)
│   └── images/
├── sanity/                  # Sanity CMS Studio (terpisah dari Astro)
│   ├── schemaTypes/         # Definisi schema konten (post, dll.)
│   ├── sanity.config.ts     # Konfigurasi Sanity Studio
│   └── sanity.cli.ts        # Konfigurasi CLI Sanity
├── src/
│   ├── components/          # Komponen UI
│   │   ├── about/           # Komponen halaman Tentang Kami
│   │   ├── home/            # Komponen halaman Beranda
│   │   ├── keanggotaan/     # Komponen halaman Keanggotaan
│   │   ├── kontak/          # Komponen halaman Kontak
│   │   ├── layanan/         # Komponen halaman Layanan
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileMenu.tsx   # Menu mobile (React Island)
│   │   └── Logo.astro
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout dasar semua halaman
│   ├── lib/
│   │   ├── sanity.ts        # Sanity client
│   │   ├── queries.ts       # GROQ queries
│   │   └── image.ts         # Helper URL gambar Sanity
│   ├── pages/
│   │   ├── index.astro      # Beranda
│   │   ├── tentang-kami.astro
│   │   ├── layanan.astro
│   │   ├── keanggotaan.astro
│   │   ├── kontak.astro
│   │   └── berita/          # Halaman daftar & detail berita
│   ├── styles/
│   │   └── global.css       # CSS global & design tokens
│   └── types/               # TypeScript types
├── .env                     # Environment variables (jangan di-commit!)
├── .env.example             # Template environment variables
├── astro.config.mjs         # Konfigurasi Astro
├── package.json
└── tsconfig.json
```

---

## 🧞 Perintah yang Tersedia

Semua perintah dijalankan dari root project:

| Perintah               | Aksi                                                 |
| :--------------------- | :--------------------------------------------------- |
| `pnpm install`         | Instal semua dependensi                              |
| `pnpm dev`             | Jalankan dev server di `localhost:4321`              |
| `pnpm build`           | Build production site ke `./dist/`                   |
| `pnpm preview`         | Preview hasil build secara lokal                     |
| `pnpm astro ...`       | Jalankan CLI Astro (`astro add`, `astro check`, dll.)|

---

## 🎨 Sanity Studio (CMS)

Sanity Studio digunakan untuk mengelola konten **Berita & Pengumuman**. Studio berada di folder `sanity/` dan merupakan proyek yang terpisah.

### Menjalankan Sanity Studio secara lokal

```sh
cd sanity
pnpm install
pnpm dev
```

Studio akan terbuka di [http://localhost:3333](http://localhost:3333).

> **Catatan:** Untuk mengakses Sanity Studio, Anda perlu login menggunakan akun Sanity yang sudah diberikan akses ke project ini. Hubungi administrator untuk mendapatkan akses.

---

## 📝 Lisensi

Hak cipta © KSP CU Sinar Sejahtera. Seluruh hak dilindungi.
