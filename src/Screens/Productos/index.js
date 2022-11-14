import React from "react";
import HeaderSection from '../../Components/Header/Header';
import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import styles from './Index.module.css'
import Tabla from '../../Components/Table/table'

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
                <a href='./addproduct'>
                <Boton
                tipo='prodABM'
                texto='Agregar nuevo' />
                </a>                
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
