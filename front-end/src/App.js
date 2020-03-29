import React from "react";

import "./global.css";

import Routes from "./routes";

function App() {
  return <Routes />;
}

export default App;

//Componente no react é uma função que retorna um JavaScript
//Quando o HTML está dentro do JavaScript nós temos o JSX = JavaScript XML
//Não podemos alterar o valor do estado de uma forma direta como por exemplo: counter++ é necessario utilizar uma função de atualização;
//useState nos retorna um Array[valor, funcaoDeAtualizacao]
//Criamos estados sempre que precisamos refletir a mudança de valores na tela
