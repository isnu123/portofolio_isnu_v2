// Semua konten website ada di file ini. Edit di sini, tidak perlu menyentuh komponen.

export const profile = {
  name: 'Isnu Ardianto',
  initials: 'IA',
  role: 'Mahasiswa Sistem Informasi',
  intro:
    'Tertarik pada pengembangan web, komputer, dan jaringan. Berpengalaman sebagai IT support dan videografer freelance.',
  email: 'isnuardianto@gmail.com',
  whatsapp: '6282225214426', // format internasional tanpa +, dipakai untuk link wa.me
  github: 'https://github.com/isnu123',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Tentang' },
  { id: 'portfolio', label: 'Portofolio' },
  { id: 'contact', label: 'Kontak' },
]

export const about = [
  'Saya mahasiswa Sistem Informasi semester 7 di Universitas Duta Bangsa Surakarta. Di kampus saya mempelajari dasar-dasar Laravel, MySQL, React, Python, Java, dan Node.js.',
  'Saya lulusan SMK jurusan TKJ dan terbiasa bekerja dengan komputer dan jaringan: menjaga laboratorium, mengonfigurasi Mikrotik, dan menangani masalah perangkat. Di luar itu, saya mengerjakan video shooting secara freelance.',
]

export const education = [
  { school: 'Universitas Duta Bangsa Surakarta', detail: 'S1 Sistem Informasi, semester 7' },
  { school: 'SMK Pancasila 4 Baturetno', detail: 'Teknik Komputer dan Jaringan (TKJ)' },
  { school: 'SMP Negeri 1 Karangtengah', detail: 'Sekolah menengah pertama' },
  { school: 'SD Negeri 3 Karangtengah', detail: 'Sekolah dasar' },
]

export const skills = [
  { group: 'Pemrograman', level: 'Tingkat dasar', items: ['Laravel', 'MySQL', 'React', 'Python', 'HTML', 'CSS', 'Java', 'Node.js'] },
  { group: 'Jaringan dan sistem', items: ['Konfigurasi Mikrotik', 'Jaringan komputer', 'Linux', 'Troubleshooting komputer'] },
  { group: 'Desain dan media', items: ['CorelDRAW', 'Photoshop', 'Video shooting'] },
]

export const experiences = [
  {
    role: 'IT Support (Magang)',
    place: 'SMK Pancasila 4 Baturetno',
    status: 'Selesai',
    desc: 'Menjaga lab komputer, mengonfigurasi Mikrotik, dan mendukung kebutuhan komputer dan jaringan sekolah.',
  },
  {
    role: 'Videografer Freelance',
    place: 'Freelance',
    status: 'Aktif',
    desc: 'Pengambilan video untuk berbagai kebutuhan klien.',
  },
  {
    role: 'Magang Servis Komputer',
    place: 'Masa SMK',
    status: 'Selesai',
    desc: 'Perbaikan dan perawatan komputer.',
  },
  {
    role: 'Pelatihan Desain Grafis',
    place: 'Pelatihan',
    status: 'Selesai',
    desc: 'Mengolah desain dengan CorelDRAW dan Photoshop.',
  },
]

// Ganti placeholder ini dengan proyek asli. github dan demo boleh dikosongkan.
export const projects = [
  { title: 'Proyek 1 (akan diisi)', desc: 'Deskripsi singkat proyek.', stack: ['React'], github: '', demo: '' },
  { title: 'Proyek 2 (akan diisi)', desc: 'Deskripsi singkat proyek.', stack: ['Laravel', 'MySQL'], github: '', demo: '' },
  { title: 'Proyek 3 (akan diisi)', desc: 'Deskripsi singkat proyek.', stack: ['Python'], github: '', demo: '' },
]

// Teks yang diketik bergantian di hero
export const roles = ['IT Support', 'Jaringan dan Mikrotik', 'Videografer Freelance', 'Belajar Web Development']

// Chip teknologi di hero
export const heroTech = ['React', 'Laravel', 'MySQL', 'Mikrotik']

export const semester = 7
