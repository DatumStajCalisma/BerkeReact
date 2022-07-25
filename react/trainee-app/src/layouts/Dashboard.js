import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Categories from "./Categories";
import ProductList from "./ProductList";
export default function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <Categories />
        </Col>
        <Col xs={12} md={8}>
          <ProductList />
        </Col>
      </Row>
    </div>
  );
}
