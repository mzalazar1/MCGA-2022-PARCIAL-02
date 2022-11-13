
import React, { useState } from "react";

const Form = ({ id, descripcion, stock, precio }) => {

    // const [formState, setFormState] = useState({
    //     id,
    //     descripcion,
    //     stock,
    //     precio
    // })
    // const { id, descripcion, stock, precio } = formState;
    return (
        <>
            <h1>Formulario</h1>
            <hr />

            <input
                type="text"
                className="form"
                placeholder="id"
                name="id"
                value={id}
            />
            <input
                type="text"
                className="form"
                placeholder="descripcion"
                name="desc"
                value={descripcion}
            />
            <input
                type="text"
                className="form"
                placeholder="stock"
                name="stock"
                value={stock}
            />
            <input
                type="text"
                className="form"
                placeholder="precio"
                name="precio"
                value={precio}
            />

        </>

    )
}

export default Form