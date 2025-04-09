import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item, authenticate}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    authenticate?navigate(`product/${item?.id}`):navigate("/Login")
  }
  return (
    <div>
      <img onClick={goToDetail} src={item?.img } style={{ width: "100%" }} className="hover-img"/>
      <div>{item?.choice == true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
