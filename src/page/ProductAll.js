import React, {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container ,Row, Col} from "react-bootstrap";



const ProductAll = ({ authenticate }) => {
const [productList,setProductList] = useState([]);
  const getProducts=async()=>{
    let url = `https://my-json-server.typicode.com/jayhyung9/shop`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{
getProducts();
  },[]);

  return (
    /*<Col key={index} lg={3} md={4} sm={6} xs={12}> 반응형 꿀팁*/

    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(<Col lg={3}><ProductCard item={menu} authenticate={authenticate}/></Col>))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  )
}

export default ProductAll
