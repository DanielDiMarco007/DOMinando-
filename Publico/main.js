// Cambiar color de las cards cada 20 segundos (se mantiene igual)
setInterval(() => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = '#145a32'; // Verde oscuro
    card.style.transition = 'background-color 1s ease';
    setTimeout(() => {
      card.style.backgroundColor = '#1a1a1a';
    }, 10000);
  });
}, 20000);

// Cambiar el color del título principal cada 10 segundos
const titulo = document.getElementById('titulo-principal');
const colores = ['#756f4aff', 'rgba(35, 12, 73, 1)', '#6f0e96ff', '#FF0000', '#000000ff', '#146137ff'];
let indice = 0;

setInterval(() => {
  titulo.style.color = colores[indice];
  titulo.style.transition = 'color 1s ease';
  indice = (indice + 1) % colores.length;
}, 10000);



//intento de cambiar el color del fondo del titulo cada 10 segundos pero no salió jajajjajjaajaj
// const colorTitulo = document.getElementsByClassName('hero-section');
// const ColorFondoTitulo =['#ff5733', '#2d5835ff', '#3c4053ff', '#290d2bff', '#9b6b86ff', '#594e61ff'];

// colorTitulo.style.backgroundColor = '#000000';
// let indexFondo = 0;

// setInterval(() => {
// colorTitulo.style.color = ColorFondoTitulo[indexFondo];
// colorTitulo.style.transition = 'color 1s ease';
// indexFondo = (indexFondo + 1) % ColorFondoTitulo.length;

// }, 10000);