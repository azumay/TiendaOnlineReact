
import * as React from 'react';
import CodiBloc from '../component/CodiBloc/CodiBloc';


export default function NavegacioBarVista(props) {

  const elements = `const elementsProba = [
    {
      nom: "Inici",
      icona: <CampaignIcon/>,
      redireccio: urlsApp.inici
    }, {
      nom: "divider"
    }
];`;

  const navegacio = `<NavegacioBar elementsMenu={elementsProba} >
    <Routes>
      <Route path={urlsApp.inici} element={<Inici/>}/>
      <Route path={urlsApp.barraNavegacio} element={<NavegacioBarVista/>}/>
      <Route path={urlsApp.login} element={<Login elementsLogin={elementLogin}/>}/>
    </Routes>
</NavegacioBar>`;

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Barra de navegación</h1>
      <h2>Librerías utilizadas:</h2>
      <p>Rutas de navegación: npm install react-router-dom</p>
      <h2>Propiedades</h2>
      <p><strong>titol</strong>: Titulo de la página. Se muestra en la parte izquierda de la barra. String. Valor por defecto: "Titol per defecte".</p>
      <p><strong>elementsMenu</strong>: Contiene la lista de elementos que se mostrarán en el menú. Array de objetos. No Obligatoria.</p>
      <p><strong>children</strong>: Contenido a mostrar en la página. Contenido. Obligatoria.</p>
      <CodiBloc idioma={"html"} codi={navegacio}></CodiBloc>
      <h2>Componentes internos utilizados:</h2>
      <h3>Menu</h3>
      <p>Parte izquierda desplegable. Contiene la lista de navegación.</p>
      <h4>Propiedades</h4>
      <p><strong>setOpen</strong>: Función encargada de actualizar el estado del menú (Abierto/Cerrado). Función. Obligatoria.</p>
      <p><strong>open</strong>: Variable que contiene el estado del menú (true/false). Variable. Obligatoria.</p>
      <p><strong>elementsMenu</strong>: Contiene la lista de elementos que se mostrarán en el menú. Array de objetos. Obligatoria.</p>
      <h3>Llista</h3>
      <p>Genera la lista con los elementos para mostrar en el menú.</p>
      <h4>Propiedades</h4>
      <p><strong>element</strong>: Proviene de elementsMenu. Array de objetos que contiene: Nombre, Icono y Url de redirección. Ejemplo:</p>
      <CodiBloc codi={elements}></CodiBloc>
      <p>* Para insertar un "Divider", enviaremos el objeto únicamente con el nom: "divider".</p>
    </div>
  );
}