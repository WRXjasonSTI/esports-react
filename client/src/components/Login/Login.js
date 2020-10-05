import React, { useState } from "react";
import { Button,  Form } from "react-bootstrap";
import NewUser from "../NewUser/NewUser";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login container">
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="email" >
          <Form.Label>Email:</Form.Label>
  
          <Form.Control
            autoFocus
            placeholder="Enter email" 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" >
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password" 
          />
        </Form.Group>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
        <div className="margin-top">
            <span className="margin"><NewUser/></span>
            <span className=""><ForgotPassword/></span>
        
        

        </div>

      </form>
    
    </div>
  );
}

export default Login