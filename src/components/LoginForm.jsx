import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { loginUserAxios } from "../axios/userAxios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const { email, password } = formData;

  // get login details
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async () => {
    const result = await loginUserAxios(formData);
    if (result.status === "success") {
      toast(result.message);
      sessionStorage.setItem("accessJWT", result.data.accessJWT);
      navigate("/dashboard");
    } else toast(result.message);
  };

  // send login details to api
  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <h3>Login</h3>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="mt-4">
          No account with us? <Link to="/register">Register</Link>
        </p>
      </Form>
    </>
  );
};

export default LoginForm;
