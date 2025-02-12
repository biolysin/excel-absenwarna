function totalwarnaBaris(selReferensi, baris) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  var range = sheet.getRange(baris + ":" + baris); // Ambil seluruh baris tertentu
  var backgrounds = range.getBackgrounds()[0]; // Warna background hanya untuk satu baris
  
  var warnaReferensi = sheet.getRange(selReferensi).getBackground(); // Warna referensi
  var total = 0; // Untuk menghitung jumlah sel yang sesuai

  for (var j = 0; j < backgrounds.length; j++) {
    if (backgrounds[j] === warnaReferensi) {
      total++; // Tambah 1 untuk setiap sel dengan warna yang sama
    }
  }

  return total; // Mengembalikan jumlah sel dengan warna yang sama di baris tersebut
}
