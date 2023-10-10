import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../actionCreators/actions";

export default function SalesReport() {
  const dispatch = useDispatch();
  const salesList = useSelector((state) => state.salesList);

  useEffect(() => {
    dispatch(getSales());
  }, []);

  return (
    <div>
        <h1> Sales Report</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="tablecell">Brand</th>
            <th className="tablecell">Category</th>
            <th className="tablecell">Sub Category</th>
            <th className="tablecell">Product Name</th>
            <th className="tablecell">Price</th>
            <th className="tablecell">Item Sold</th>
            <th className="tablecell">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesList.map((sale, index) => (
            <tr key={index}>
              <td className="tablecell">{sale.brand}</td>
              <td className="tablecell">{sale.category}</td>
              <td className="tablecell">{sale.subCategory}</td>
              <td className="tablecell">{sale.itemName}</td>
              <td className="tablecell">Rs.{sale.itemPrice}</td>
              <td className="tablecell">{sale.itemQuantity}</td>
              <td className="tablecell">Rs.{sale.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
