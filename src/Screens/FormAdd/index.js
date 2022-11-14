import HeaderSection from "../../Components/Header/Header";
import FooterSection from "../../Components/Footer/Footer";
import Formulario from "../../Components/Form/Form";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ADD_PROD } from '../../redux/Productos/prod.actions'

const addProd = () => {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    const nameChangeHandler = (event) => {
      setName({ id: uuid(), name: event.target.value });
    };
    
    const history = useHistory();
    const onSubmitHandler = () => {
        dispatch(addUser(name));
        history.push("/");
    };
    
    return (
        <div>
            <HeaderSection />
            <Formulario />
            <FooterSection />
        </div>
    );
}



/*

const AddUser = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const nameChangeHandler = (event) => {
    setName({ id: uuid(), name: event.target.value });
  };

  const history = useHistory();
  const onSubmitHandler = () => {
    dispatch(addUser(name));
    history.push("/");
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={nameChangeHandler}
          name="name"
          placeholder="Enter Name"
        />
      </FormGroup>
      <Button type="submit" color="primary" style={{ marginTop: "5px" }}>
        Submit
      </Button>
      <Link
        to="/"
        className="btn btn-danger"
        style={{ marginLeft: "5px", marginTop: "5px" }}
      >
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;

*/

export default addProd;