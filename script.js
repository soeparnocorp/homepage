// divisions data
const divisions = [
  {key:'Technology',desc:'Divisi Technology: fokus pada pengembangan perangkat lunak, IoT, dan solusi digital.'},
  {key:'Aerospace',desc:'Divisi Aerospace: riset dan produksi teknologi penerbangan & antariksa.'},
  {key:'Defense',desc:'Divisi Defense: sistem dan teknologi pertahanan.'},
  {key:'Industries',desc:'Divisi Industries: manufaktur & automasi industri.'},
  {key:'Steel',desc:'Divisi Steel: produksi baja skala besar dan solusi struktur.'},
  {key:'Energy',desc:'Divisi Energy: energi terbarukan, grid & infrastruktur energi.'},
  {key:'Medical',desc:'Divisi Medical: perangkat medis dan solusi layanan kesehatan.'},
  {key:'Chemicals',desc:'Divisi Chemicals: bahan kimia industri & solusi kimia khusus.'},
  {key:'Shipping',desc:'Divisi Shipping: logistik, transportasi & distribusi global.'},
  {key:'Foods',desc:'Divisi Foods: produksi, pengolahan & distribusi makanan.'},
  {key:'Entertainment',desc:'Divisi Entertainment: konten digital, event, dan hiburan.'},
  {key:'Foundation',desc:'Divisi Foundation: CSR, beasiswa, dan program sosial komunitas.'}
];

// render divisions into hero
const divContainer = document.getElementById('divisions');
divisions.forEach(d => {
  const el = document.createElement('div');
  el.className = 'division';
  el.tabIndex = 0;
  el.setAttribute('role','button');
  el.textContent = d.key;
  el.addEventListener('click', () => openModal(d));
  el.addEventListener('keypress', (e) => { if(e.key === 'Enter' || e.key === ' ') openModal(d); });
  divContainer.appendChild(el);
});

// modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalReadmore = document.getElementById('modalReadmore');
const closeModalBtn = document.getElementById('closeModal');

// open modal with division content
function openModal(d){
  modalTitle.textContent = d.key;
  modalBody.textContent = d.desc;
  modalReadmore.onclick = () => {
    // default behaviour: route to a detail anchor (placeholder)
    window.location.href = '/divisi/' + encodeURIComponent(d.key);
  };
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  // focus management
  closeModalBtn.focus();
}

// close modal
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

// footer form demo (stores to localStorage)
const footerSend = document.getElementById('footerSend');
footerSend.addEventListener('click', () => {
  const name = document.getElementById('f_name').value.trim();
  const email = document.getElementById('f_email').value.trim();
  const msg = document.getElementById('f_msg').value.trim();

  if(!name || !email || !msg){
    alert('Mohon isi semua kolom.');
    return;
  }

  const store = JSON.parse(localStorage.getItem('soeparno_feedbacks') || '[]');
  store.push({name,email,msg,ts:Date.now()});
  localStorage.setItem('soeparno_feedbacks', JSON.stringify(store));
  alert('Terima kasih! Pesan telah disimpan (demo).');

  document.getElementById('f_name').value = '';
  document.getElementById('f_email').value = '';
  document.getElementById('f_msg').value = '';
});

// set copyright year
document.getElementById('year').textContent = new Date().getFullYear();
