export const initialState = {
    items: [], 

    formData: {
        brand: "", productName: "", productExpiry: "", price: "", category: "", subCategory: ""
    }
}


const InventoryReducer = (state = initialState, action) =>{

    switch(action.type){

    case "FETCH_ITEMS_SUCCESS":
    return {...state, items: action.payload}

    case "FORM_DATA": 
    console.log("123, Form Data", action.payload)
    return {...state, formData: {...state.formData, [action.payload.name]: action.payload.value}}


    case "DELETE_ITEM": 
    return {...state, items: state.items.filter((item)=>item.subCatInfo.foodInfo.productDetails.product._id!==action.payload)}
    
    case "SET_EMPTY": 
    return {...state, formData: initialState.formData}

    default:
    return state;
    
    }
}


export default InventoryReducer