import { addProd, editProd, remProd  } from './prod.types';

export const addProduct = () => {
    return {
        type: addProd,
    };
};

export const editProduct = () => {
    return {
       type: editProd,
    };
};

export const remProduct = () => {
    return {
       type: remProd,
    };
};