export const addProd = (prod) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(addProdAsync(prod));
      }, 1000);
    };
};
  
export const addProdAsync = (prod) => {
    return {
      type: "ADD_PROD",
      payload: prod
    };
};
  
export const editProd = (prod) => {
    return {
      type: "EDIT_PROD",
      payload: prod
    };
};
  
export const removeProd = (id) => {
    return {
      type: "REMOVE_PROD",
      payload: id
    };
};