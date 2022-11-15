import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Boton from "../SharedComponents/Boton";
import styles from './Table.module.css'
const Tabla = () => {
  const products = useSelector((state) => state.Reduc.products);
  const dispatch = useDispatch();
  return (
    <div>
      
    {products.length > 0 ? (
      <div>
          {products.map((product) => (
            <table className={styles.Table} key={product}>
                
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
        </div>
      ) : (
        <h4>No hay productos cargados</h4>
      )}
    </div>
  );
};
export default Tabla;
