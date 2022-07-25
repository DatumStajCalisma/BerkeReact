import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function SignedIn() {
  return (
    <div>
      <DropdownButton
        className="m-3"
        variant="outline-secondary"
        title="Username"
      >
        <Dropdown.Item href="#">Information</Dropdown.Item>
        <Dropdown.Item href="#">Sign Out</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
