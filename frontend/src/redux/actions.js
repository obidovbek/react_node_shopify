import fetchShopifyProducts from "../services/fetch-shopify-products"

export const fetchProduct = ()=>{
    return async (dispatch)=>{
        try{
            const products = await fetchShopifyProducts();
            dispatch(setProduct(products));
        }catch(e){
            console.log(e);
        }
    }
}

export const setProduct = (product)=>({
    type: 'SET_PRODUCT',
    payload: product
})