import { addProd, editProd, remProd } from './prod.types';

const INITIAL_STATE = {
    products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addProd:
           return {
            //ver logica para agregar producto
            // ...state, count: state.count + 1,
           };

        case editProd:
           return {
            //ver logica para editar producto
            //  ...state, count: state.count - 1,
           };

        case remProd:
            return {
              
             //ver logica para eliminar producto
             //  ...state, count: state.count - 1,
            };

         default: return state;
    }
};

export default reducer;