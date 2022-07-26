import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";
import { Label } from "semantic-ui-react";
export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <DropdownButton
        className="m-3"
        variant="outline-secondary"
        title="Cart"
        id="input-group-dropdown-1"
      >
        {cartItems.map((cartItem) => (
          <Dropdown.Item key={cartItem.product?.id}>
            {cartItem.product?.productName}
            <Label>{cartItem.quantity}</Label>
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Go to cart
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
