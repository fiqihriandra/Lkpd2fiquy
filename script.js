// =====================================================================
// C. AKTIVITAS 1 — EKSPERIMEN 10 + 20
// =====================================================================
console.log("=== C. AKTIVITAS 1 ===");
let a = "10";
let b = "20";
console.log("Output program:", a + b); // Output: 1020

// Jawaban Tabel & Analisis Aktivitas 1:
console.log("Mengapa hasil tersebut terjadi? Karena '10' dan '20' diapit tanda kutip (bertipe String), sehingga operator + menggabungkan teks (concatenation).");
console.log("Apakah a dan b bertipe Number? Tidak, keduanya bertipe String.");
console.log("Apakah prediksimu benar? Ya, benar. Saat dijalankan hasilnya 1020 karena JavaScript membaca keduanya sebagai teks.\n");


// =====================================================================
// D. AKTIVITAS 2 — MENEMUKAN TIPE DATA
// =====================================================================
console.log("=== D. AKTIVITAS 2 ===");
let nama = "Asep";
let umur = 16;
console.log("Hasil typeof nama:", typeof nama); // Output: string
console.log("Hasil typeof umur:", typeof umur); // Output: number

// Kesimpulan & Temuan:
console.log("Kesimpulan: Data dengan tanda kutip bertipe String, sedangkan angka tanpa tanda kutip bertipe Number.");
console.log("Temuan perbedaan String & Number: String adalah data teks yang tidak bisa dihitung secara matematis, sedangkan Number adalah data angka yang bisa dioperasikan dalam perhitungan matematika.\n");


// =====================================================================
// E. AKTIVITAS 3 — KONVERSI STRING MENJADI NUMBER
// =====================================================================
console.log("=== E. AKTIVITAS 3 ===");
let a3 = "10";
let b3 = "20";
let hasil = Number(a3) + Number(b3);
console.log("Hasil program:", hasil); // Output: 30
console.log("");


// =====================================================================
// F. AKTIVITAS 4 — PROGRAM KASIR SEDERHANA
// =====================================================================
console.log("=== F. AKTIVITAS 4 (KASIR SEDERHANA) ===");
let harga = Number(prompt("Masukkan harga: "));
let jumlah = Number(prompt("Masukkan jumlah: "));
let total = harga * jumlah;
console.log("Total belanja = " + total);
console.log("");


// =====================================================================
// G. TANTANGAN — PROGRAM HITUNG NILAI
// =====================================================================
console.log("=== G. TANTANGAN (PROGRAM HITUNG NILAI) ===");
let tugas = Number(prompt("Masukkan nilai Tugas: "));
let uts = Number(prompt("Masukkan nilai UTS: "));
let uas = Number(prompt("Masukkan nilai UAS: "));

let rataRata = (tugas + uts + uas) / 3;
console.log("Nilai rata-rata = " + rataRata);
console.log("");


// =====================================================================
// H. THINK — PAIR — SHARE
// =====================================================================
console.log("=== H. THINK — PAIR — SHARE ===");
console.log("1. Mengapa prompt() perlu dikonversi jika hasilnya ingin dihitung? Karena secara default prompt() selalu menghasilkan tipe data String.");
console.log("2. Apa perbedaan '10' dengan 10? '10' adalah String (teks), sedangkan 10 adalah Number (angka).");
console.log("3. Apa yang terjadi jika lupa Number()? Operator + akan menggabungkan angka sebagai teks (contoh: '10' + '5' = '105').");


