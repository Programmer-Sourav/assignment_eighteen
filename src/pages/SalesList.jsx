import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSales } from "../actionCreators/actions"

export default function SalesList (){
  const dispatch = useDispatch()
  const salesList = useSelector((state)=>state.salesList)

  useEffect(()=>{dispatch(getSales())},[])



    return(
        <div> 
          {
            salesList.map((sale, index)=>(
                <li key={index}>{sale.brand}-{sale.category}-{sale.subCategory}-{sale.itemName}-{sale.itemPrice}-{sale.itemQuantity}-{sale.revenue}</li>
            ))
          }
        </div>
    )
}