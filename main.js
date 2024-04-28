class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

let pendaftarList = [];

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function validateForm(event) {
  event.preventDefault();
  let nama = document.getElementById("nama").value;
  let umur = parseInt(document.getElementById("umur").value);
  let uang = parseInt(document.getElementById("uang").value);

  if (nama.length < 10) {
    alert("Nama harus minimal 10 karakter!");
    return;
  }

  if (umur < 25) {
    alert("Umur harus minimal 25 tahun!");
    return;
  }

  if (uang < 100000 || uang > 1000000) {
    alert("Uang sangu harus minimal 100 ribu dan maksimal 1 juta!");
    return;
  }

  const pendaftar = new Pendaftar(nama, umur, uang);
  pendaftarList.push(pendaftar);
  updateList();
}

function updateList() {
  let tableBody = document.getElementById("pendaftarBody");
  tableBody.innerHTML = "";
  let totalUmur = 0;
  let totalUang = 0;
  pendaftarList.forEach((pendaftar) => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = pendaftar.nama;
    cell2.innerHTML = pendaftar.umur;
    cell3.innerHTML = pendaftar.uang;
    totalUmur += pendaftar.umur;
    totalUang += pendaftar.uang;
  });

  const averageUmur = totalUmur / pendaftarList.length;
  const averageUang = totalUang / pendaftarList.length;
  document.getElementById(
    "resume"
  ).innerText = `Rata-rata pendaftar memiliki uang sangu sebesar Rp ${averageUang} dengan rata-rata umur ${averageUmur}`;
}
