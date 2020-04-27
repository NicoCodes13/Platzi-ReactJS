import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const name = "Nicolas";
const element = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy GameDeveloper</p>
  </div>
);

const container = document.getElementById("app");

ReactDom.render(<Badge />, container);
