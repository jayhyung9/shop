import React, {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container ,Row, Col} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';



const ProductAll = ({ authenticate }) => {
const [productList,setProductList] = useState([]);
const [query,setQuery] = useSearchParams();
  const getProducts=async()=>{
    let searchQuery=query.get('q')||"";
    console.log ("쿼리 값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/jayhyung9/shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(()=>{
getProducts();
  }, [query]);

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
