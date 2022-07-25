import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function CartSummary() {
  return (
    <div>
      <DropdownButton
        className="m-3"
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
