/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let com = [".com", ".io"];

window.domnames = function domnames() {
  for (var i = 0; i < pronoun.length; i++) {
    for (var a = 0; a < adj.length; a++) {
      for (var b = 0; b < noun.length; b++) {
        for (var c = 0; c < noun.length; c++) {
          document.querySelector("#results").innerHTML +=
            "<li>" + pronoun[i] + adj[a] + noun[b] + com[c] + "</li>";
        }
      }
    }
  }
  document.getElementById("butt").disabled = true;
};
