export const initialState = {
    items: [], 

    formData: {
        brand: "", productName: "", productExpiry: "", price: 0, category: "", subCategory: "", quantity: 0
    }
,

    salesData: {
        brand: "", productName: "",  price: 0, category: "", subCategory: "", quantity: 0
    }, 

    salesList: []
}


const InventoryReducer = (state = initialState, action) =>{

    switch(action.type){

    case "FETCH_ITEMS_SUCCESS":
    return {...state, items: action.payload}

    case "FORM_DATA": 
    console.log("123, Form Data", action.payload)
    return {...state, formData: {...state.formData, [action.payload.name]: action.payload.value}}


    case "DELETE_ITEM": 
    return {...state, items: state.items.filter((item)=> 
        item.subCatInfo.foodInfo.productDetails.product && item.subCatInfo.foodInfo.productDetails.product._id!==action.payload)}
    
    case "SET_EMPTY": 
    return {...state, formData: initialState.formData}

    case "SALES_ENTRY": 
    return {...state, salesData: action.payload}

    case "FETCH_SALES_LIST_SUCCESS": 
    console.log(444, action.payload )
    return {...state, salesList: action.payload }

    default:
    return state;

    }
}


export default InventoryReducer