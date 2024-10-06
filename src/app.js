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
    domain.forEach(element => {
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i].slice(arr[i].length - 3, arr[i].length).toLowerCase() ==
          element
        ) {
          arr[i] = `${arr[i].slice(0, arr[i].length - 3)}.${element}`;
        } else if (
          arr[i].slice(arr[i].length - 2, arr[i].length).toLowerCase() ==
          element
        ) {
          arr[i] = `${arr[i].slice(0, arr[i].length - 2)}.${element}`;
        }
      }
    });
    return arr;
  };

  let pronoun = ["the", "our", "this", "that", "my"], // dominios
    adj = ["great", "big", "ejemplus", "little", "amazing", "crazy", "funny"],
    noun = [
      "jogger",
      "racoon",
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

  let ar = CompararArrays(pronoun, adj),
    arr = CompararArrays(ar, noun);
  console.log(FiltrarArrays(arr, domain));
};
