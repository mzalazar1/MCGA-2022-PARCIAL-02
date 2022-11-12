import React from "react";
import HeaderSection from '../../Components/Header/Header';

import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
let linkProd = 'http://localhost:4000/exam_01_mcga/products/all';
let productos = '';

const obtProductos = () => {
    fetch (linkProd)
    .then(function(respuesta) {
        //return respuesta.json()
        productos = respuesta.json();
    })
}

const Recursos = () => {
    return(
        <div>
            <HeaderSection />
            <Boton
            tipo='prodABM'
            texto='Obtener todos' />
            <h1>Esta es la parte de productos</h1>
            <FooterSection />
        </div>
    );
}

export default Recursos;