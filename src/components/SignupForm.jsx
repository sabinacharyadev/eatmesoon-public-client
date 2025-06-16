import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { createUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const SignupForm = () => {
  const initialData = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [formData, setFormData] = useState(initialData);
  const { fname, lname, email, password, cpassword } = formData;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (userObject) => {
    const result = await createUser(userObject);
    console.log(result);
    toast(result.message);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      name: formData.fname + " " + formData.lname,
      email: formData.email,
      password: formData.password,
    };
    registerUser(userObject);
    setFormData(initialData);
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <h3>Sign Up</h3>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={fname}
                onChange={handleOnChange}
                placeholder="John"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={lname}
                onChange={handleOnChange}
                placeholder="Doe"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={handleOnChange}
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p className="mt-4">
          Already have account ? <Link to="/login">Login</Link>
        </p>
      </Form>
    </>
  );
};

export default SignupForm;
