/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const ELEMENTOSTABLA = () => {
    for (let i = 0; i < 6; i++) {
      contenedorDomains.innerHTML += `
      <tr>
        <th scope="row">x</th>
        <td>--------------</td>
        <td>--------------</td>
        <td>--------------</p></td>
      </tr>`;
    }
  };

  const MOSTRARTODOSTABLA = () => {
    numberId = 1;
    contenedorDomains.innerHTML = "";
    arrDomains.forEach(arr => {
      for (let i = 0; i < domains.length; i++) {
        contenedorDomains.innerHTML += `
             <tr>
                 <th scope="row">${numberId}</th>
                 <td>${arr}</td>
                 <td>${arr}.${domains[i]}</td>
                 <td>${domains[i]}</p></td>
             </tr>`;
        numberId = numberId + 1;
      }
    });
  };

  //Domains
  let domains = [
      "com",
      "org",
      "net",
      "edu",
      "gov",
      "app",
      "biz",
      "co",
      "xyz",
      "me",
      "io"
    ],
    //varianbles interactivas junto al html
    arrDomains = [],
    numberId = 1;

  //constantes de referencias del html
  const btnlimpiartabla = document.getElementById("btnLimpiar"),
    btnSubirDomain = document.getElementById("btnSubirDomain"),
    inputsubirdomain = document.getElementById("inputdomain"),
    btnMostrarTodos = document.getElementById("all"),
    botonesFiltrar = document.querySelectorAll(".btnfiltrar"),
    contenedorDomains = document.getElementById("containerDomains");

  //Eventos

  btnlimpiartabla.addEventListener("click", () => {
    arrDomains = [];
    contenedorDomains.innerHTML = `
    `;
    ELEMENTOSTABLA();
  });

  btnSubirDomain.addEventListener("click", () => {
    inputsubirdomain.placeholder = "Domain Added!";
    arrDomains.push(inputsubirdomain.value);

    inputsubirdomain.value = "";
    MOSTRARTODOSTABLA();
  });

  btnMostrarTodos.addEventListener("click", () => {
    MOSTRARTODOSTABLA();
  });

  botonesFiltrar.forEach(btn => {
    btn.addEventListener("click", () => {
      contenedorDomains.innerHTML = "";
      for (let i = 0; i < arrDomains.length; i++) {
        console.log("hola");
        contenedorDomains.innerHTML += `
             <tr>
                 <th scope="row">${i + 1}</th>
                 <td>${arrDomains[i]}</td>
                 <td>${arrDomains[i]}.${btn.value}</td>
                 <td>${btn.value}</p></td>
             </tr>`;
      }
    });
  });
};
