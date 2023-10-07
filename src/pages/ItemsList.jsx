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

const mapOverItems = itemsList.map((eachItem)=>(eachItem.subCatInfo.foodInfo.productDetails.product.productName)) //undefined
console.log("222", mapOverItems)

const name = mapOverItems.map((item)=>(item))
console.log("224")


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
                        

                foodCategory.map((fc)=>(
                    <div key={fc}>
                        <h2>{fc}</h2>
                        {
                            itemsList.filter((currentItem)=>(fc === currentItem.foodCategory))
                            .reduce((acc, currentItem)=>(
                               
                                    
                                   currentItem.subCatInfo  && !acc.includes(currentItem.subCatInfo.foodInfo.foodSCType) ? [...acc, currentItem.subCatInfo.foodInfo.foodSCType]: acc
                                
                              
                            ), []).map((foodSCType, index)=>(
                                <h4>{foodSCType}</h4>
                            ))
                        

                        }
                        
                         </div>
                   ))

                  
            }
         
        </div>
    )
    
}