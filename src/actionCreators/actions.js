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


export const getItems = () => async (dispatch) =>{
  try{
    const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/items")
    const receivedResponse = await response.json()
    const itemsList = receivedResponse.items
    console.log("Response", receivedResponse, itemsList)
    dispatch(fetchItemsList(itemsList))
  }
  catch(error){
    console.error("Error", error)
  }
}


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
      const response = await fetch("https://inventory-management-back-end.developersourav.repl.co/api/items", {
        method: "DELETE",
        headers : {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(itemId)
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
 