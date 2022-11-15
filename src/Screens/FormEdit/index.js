import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editProd } from '../../redux/Productos/prod.actions';

const EditProd = () => {

    const [selectedProd, setSelectedProd] = useState({});
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Reduc.products);
    const currentId = useParams();
    //setTodos(products.filter((prod) => prod.id !== id))

    const prodChangeHandler = (event) => {
        setSelectedProd({ ...selectedProd, name: event.target.value.name });
    };
    const navigate = useNavigate();
    const onSubmitHandler = () => {
        dispatch(editProd(selectedProd));
        navigate("/");
    };

    useEffect(() => {
        const prodDetail = products.filter(prod => prod.id === currentId.id);
        console.log("prod detail: ", prodDetail[0])
        setSelectedProd(prodDetail[0]);
        console.log("selectedprod: ", selectedProd)
    }, [selectedProd]);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Nombre:</label>
                <input
                    type="text"
                    onChange={prodChangeHandler}
                    value={selectedProd.name}
                    name="name"
                    placeholder="Enter Name"
                />
                <label>Precio:</label>
                <input
                    type="text"
                    //onChange={prodChangeHandler}
                    value={selectedProd.price}
                    name="price"
                    placeholder="Ingrese el precio"
                />
                <label>Stock:</label>
                <input
                    type="text"
                    //onChange={prodChangeHandler}
                    value={selectedProd.stock}
                    name="stock"
                    placeholder="Ingrese el stock"
                />
                <label>Descripcion:</label>
                <input
                    type="text"
                    //onChange={prodChangeHandler}
                    value={selectedProd.description}
                    name="description"
                    placeholder="Ingrese la descripcion"
                />
                <button type="submit">
                    Submit
                </button>
                <Link
                    to="/productos"
                >
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default EditProd;