import React from "react";
import HeaderSection from '../../Components/Header/Header';

import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import Form from "../../Components/Form/Form";
import styles from './Index.module.css'
let linkProd = 'http://localhost:4000/exam_01_mcga/products/all';
let productos = '';

const obtProductos = () => {
    fetch(linkProd)
        .then(function (respuesta) {
            //return respuesta.json()
            productos = respuesta.json();
        })
}
// const Table = () => {
//      return(
//         <div>
// <Table />
//         </div>
//      )
// }
const Recursos = () => {
    return (
        <div>
            <HeaderSection />
            <Boton
                tipo='prodABM'
                texto='Obtener todos' />
            <h1>Esta es la parte de productos</h1>
            < Form
                id='001'
                descripcion='coca cola'
                stock='20'
                precio='300'
            />
        </div>
    )
}

const Productos = () => {
    return (
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