/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import { CompararArrays, FiltrarArrays } from "./functions";

window.onload = function() {
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
  ];

  //variables interactivas junto al html
  const btnlimpiartabla = document.getElementById("btnLimpiar"),
    btnSubirDomain = document.getElementById("btnSubirDomain"),
    inputsubirdomain = document.getElementById("inputdomain"),
    btnMostrarTodos = document.getElementById("all"),
    botonesFiltrar = document.querySelectorAll(".btnfiltrar"),
    contenedorDomains = document.getElementById("containerDomains");

  let arrDomains = [];

  btnMostrarTodos.addEventListener("click", () => {
    let number = 1;
    contenedorDomains.innerHTML = "";
    arrDomains.forEach(arr => {
      for (let i = 0; i < domains.length; i++) {
        contenedorDomains.innerHTML += `
             <tr>
                 <th scope="row">${number}</th>
                 <td>${arr}</td>
                 <td>${arr}.${domains[i]}</td>
                 <td>${domains[i]}</p></td>
             </tr>`;
        return (number = number + 1);
      }
    });
  });
  btnSubirDomain.addEventListener("click", () => {
    inputsubirdomain.placeholder = "Domain Added!";
    arrDomains.push(inputsubirdomain.value);
    inputsubirdomain.value = "";
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
