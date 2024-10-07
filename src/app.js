/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const CompararArrays = (arr1, arr2) => {
    //Funcion para comparar arrays y retornar uno nuevo
    let arr = []; // creamos un array nuevo a devolver
    arr1.forEach(element => {
      //hacemos un foreach de cada elemento del primer array a comparar
      for (let i = 0; i < arr2.length; i++) {
        arr.push(`${element}${arr2[i]}`); // con un for agregamos el elemento del foreach junto a cada elemento del array 2
      }
    });
    return arr; // retornamos el resultado
  };

  const FiltrarArrays = (arr, domain) => {
    // funcion para filtrar los dominios
    domain.forEach(element => {
      //filtramos por elemento
      for (let i = 0; i < arr.length; i++) {
        //comprobamos las dos ultimas silabas
        if (
          arr[i].slice(arr[i].length - 3, arr[i].length).toLowerCase() == //comprobamos las tres ultimas silabas
          element
        ) {
          arr[i] = `${arr[i].slice(0, arr[i].length - 3)}.${element}`; //actualizamos el valor agregando el dominio
        } else if (
          arr[i].slice(arr[i].length - 2, arr[i].length).toLowerCase() == //comprobamos las dos ultimas silabas
          element
        ) {
          arr[i] = `${arr[i].slice(0, arr[i].length - 2)}.${element}`; //actualizamos el valor agregando el dominio
        }
      }
    });
    return arr;
  };

  //Dominios
  let pronoun = ["the", "our", "this", "that", "my"],
    adj = ["great", "big", "little", "amazing", "crazy", "funny"],
    noun = [
      "telecom",
      "intercom",
      "dotcom",
      "internet",
      "cabernet",
      "bonus",
      "focus",
      "radio",
      "portafolio"
    ],
    domain = ["com", "net", "us", "io"];

  let arr = CompararArrays(pronoun, adj);

  arr = CompararArrays(arr, noun);
  arr = FiltrarArrays(arr, domain);

  console.log(arr);

  const boton = document.getElementById("ejemplo"),
    domainhtml = document.getElementById("domain");

  for (let i = 0; i < arr.length; i++) {
    domainhtml.innerHTML += `
      <tr>
          <th scope="row">${i + 1}</th>
          <td>${arr[i]}</td>
          <td>${arr[i].toUpperCase()}</td>
          <td><p>.com</p></td>
      </tr>`;
  }

  boton.addEventListener("click", function() {
    domainhtml.innerHTML = "";
  });
};
