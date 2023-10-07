import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItems } from "../actionCreators/actions"

export default function ItemsList(){
const dispatch = useDispatch()
const itemsList =  useSelector((state)=>state.items)
console.log("Items ", itemsList)


const foodCategory = itemsList.reduce((acc, currentItem)=>(!acc.includes(currentItem.foodCategory) ? [...acc, currentItem.foodCategory] : acc),[])
console.log("FoodCat", foodCategory)

const foodSubCategory = itemsList.reduce((acc, currentItem)=>(!acc.includes(currentItem.subCatInfo.foodInfo.foodSCType) ? [...acc, currentItem.subCatInfo.foodInfo.foodSCType] : acc),[])
console.log("SubCat", foodSubCategory)


const mapOverItemsList = itemsList.map((eachItem)=>(eachItem))
console.log("123", mapOverItemsList)

const mapOverItems = itemsList.map((eachItem)=>(eachItem.subCatInfo.foodInfo.productDetails.product.productName))
console.log("222", mapOverItems)

const name = mapOverItems.map((item)=>(item))
console.log("224")

const testItemList = [  {
    "subCatInfo": {
        "foodInfo": {
            "productDetails": {
                "product": "651fa0c7c41bed37cc3c1ba7"
            },
            "_id": "651fa0c7c41bed37cc3c1ba9",
            "foodSCType": "Basmati Rice",
            "scQuantity": 23,
            "__v": 0
        }
    },
    "_id": "651fa0c7c41bed37cc3c1bab",
    "foodCategory": "Rice",
    "__v": 0
}, 
{
    "subCatInfo": {
        "foodInfo": {
            "productDetails": {
                "product": "651fa0c7c41bed37cc3c1baf"
            },
            "_id": "651fa0c7c41bed37cc3c1bb1",
            "foodSCType": "Basmati Rice",
            "scQuantity": 23,
            "__v": 0
        }
    },
    "_id": "651fa0c7c41bed37cc3c1bb3",
    "foodCategory": "Rice",
    "__v": 0
}]

useEffect(()=>{dispatch(getItems())}, [])
//  Print Category,
//  map over itemsList, 
//  check if cat matches 
//   print foodSubCategory
//     map over itemsList
//     check if subcat <Matche>
//     print productList


///for each category, have the sub category, for each sub category, have the products
    return(
        <div> 

            {
                // foodCategory.map((fc)=>(
                //     <div key={fc}>
                //         <h2>{fc}</h2>
                //         {
                //             itemsList.map((item)=>(
                //                 <div>
                //                    { fc === item.foodCategory ? <h4>{item.subCatInfo.foodInfo.foodSCType}</h4>: ""}
                //                 {/* {itemsList.map((item)=>(
                //                     item.subCatInfo.foodInfo.foodSCType === fsc ?
                //                      <h4>{fsc} </h4> : ""
                                    
                //               ))} */}
                //               {itemsList.map((eachItem)=>(
                //                 <div>
                //                <p> {eachItem.subCatInfo.foodInfo.productDetails.product.brandInfo} </p>
                //                 </div>
                //                 ))}
                              
                //               </div>
                //             ))
                        

                //         }
                        
                //          </div>
                // ))

                foodCategory.map((fc)=>(
                    <div key={fc}>
                        <h2>{fc}</h2>
                        {
                            testItemList.reduce((acc, currentItem)=>(
                                <div>
                                    {console.log("Visiting currentItem:", currentItem, fc)}
                                   {fc === currentItem.foodCategory && currentItem.subCatInfo && !acc.includes(currentItem.subCatInfo.foodInfo.foodSCType) ? <h4>{[...acc, currentItem.subCatInfo.foodInfo.foodSCType]}</h4>: acc}
                                {/* {itemsList.map((item)=>(
                                    item.subCatInfo.foodInfo.foodSCType === fsc ?
                                     <h4>{fsc} </h4> : ""
                                    
                              ))} */}
                              
                              </div>
                            ), [])
                        

                        }
                        
                         </div>
                   ))
            }
         
        </div>
    )
    
}