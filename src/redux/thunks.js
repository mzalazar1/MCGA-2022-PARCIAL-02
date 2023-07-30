import { addProd } from './Productos/prod.actions'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

// aca defino las fn

export const getProducts = () => {

    const dispatch = useDispatch()

    const urlGetProd = 'http://localhost:5001/api/products'

    useEffect(() => {
        return async () => {
            console.log("me ejecuto")
            const response = await fetch(urlGetProd)
            const responseJSON = await response.json()
            responseJSON.data.forEach(element => {
                dispatch(addProd(element));
            });
        }
    }, [])
}