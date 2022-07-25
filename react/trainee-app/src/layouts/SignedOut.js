import React from "react";
import Button from "react-bootstrap/Button";
export default function SignedOut(props) {
  return (
    <div>
      <Button variant="danger" onClick={props.signIn}>
        Sign In
      </Button>
      <Button variant="info" style={{ marginLeft: "10px" }}>
        Register
      </Button>
    </div>
  );
}
