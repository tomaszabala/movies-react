import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Componente(props) {
//   console.log(props);

//   UNA FORMA DE ESTRUCTURAR PROPIEDADES:
//   const titulo = props.titulo;
//   const contenido = props.contenido;

  // OTRA FORMA:    
//   const { titulo, children} = props;

//   return (
//     <div className='contenedor'>
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

root.render(<App/>);


