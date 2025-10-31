
//  selectores/recorrido de DOM

const titulo = document.querySelector("#inicio h1"); // Selector directo
const contenedorModelos = document.querySelector("#modelos .row"); // contenedor de cards
const formulario = document.querySelector("form");

// Recorrido de DOM (padre, hijo, hermano)
console.log("Padre del título:", titulo.parentElement.tagName);
console.log("Primer hijo del header:", titulo.parentElement.children[0]?.tagName);
console.log("Siguiente hermano del header:", titulo.parentElement.nextElementSibling?.tagName);


//  cambio de color del título cada 10 segundos

const colores = ["#FFD700", "#FF4500", "#1E90FF", "#00FF7F", "#FF0000", "#FFA500"];
let i = 0;

setInterval(() => {
  titulo.style.color = colores[i];
  titulo.style.transition = "color 1s ease";
  i = (i + 1) % colores.length;
}, 10000);


// renderizado de tarjetas

const autos = [
  {
    nombre: "Hot Rod Flame  $45.000",
    descripcion: "Edición limitada con detalles en fuego y motor cromado.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNW1A2IaOfzn8KM0_Vztr6smpOH95t-FFiiuYboYkKCPn6nH3AH6p1VCtagiw-0Ghp_g&usqp=CAU"
  },
  {
    nombre: "Speed Racer GT $30.000",
    descripcion: "Diseño aerodinámico con carrocería en un negro imponente y llantas deportivas.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_PHxzJVt-KV7wq33peR2DfVv37WozJzqyg&s"
  },
  {
    nombre: "Monster Blazer $25.000 ",
    descripcion: "Camioneta todoterreno de edición Monster con suspensión alta.",
    imagen: "https://i.ebayimg.com/images/g/D-oAAOSwMg1llWmf/s-l1200.jpg"
  }
];

// Limpia las tarjetas originales
contenedorModelos.innerHTML = "";

// Crea dinámicamente las cards
autos.forEach(auto => {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
    <div class="card shadow h-100">
      <img src="${auto.imagen}" class="card-img-top" alt="Auto HotWheels ${auto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${auto.nombre}</h5>
        <p class="card-text">${auto.descripcion}</p>
        <a href="#" class="btn btn-warning text-dark btn-comprar" data-auto="${auto.nombre}">Comprar</a>
      </div>
    </div>
  `;
  contenedorModelos.append(card);
});

//  EVENTOS + DELEGACIÓN

contenedorModelos.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    const auto = e.target.dataset.auto;
    e.target.textContent = "Comprado ✅";
    e.target.style.backgroundColor = "#28a745";
    e.target.style.color = "#fff";
    e.target.classList.add("comprado");
    alert(`🚗 ¡Has comprado el modelo ${auto}!`);
  }
});


// CREAR / ELIMINAR ELEMENTOS

const botonAgregar = document.createElement("button");
botonAgregar.textContent = "➕ Agregar nuevo modelo";
botonAgregar.classList.add("btn", "btn-success", "my-4", "d-block", "mx-auto");
document.querySelector("#modelos").append(botonAgregar);

botonAgregar.addEventListener("click", () => {
  const nuevoAuto = {
    nombre: "Hyper Racer  $20.000",
    descripcion: "Nuevo modelo futurista con luces LED y chasis plateado.",
    imagen: "https://th.bing.com/th/id/R.9949336b2b432b9302220bf7abe49a46?rik=kbnVOVwu1KGirg&riu=http%3a%2f%2fwww.tomica.pl%2fgalerie%2fo%2fou-hot-wheels-hyper-racer-yur_13207.jpg&ehk=TQ%2bcRtSc6jas7WgSRwz8YHLR%2fsxdC5Bgbt4JhUKlERs%3d&risl=&pid=ImgRaw&r=0"
  };


    const nuevoAuto1 = {
    nombre: "Ferrari 312p $15.000",
    descripcion: "Un modelo grand prix especial con carrosería en rojo plateado",
    imagen: "https://th.bing.com/th/id/OIP.HBwcgdMR1ssFkMgMfiHI6gHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  };


    const nuevoAuto2 = {
    nombre: "Porsche   $18.000",
    descripcion: "modelo increible para subir nenas :).",
    imagen: "https://th.bing.com/th/id/OIP.rijKv5bbXEe4u5NodxYlbgHaLH?w=130&h=195&c=7&r=0&o=7&pid=1.7&rm=3"
  };


    const nuevoAuto3 = {
    nombre: "Fontiac Firebird $20.000",
    descripcion: "modelo clasico , con carrosería morada con flamas que le dan estilos, un clásico.",
    imagen: "https://i.pinimg.com/originals/64/43/5a/64435afe3853966c799301e7a3112450.jpg"
  };




  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
    <div class="card shadow h-100">
      <img src="${nuevoAuto.imagen}" class="card-img-top" alt="Nuevo HotWheels Hyper Racer">
      <div class="card-body">
        <h5 class="card-title">${nuevoAuto.nombre}</h5>
        <p class="card-text">${nuevoAuto.descripcion}</p>
        <a href="#" class="btn btn-warning text-dark btn-comprar" data-auto="${nuevoAuto.nombre}">Comprar</a>
        <button class="btn btn-danger mt-2 btn-eliminar">Eliminar</button>
      </div>
    </div>
  `;
  contenedorModelos.append(card);





   const card2 = document.createElement("div");
  card2.classList.add("col");
  card2.innerHTML = `
    <div class="card shadow h-100">
      <img src="${nuevoAuto1.imagen}" class="card-img-top" alt="Nuevo HotWheels Hyper Racer">
      <div class="card-body">
        <h5 class="card-title">${nuevoAuto1.nombre}</h5>
        <p class="card-text">${nuevoAuto1.descripcion}</p>
        <a href="#" class="btn btn-warning text-dark btn-comprar" data-auto="${nuevoAuto1.nombre}">Comprar</a>
        <button class="btn btn-danger mt-2 btn-eliminar">Eliminar</button>
      </div>
    </div>
  `;
  contenedorModelos.append(card2);







   const card3 = document.createElement("div");
  card3.classList.add("col");
  card3.innerHTML = `
    <div class="card shadow h-100">
      <img src="${nuevoAuto2.imagen}" class="card-img-top" alt="Nuevo HotWheels Hyper Racer">
      <div class="card-body">
        <h5 class="card-title">${nuevoAuto2.nombre}</h5>
        <p class="card-text">${nuevoAuto2.descripcion}</p>
        <a href="#" class="btn btn-warning text-dark btn-comprar" data-auto="${nuevoAuto2.nombre}">Comprar</a>
        <button class="btn btn-danger mt-2 btn-eliminar">Eliminar</button>
      </div>
    </div>
  `;
  contenedorModelos.append(card3);


   const card4 = document.createElement("div");
  card4.classList.add("col");
  card4.innerHTML = `
    <div class="card shadow h-100">
      <img src="${nuevoAuto3.imagen}" class="card-img-top" alt="Nuevo HotWheels Hyper Racer">
      <div class="card-body">
        <h5 class="card-title">${nuevoAuto3.nombre}</h5>
        <p class="card-text">${nuevoAuto3.descripcion}</p>
        <a href="#" class="btn btn-warning text-dark btn-comprar" data-auto="${nuevoAuto3.nombre}">Comprar</a>
        <button class="btn btn-danger mt-2 btn-eliminar">Eliminar</button>
      </div>
    </div>
  `;
  contenedorModelos.append(card4);
});



//  eliminar tarjeta
contenedorModelos.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    e.target.closest(".col").remove();
  }
});


// validación del formularioooo(sin recargar)

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formulario.querySelector("input[type='text']").value.trim();
  const correo = formulario.querySelector("input[type='email']").value.trim();
  const mensaje = formulario.querySelector("textarea").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("⚠️ Todos los campos son obligatorios.");
  } else if (!correo.includes("@") || !correo.includes(".")) {
    alert("⚠️ Ingresa un correo válido.");
  } else {
    alert(`✅ Gracias por tu mensaje, ${nombre}!`);
    formulario.reset();
  }
});


// ACCESIBILIDAD MÍNIMA

titulo.setAttribute("tabindex", "0");
titulo.setAttribute("role", "heading");
titulo.setAttribute("aria-label", "Título principal HotWheels Store");



// Cambia el color de fondo de las cards cada 20 segundos
setInterval(() => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = '#fc8148ff'; // Verde oscuro
    card.style.transition = 'background-color 1s ease';
    setTimeout(() => {
      card.style.backgroundColor = '#1a1a1a'; // Vuelve al color original
    }, 10000);
  });
}, 20000);

