import data from './resources/js/data';
import './style.css';

const car = [];

const addToCar = (id) => {
  const [producto] = data.filter(dt => dt.id === parseInt(id))
  car.push(producto);
}

const mostrarDatos = () => {
  const tabla = document.querySelector("#tabla");
  car.forEach(dato => {
    tabla.innerHTML += `
    <tr>
      <td>${dato.name}</td>
      <td>
        <input type="number" value="1" min="1" max="10">
      </td>
      <td>${dato.price}</td>
      <td>x</td>
    </tr>`
  });
}

const modal = document.querySelector("#modal");
const show = document.querySelector("#show");
const cancel = document.querySelector("#cancel");
const main = document.querySelector("#main");

show.addEventListener('click',e=>{
  modal.showModal();
  mostrarDatos();
});

cancel.addEventListener('click',e=>modal.close());

data.forEach(dato => {
  main.innerHTML += `
    <div class="etiqueta">
      <div>
        <img class="imagen" src="${dato.image}" />
        <p>${dato.desc}</p>
      </div>
      <div data-id="${dato.id}">
        <p>$ ${dato.price}</p>
        <button>Add to Car</button>
      </div>
    </div>`
});

const botones = document.querySelectorAll("button");

botones.forEach(boton => boton.addEventListener("click", (e) => addToCar(e.target.parentNode.dataset.id)));

