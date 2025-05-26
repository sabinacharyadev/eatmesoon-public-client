import { Button, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AuthPage = () => {
  return (
    <>
      <NavBar />
      <Row style={{ height: "90dvh" }}>
        <Col className="d-flex justify-content-center align-items-center">
          <Outlet></Outlet>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center bg-warning-subtle">
          <h3>eat me soon</h3>
        </Col>
      </Row>
    </>
  );
};

export default AuthPage;
