const fetchShopifyProducts = async ()=>{
        const url = 'http://localhost:5418/products';
    try{
        const responce = await fetch(
            url, 
            {
                method: 'GET', 
                headers: {
                    'Content-type':'Application/json'
                }
            }
        );
        const {products}=await responce.json();
        return products;
    }catch(e){
        console.log('Error while laoding products', e);
        throw e;
    };
}

export default fetchShopifyProducts;