import React from "react";
import styles from './Table.module.css';
import Boton from "../SharedComponents/Boton";

function Table() {
    return (
        <>
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
                        <td>1</td>
                        <td>a1</td>
                        <td>a2</td>
                        <td>a3</td>
                        <td>
                            <Boton
                                tipo='editProd'
                                texto='Editar' />
                            <Boton
                                tipo='elimProd'
                                texto='Eliminar' />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>b1</td>
                        <td>b2</td>
                        <td>b3</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
