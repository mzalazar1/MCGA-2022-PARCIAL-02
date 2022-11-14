import {addProd, editProd, remProd} from './prod.types';

const INITIAL_STATE = {
    products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PROD':
            return {
                products: [action.payload, ...state.products]
            };

        case 'EDIT_PROD':
            const updProdDetail = action.payload;
            const updProd = state.products.map((product) => {
            if (product.id === updProdDetail.id) {
                return updProdDetail;
            } else {
                return product;
            }
            });
            return { products: updProd };

        case 'REMOVE_PROD':
            return {
                products: state.products.filter((product) => {
                  return product.id !== action.payload;
                })
            };

        default: return state;
    }
};

export default reducer;  