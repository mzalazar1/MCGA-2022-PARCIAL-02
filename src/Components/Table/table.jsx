import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Boton from "../SharedComponents/Boton";
import styles from './Table.module.css'
const Tabla = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  return (
    <div>
    {products.length > 0 ? (
        <Fragment>
          {products.map((product) => (
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.description}</td>
                        <td>
                            <Boton
                                tipo='editProd'
                                texto='Editar' />
                            <Boton
                                tipo='elimProd'
                                texto='Eliminar' />
                        </td>
                    </tr>
                </tbody>
            </table>
          ))}
        </Fragment>
      ) : (
        <h4>No hay productos cargados</h4>
      )}
    </div>
  );
};
export default Tabla;
