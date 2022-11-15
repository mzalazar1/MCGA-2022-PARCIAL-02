export const addProd = (prod) => {
  return (dispatch) => {
    dispatch(addProdAsync(prod));
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