let leermas_btn = document.getElementById('leermas_btn');
let ocultartexto = document.getElementById('ocultartexto');

leermas_btn.addEventListener('click', toggleText);

function toggleText() {
  ocultartexto.classList.toggle('showText');

  if(ocultartexto.classList.contains('showText')) {
    leermas_btn.innerHTML = 'Leer menos'
  }
  else {
    leermas_btn.innerHTML = 'leer mas'
  }
}