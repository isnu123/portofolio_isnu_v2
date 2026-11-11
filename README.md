# Portofolio Isnu Ardianto

React + Vite + Tailwind CSS v4 + lucide-react. Tampilan gelap dengan aksen biru muda. Tidak butuh backend atau database.

## Menjalankan
```bash
npm install
npm run dev      # development
npm run build    # hasil build ada di folder dist
```

## Struktur
```
src/
  data.js          semua konten (edit di sini)
  App.jsx          layar pembuka + susunan section
  index.css        warna, efek kaca, animasi
  components/      satu file per bagian (Hero, About, Portfolio, Contact, dst.)
  hooks/           useTypewriter (teks mengetik), useProfilePhoto (foto)
public/foto.jpg    foto profil permanen (opsional)
```

## Mengisi konten
- Proyek, pengalaman, skill, pendidikan, dan kontak: edit `src/data.js`.
- Teks yang diketik di hero: `roles` di `src/data.js`.

## Foto profil
- Permanen: simpan foto sebagai `public/foto.jpg`, lalu commit dan push.
- Lewat web: saat `npm run dev`, atau di website online dengan alamat `...?edit`, klik "Ubah foto". Foto hanya tersimpan di browser tersebut.

## Deploy
1. Buat repository di GitHub, lalu `git init`, `git add .`, `git commit`, dan `git push`.
2. Di vercel.com pilih Add New Project, import repository tersebut, lalu Deploy.
