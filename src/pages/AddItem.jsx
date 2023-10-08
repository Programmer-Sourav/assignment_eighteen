import { useState } from "react"

export default function AddItem(){

    const [formData, setFormData] = useState({brand: "", productName: "", productExpiry: "", price: "", category: "", subCategory: ""})
    const handleSubmit = (e) =>{
     e.preventDefault()
     console.log("Form Data ", formData)
    }

    const onValueChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setFormData({...formData, [name]: value}) 
    }
    

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>Brand Name 
            <input type="text" name="brand" value={formData.brand} onChange={(e)=>{onValueChange(e)}}/>
        </label>
        <label>
            Product Name
            <input type="text" name="productName" value={formData.productName} onChange={(e)=>{onValueChange(e)}}/>
        </label>
       <label>
        ProductExpiry 
        <input type="text" name="productExpiry" value={formData.productExpiry} onChange={(e)=>{onValueChange(e)}}/>
       </label>
       <label>
        Price
        <input type="number" name="price" value={formData.price} onChange={(e)=>{onValueChange(e)}}/>
       </label>
       <label>
        Sub Category 
        <input type="text" name="subCategory" value ={formData.subCategory} onChange={(e)=>{onValueChange(e)}}/>
       </label>
       <label>
        Category 
        <input type="text" name="category" value={formData.category} onChange={(e)=>{onValueChange(e)}}/>
       </label>
       <input type="submit" value="Submit" />
        </form>
    )
}