// 12 divisions
const divisions = [
  {key:'Technology',desc:'Divisi Technology: fokus pada pengembangan perangkat lunak, IoT, dan solusi digital.'},
  {key:'Aerospace',desc:'Divisi Aerospace: riset dan produksi teknologi penerbangan & antariksa.'},
  {key:'Defense',desc:'Divisi Defense: sistem dan teknologi pertahanan.'},
  {key:'Industries',desc:'Divisi Industries: manufaktur & otomasi industri.'},
  {key:'Steel',desc:'Divisi Steel: produksi baja skala besar.'},
  {key:'Energy',desc:'Divisi Energy: energi terbarukan & infrastruktur energi.'},
  {key:'Medical',desc:'Divisi Medical: perangkat medis & layanan kesehatan.'},
  {key:'Chemicals',desc:'Divisi Chemicals: bahan kimia industri & khusus.'},
  {key:'Shipping',desc:'Divisi Shipping: logistik & distribusi global.'},
  {key:'Foods',desc:'Divisi Foods: makanan & minuman.'},
  {key:'Entertainment',desc:'Divisi Entertainment: hiburan, media & event.'},
  {key:'Foundation',desc:'Divisi Foundation: CSR, beasiswa & sosial.'}
];

const divContainer = document.getElementById("divisions");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalReadmore = document.getElementById("modalReadmore");
const closeModal = document.getElementById("closeModal");

// Render divisions
divisions.forEach(d => {
  const el = document.createElement("div");
  el.className = "division";
  el.textContent = d.key;
  el.onclick = () => openModal(d);
  divContainer.appendChild(el);
});

// Modal functions
function openModal(d){
  modalTitle.textContent = d.key;
  modalBody.textContent = d.desc;
  modalReadmore.onclick = () => {
    window.location.href = "#/divisi/" + encodeURIComponent(d.key);
  };
  modal.classList.add("open");
}
closeModal.onclick = () => modal.classList.remove("open");
modal.onclick = e => { if(e.target === modal) modal.classList.remove("open"); };

// Form demo
document.getElementById("sendBtn").onclick = () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  if(!name || !email || !msg){
    alert("Mohon isi semua kolom.");
    return;
  }

  const store = JSON.parse(localStorage.getItem("feedbacks") || "[]");
  store.push({name,email,msg,ts:Date.now()});
  localStorage.setItem("feedbacks", JSON.stringify(store));

  alert("Terima kasih! Pesan telah disimpan (demo).");

  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("msg").value="";
};
