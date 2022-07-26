import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import CartDetail from "../pages/CartDetail";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer style={{ width: "4px" }} position="bottom-right" />
      <Row>
        <Col xs={12} md={4}>
          <Categories />
        </Col>
        <Col xs={12} md={8}>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route path="/products/:name" element={<ProductDetail />} />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}
