import React from 'react';
import Card from './Card';
import './Product.css';
import { useSelector } from 'react-redux';

function Product(){
    const products = useSelector((state) => state.product);
    return !products || !products.length 
        ? 
            (<div>No products</div>)
        :   
            <div className='card-container'>
                {products.map(product =>
                        (<Card product={product}/>)
                )}    
            </div>
                     
}
export default Product;