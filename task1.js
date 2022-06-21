const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
};

cekHariKerja('minggu') //di sini saya meng-invoke function dengan parameternya
  .then((result) => console.log(result)) //di sini saya menampilkan hasil dari function jika promise mengembalikan resolve
  .catch((err) => console.log('bukan hari kerja')); //di sini saya menampilkan hasil dari function jika promise mengembalikan reject

async function cekHari() {
  // di sini saya membuat function untuk menjalankan try dan catch dan saya memberikan syntax async sebelum nama function supaya function tidak dijalankan terlebih ddahulu
  try {
    await cekHariKerja('senin'); // di sini saya meng-invoke function cekHariKerja supaya dikerjakan lebih dahulu sebelum function parent dengan memberi syntax await
    console.log('hari kerja'); // di sini saya menampilkan hasil jika fuction cekHariKerja tidak error
  } catch (err) {
    console.log('bukan hari kerja'); // di sini saya menampilkan hasil jika fuction cekHariKerja error
  }
}

cekHari(); // di sini saya meng-invoke fuction cekHari supaya berjalan
