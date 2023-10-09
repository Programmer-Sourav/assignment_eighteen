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
    default: 

    case "SET_EMPTY": 
    return {...state, formData: initialState.formData}
    return state;
    }
}


export default InventoryReducer