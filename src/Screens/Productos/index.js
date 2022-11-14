import React from "react";
import HeaderSection from '../../Components/Header/Header';
import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import styles from './Index.module.css'
import Tabla from '../../Components/Table/table'

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, remProduct } from '../../redux/Productos/prod.actions'




const Productos = () => {

    // const dispatch = useDispatch();
    // const { products } = useSelector((state) => state.products);

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
                
            </div>

            {/* <button type='button' onClick={() => dispatch(addProduct())}>Agrega producto</button>
            <button type='button' onClick={() => dispatch(editProduct())}>Edita Producto</button>
            <div>Estado: {products}</div> */}

            <Tabla />

            <FooterSection />
        </div>
    );
}

export default Productos;
