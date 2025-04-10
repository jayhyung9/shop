import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'

const ProductDetail = () => {
  let{id} = useParams()
  const[product,setProduct]=useState(null)
  const getProductDetail =async () =>{
    let url = `https://my-json-server.typicode.com/jayhyung9/shop/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data);
  }

useEffect(()=>{
  getProductDetail()
},[])

  return (
    <div>
      <Container>
        <Row>
<Col className="product-img">
<img src = {product?.img}/>
</Col>
<Col>
<div>{product?.title}</div>
<div>{product?.price}</div>
<div>{product?.choice == true ? "Concious choice" :"" }</div>

<Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-danger">
          Color
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
          Black
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Dark Grey</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Mid Bluey</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="outline-danger"
        title="Size"
        className="mt-2"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1" active>
          Small
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
        
      </DropdownButton>

      <Button className="mt-3" variant="danger">Add</Button>

</Col>
        </Row>
        
        </Container>
    </div>
  )
}

export default ProductDetail
