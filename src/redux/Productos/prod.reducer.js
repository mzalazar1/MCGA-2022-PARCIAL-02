import {addProd, editProd, remProd} from './prod.types';

const INITIAL_STATE = {
    products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addProd:
            return {
                products: [action.payload, ...state.products]
            };

        case editProd:
            const updProdDetail = action.payload;
            const updProd = state.products.map((product) => {
            if (product.id === updProdDetail.id) {
                return updProdDetail;
            } else {
                return user;
            }
            });
            return { products: updProd };

        case remProd:
            return {
                products: state.products.filter((product) => {
                  return product.id !== action.payload;
                })
            };

        default: return state;
    }
};

export default reducer;  