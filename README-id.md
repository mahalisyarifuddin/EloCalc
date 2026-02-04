[English](README.md) | **Bahasa Indonesia**

# EloCalc
Tingkat kemenangan, terkuantifikasi.

## Pengantar
EloCalc adalah alat berbasis peramban (browser) satu file untuk mengubah tingkat kemenangan sederhana menjadi peringkat Elo relatif. Dirancang untuk gamer, analis olahraga, dan penggemar data, alat ini membantu memvisualisasikan kesenjangan keterampilan antara penantang utama dan berbagai lawan dengan menormalisasi data kinerja ke dalam sistem peringkat standar.

Antarmuka mendukung **Bahasa Inggris** dan **Bahasa Indonesia**.

## Cara Kerja
Kalkulator beroperasi dalam dua mode:

### Tingkat Menang -> Elo
Mengambil penantang utama dan daftar lawan dengan tingkat kemenangan masing-masing.
1.  **Skor Efektif**: Menghitung probabilitas kemenangan efektif (Menang % + 0.5 * Seri %).
2.  **Selisih Elo**: Mengubah skor efektif menjadi selisih poin Elo.
3.  **Normalisasi**: Menyesuaikan peringkat sehingga rata-rata adalah 1000, atau menetapkan penantang utama ke 1000.

### Elo -> Tingkat Menang
Mengambil daftar kompetitor dan peringkat Elo mereka yang diketahui.
1.  **Skor Harapan**: Menghitung tingkat kemenangan yang diharapkan untuk setiap pertandingan berdasarkan selisih Elo.
2.  **Normalisasi (Opsional)**: Dapat menormalisasi peringkat ke rata-rata 1000.
3.  **Sorotan Rata-rata**: Menyoroti kompetitor yang paling dekat dengan peringkat rata-rata.

Dalam kedua mode, Anda dapat **mengklik baris mana pun di hasil** untuk menetapkan kompetitor tersebut sebagai acuan. Ini menghitung ulang selisih Elo relatif dan tingkat kemenangan yang diharapkan terhadap acuan baru.

## Mulai Cepat
1.  Unduh `EloCalc.html`.
2.  Buka di peramban modern apa pun.
3.  Pilih **Mode** Anda (Tingkat Menang -> Elo atau Elo -> Tingkat Menang).
4.  Masukkan data kompetitor (Nama dan Tingkat Menang/Elo).
5.  Klik "Hitung".
6.  Klik baris dalam tabel hasil untuk membandingkan secara dinamis dengan kompetitor yang berbeda.

## Fitur Utama
-   **Mode Ganda**: Konversi Tingkat Menang ke Elo, atau Elo ke Tingkat Menang.
-   **Perbandingan Acuan**: Klik baris mana pun untuk melihat statistik relatif terhadap kompetitor tersebut.
-   **Dukungan Multi-bahasa**: Beralih antara Bahasa Inggris dan Bahasa Indonesia.
-   **Tema Gelap/Terang**: Pilihan tema otomatis atau manual.
-   **Dukungan Seri**: Input opsional untuk tingkat seri/imbang (mode Tingkat Menang).
-   **Penetapan Elo**: Opsi untuk menetapkan penantang utama ke 1000 Elo (mode Tingkat Menang).
-   **Normalisasi Elo**: Opsi untuk menormalisasi peringkat Elo ke 1000 (mode Elo).
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
