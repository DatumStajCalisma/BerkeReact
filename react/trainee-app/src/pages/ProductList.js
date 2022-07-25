import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ProductService from "../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
            <th>Description </th>
            <th>Category </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.category.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
