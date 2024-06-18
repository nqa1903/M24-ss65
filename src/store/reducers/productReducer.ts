const initialProduct = {
    products : [
        {id : 1 , productName : "Cam sành" , price : 20.000 , quantity : 10},
        {id : 2 , productName : "Bưởi ba rọi" , price : 50.000 , quantity : 15}      
    ],
};

const reducerProduct = (state = initialProduct , action: any) =>{
    switch (action.type) {
        case "ADD":
            return {...state , products:[...state.products , action.payload]};
        case "DELETE":
            return {...state,
                products: state.products.filter((product:any)=>{product.id !== action.payload})};
        default:
            return state;
    }
}

export default reducerProduct;

