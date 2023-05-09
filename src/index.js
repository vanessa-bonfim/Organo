
import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom/client'; // Importa o módulo ReactDOM da biblioteca React para renderização no cliente
import './index.css'; // Importa o arquivo CSS específico para o índice (index.css)
import App from './App'; // Importa o componente App do arquivo App.js

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria uma raiz de renderização no elemento com o id 'root' no documento HTML
root.render( // Renderiza o conteúdo na raiz criada
  <React.StrictMode> {/* // Componente StrictMode usado para ativar verificações de segurança e melhores práticas */}
    <App /> {/* // Renderiza o componente App */}
  </React.StrictMode>
);
