
import * as React from 'react';
import CodiBloc from '../component/CodiBloc/CodiBloc';


export default function Inici(props) {
    const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
    return (

        <div style={{ textAlign: "left" }}>
            <h1>Los diez mandamientos</h1>
            <p>1. Añadir en documentación librerias que no sean internas o de material</p>
            <p>2. Siempre tener un export Default en los ficheros JS</p>
            <p>3. No crear más de un componente por fichero JS si no son dependientes entre ellos. Siempre intentar hacer componentes por separado para que sean reutilizables.</p>
            <p>4. El componente debería recibir siempre (props) y en la línea siguiente las separaríamos en constantes ej: </p>
            <CodiBloc codi={codi}></CodiBloc>
            <p>5. Definir las props(si son obligatorias,tipos de datos,valores por defecto...)</p>
            <p>6. Separar todos los estilos de los componentes en diferentes archivos.</p>
            <p>7. Utilizar css globales que afecten a todos los componentes del proyecto. Ejemplo: definir un color para los textfield y que se aplique en todos los del proyecto.</p>
            <p>8. El return siempre tiene que ser lo último de la función. Seguido de las constantes/funciones necesarias.</p>
            <p>9. No nombrar componentes como Index.js, es recomendable llamar al principal como el nombre de la página.</p>
            <p>10. Respetar patron de nombres (minúsculas/mayúsculas) de carpetas/archivos del proyecto.</p>
            <h2>Librerías globales necesarias:</h2>
            <p>1. Instalar MUI: npm install @mui/material @emotion/react @emotion/styled</p>
            <p>2. Instalar iconos MUI: npm i @mui/icons-material</p>
        </div>
    );
}