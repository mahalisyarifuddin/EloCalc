[English](README.md) | **Bahasa Indonesia**

# EloCalc
Tingkat kemenangan, terkuantifikasi.

## Pengantar
EloCalc adalah alat berbasis peramban (browser) satu file untuk mengubah tingkat kemenangan sederhana menjadi peringkat Elo relatif. Dirancang untuk gamer, analis olahraga, dan penggemar data, alat ini membantu memvisualisasikan kesenjangan keterampilan antara penantang utama dan berbagai lawan dengan menormalisasi data kinerja ke dalam sistem peringkat standar.

Antarmuka mendukung **Bahasa Inggris** dan **Bahasa Indonesia**.

## Cara Kerja
Kalkulator mengambil penantang utama dan daftar lawan dengan tingkat kemenangan masing-masing melawan penantang utama, kemudian:

1.  **Skor Efektif**: Menghitung probabilitas kemenangan efektif (Menang % + 0.5 * Seri %).
2.  **Selisih Elo**: Mengubah skor efektif menjadi selisih poin Elo menggunakan rumus distribusi logistik standar (aturan 400 poin).
3.  **Normalisasi**: Menyesuaikan semua peringkat (termasuk penantang utama) sehingga rata-rata peringkat seluruh kumpulan tepat 1000.
4.  **Hasil**: Menampilkan tabel estimasi peringkat Elo, skor efektif, dan perbedaan relatif.

## Mulai Cepat
1.  Unduh `EloCalc.html`.
2.  Buka di peramban modern apa pun (Chrome, Edge, Firefox, Safari).
3.  Masukkan nama Penantang Utama (mis., "Tim Saya").
4.  Tambahkan kompetitor dan masukkan tingkat kemenangan mereka melawan Penantang Utama.
5.  Aktifkan "Sertakan Tingkat Seri" jika hasil imbang dimungkinkan.
6.  Klik "Hitung Peringkat".
7.  Lihat peringkat Elo yang dinormalisasi dan ekspor ke CSV jika diperlukan.

## Fitur Utama
-   **Dukungan Multi-bahasa**: Beralih antara Bahasa Inggris dan Bahasa Indonesia.
-   **Tema Gelap/Terang**: Pilihan tema otomatis atau manual.
-   **Dukungan Seri**: Input opsional untuk tingkat seri/imbang (dihitung sebagai setengah kemenangan).
-   **Input Dinamis**: Tambah, hapus, atau bersihkan kompetitor dengan mudah.
-   **Impor/Ekspor CSV**: Impor data pertandingan dari file teks dan unduh hasilnya.
-   **File HTML tunggal**: Tidak ada instalasi, tidak ada ketergantungan, bekerja sepenuhnya offline.
-   **Desain responsif**: Bekerja di perangkat desktop, tablet, dan seluler.

## Kasus Penggunaan
-   **Gaming**: Memperkirakan tingkat keterampilan relatif karakter atau pemain berdasarkan tingkat kemenangan pertarungan.
-   **Analisis Olahraga**: Mengubah catatan head-to-head menjadi daftar peringkat terpadu.
-   **Keseimbangan Game**: Memvisualisasikan "tier list" elemen game berdasarkan data kinerja.

## Privasi & Data
Semua perhitungan terjadi secara lokal di peramban Anda. Tidak ada data yang dikirim ke server mana pun. Alat ini sepenuhnya offline setelah dimuat.

## Lisensi
Lisensi MIT. Lihat LICENSE untuk detailnya.

## Kontribusi
Kontribusi, masalah, dan saran dipersilakan. Silakan buka *issue* untuk mendiskusikan ide atau kirimkan PR.
