import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Componente:
 * Basicamente uma função que retorna html. Pode ter funcionalidades javascript, css..
 * Criar componente quando: a) tiver um código que se repete muitas vezes na aplicação
 *                          b) isolar sem que o código faça diferença no restante da aplicação
 * 
 * JSX:
 * JavaScript XML, sintaxe para quando html está integrado dentro do JS
 * Necessário quando quiser injetar uma variável, função ou qualquer 
 * javascript dentro do html
 * 
 * Propriedade:
 * São atributos (como os atributos de elementos no html)
 * passados para componentes como parâmetros através de 'props'
 * 
 * Estado: 
 * Uma informação que será mantida pelo componente.
 * Toda vez que o estado é alterado, o componente irá re-renderizar as novas informações em tela
 * useState retorna um Array[valor, funcaoDeAtualizacao]
 * 
 * Imutabilidade:
 * Por questão de performance, nunca podemos manipular/alterar o valor do
 * estado de forma direta. O valor da variável do estado deve ser sobreposto
 */