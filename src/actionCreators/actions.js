export const fetchItemsList = (itemsList) => ({
    type: "FETCH_ITEMS_SUCCESS", 
    payload: itemsList
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
