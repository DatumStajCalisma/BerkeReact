import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function CartSummary() {
  return (
    <div>
      <DropdownButton
        className="m-3"
        variant="outline-secondary"
        title="Cart"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item>Product 1</Dropdown.Item>
        <Dropdown.Item>Product 2</Dropdown.Item>
        <Dropdown.Item>Product 3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Go to cart
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
