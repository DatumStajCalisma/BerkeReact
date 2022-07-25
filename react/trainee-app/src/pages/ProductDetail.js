import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
