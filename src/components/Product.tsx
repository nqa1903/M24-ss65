import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
    const products:any = useSelector((state:any) => {
        return state.products
    })
    const dispatch = useDispatch();
    const handleEdit = (id:number) =>{
        const handlePrice = prompt("Nhập giá mới : ");
        dispatch({
            type : "ADD",
            payload : { id, price: handlePrice}
        })
    }
    const handleDelete = (id:number) =>{
        dispatch({type : "DELETE" , payload : id})
    }
  return (
    <div>
      <ul>
        {products.map((product: any) => {
            <li key={product.id}>
                {product.productName} - {product.price} - {product.quantity}
                <button onClick={() => handleEdit(product.id)}>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
            </li>
        })}
      </ul>
    </div>
  )
}
