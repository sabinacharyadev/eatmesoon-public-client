import { Button, Form } from "react-bootstrap";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <>
      <Form>
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
