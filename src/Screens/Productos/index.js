import React from "react";
import HeaderSection from '../../Components/Header/Header';

import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import styles from './Index.module.css'
let linkProd = 'http://localhost:4000/exam_01_mcga/products/all';
let productos = '';

// const obtProductos = () => {
//     fetch (linkProd)
//     .then(function(respuesta) {
//         //return respuesta.json()
//         productos = respuesta.json();
//     })
// }

const Productos = () => {
    return(
        <div>
            <HeaderSection />
            <div className={styles.botProd}>
                <Boton
                tipo='prodABM'
                texto='Obtener todos' />
                <Boton
                tipo='prodABM'
                texto='Agregar nuevo' />
                <Boton
                tipo='prodABM'
                texto='Modificar' />
                <Boton
                tipo='prodABM'
                texto='Eliminar' />
            </div>
            
            <h1>Esta es la parte de productos</h1>

            Tabla


            <FooterSection />
        </div>
    );
}

export default Productos;