export const fetchItemsList = (itemsList) => ({
    type: "FETCH_ITEMS_SUCCESS", 
    payload: itemsList
})


export const addFormData = (name, value) =>(
  {
    type: "FORM_DATA", 
    payload: {name, value}
  }
)

export const setEmptyValues = () =>(
  {
    type: "SET_EMPTY"
  }
)


export const deleteAndFilterItem  = (itemId) =>(
  {
    type: "DELETE_ITEM", 
    payload: itemId
  })


  export const fetchSalesList = (itemList) =>(
{
 type: "FETCH_SALES_LIST_SUCCESS", 
 payload:  itemList
}
  )


export const getItems = () => async (dispatch) =>{
  try{
    dispatch(fetchItemsLoading());
    const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/items")
    if (!response.ok) {
      throw new Error(`Error fetching items: ${response.status} ${response.statusText}`);
    }
    const receivedResponse = await response.json();
    const itemsList = receivedResponse.items;

    // Dispatch the success action with the items
    dispatch(fetchItemsList(itemsList));
  } catch (error) {
    // Dispatch the error action with the error message
    dispatch(fetchItemsError(error.message));
    console.error("Error", error);
  }
}
export const fetchItemsLoading = () => {
  return {
    type: "FETCH_ITEMS_LOADING",
  };
};

export const fetchItemsError = (error) => {
  return {
    type: "FETCH_ITEMS_ERROR",
    payload: error,
  };
};


export const sendFormData = (name, value) => async (dispatch) =>{
  try{
     dispatch(addFormData(name, value))
  }
  catch(error){
    console.error("Error", error)
  }
}


export const saveFormData = (formData) => async(dispatch) =>{
  const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/items", {
    method: "POST",
    headers : {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(formData)
   })
}

export const editFormData = (formData, itemId) => async(dispatch) =>{
  const response = await fetch(`https://inventory-management-back-end.developersourav.repl.co/api/items/${itemId}`, {
    method: "POST",
    headers : {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(formData)
   })
}


export const sendEmpty = () => async (dispatch) =>{
  try{
   dispatch(setEmptyValues())
  }
  catch(error){
    console.error("Error", error)
  }
}

export const deleteItemAction = (itemId) => async(dispatch) =>{
     try{
      dispatch(deleteAndFilterItem(itemId))
      const response = await fetch(`https://inventory-management-back-end.developersourav.repl.co/api/items/delete/${itemId}`, {
        method: "DELETE",
        headers : {
          "Content-Type": "application/json", 
        },
       })
     }
     catch(error){
      console.error("Error", error)
     }
}

export const editItem = (itemId) => async (dispatch) =>{
  try{

  }
  catch(error){
    console.error("Error ", error)
  }
}

export const updateSalesValues = (valueToBeUpdated)  =>({
   type: "SALES_ENTRY", 
   payload: valueToBeUpdated
})

export const addToSales = (valueToAdd) => async (dispatch) => {
  console.log("Sales Data ", valueToAdd)
  try{
    const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/sales", {
    method: "POST",
    headers : {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(valueToAdd)
   })
  }
   catch(error ){
    console.error("Error", error)
   }
}

export const getSales = () => async (dispatch) =>{
  try{
    const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/sales")
    const receivedResponse = await response.json()
    const itemsList = receivedResponse.sales
    console.log("Response", receivedResponse, itemsList)
    dispatch(fetchSalesList(itemsList))
  }
  catch(error){
    console.error("Error", error)
  }
}


export const updateQuantity = (productId, quantity) => async (dispatch) => {
  console.log("Update Data ", quantity)
  try{
    const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/items/update", {
    method: "POST",
    headers : {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({productId, quantity})
   })
  }
   catch(error ){
    console.error("Error", error)
   }
}
 