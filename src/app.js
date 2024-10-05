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
  const FiltrarArrays = arr => {
    arr.forEach(element => {
      if (
        element.slice(element.length - 1, element.length).toLowerCase() ===
          "us" ||
        "io"
      ) {
        console.log("hola");
      }
    });
  };

  let pronoun = ["the", "our"], // dominios
    adj = ["great", "big"],
    noun = ["jogger", "racoon"],
    domain = [".com", ".net", ".us", ".io"];

  let ar = CompararArrays(pronoun, adj),
    arr = CompararArrays(ar, noun),
    arrDefinitivo = CompararArrays(arr, domain);

  console.log(FiltrarArrays(arr));
};
