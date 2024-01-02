import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Product from './Product';
import {fetchProduct} from '../../redux/actions';

function ProductContainer(){
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(fetchProduct());
        setLoading(false);
    }, [dispatch]);
    return loading 
    ?
        (<div>Loading...</div>)
    :
        (<Product />)
}
export default ProductContainer;