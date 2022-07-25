import React from "react";
import Button from "react-bootstrap/Button";
export default function SignedOut(props) {
  return (
    //You can use it like props.signOut-In or insted of props
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
