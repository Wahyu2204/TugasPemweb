function validateForm() {

  clearErrors()
  
  let namaPelanggan = document.getElementById ('namaPelanggan').value
  let email = document.getElementById ('email').value
  let jamKeberangkatan = document.getElementById ('jamKeberangkatan').value
  let tujuanKeberangkatan = document.getElementById ('tujuanKeberangkatan').value
  let jumlahTiket = document.getElementById ('jumlahTiket').value

    let isValid = true;

    if (namaPelanggan.length === 0 || namaPelanggan.length > 30) {
      displayError("errorNamaPelanggan", "Nama Pelanggan harus diisi dan maksimal 30 karakter");
      isValid = false
    } else if (!isValidEmail(email)) {
      displayError("errorEmail", "Format email tidak valid");
      isValid = false
    } else if (!isValidJamKeberangkatan(jamKeberangkatan)) {
      displayError("errorJamKeberangkatan", "Format jam keberangkatan tidak valid (hh:mm)");
      isValid = false
    } else if (tujuanKeberangkatan.length === 0) {
      displayError("errorTujuanKeberangkatan", "Tujuan Keberangkatan harus diisi");
      isValid = false
    } else if (jumlahTiket < 1 || jumlahTiket > 10) {
      displayError("errorJumlahTiket", "Jumlah Tiket harus antara 1 dan 10");
      isValid = false
    }

    if (isValid) {
      displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket);
    }
  }

  function isValidEmail(email) {
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function isValidJamKeberangkatan(jam) {
    let jamRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return jamRegex.test(jam);
  }

  function displayError(message) {
    alert(message)
  }

  function displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Form Data:</h2>" +
      "<p><strong>Nama Pelanggan:</strong> " + namaPelanggan + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
      "<p><strong>Jam Keberangkatan:</strong> " + jamKeberangkatan + "</p>" +
      "<p><strong>Tujuan Keberangkatan:</strong> " + tujuanKeberangkatan + "</p>" +
      "<p><strong>Jumlah Tiket:</strong> " + jumlahTiket + "</p>";
  }

  function clearErrors() {
    
  }