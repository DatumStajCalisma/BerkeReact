import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} added to cart`);
  };
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
              <td>{product.category?.categoryName}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  ADD_TO_CART
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
