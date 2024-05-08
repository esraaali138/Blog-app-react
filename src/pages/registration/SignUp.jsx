import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    const FormField = event.currentTarget;
    if (!FormField.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const { data } = await axios.post("http://localhost:2299/api/register", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      console.log(data);
      navigate("/login", { replace: true });
    } catch (error) {
      const { message } = error.response.data;
      if (message === "User already exists. Please sign in") {
        setErrorMessage("User already exists. Please sign in");
        return;
      }
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="Container">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <Row>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>firstName</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                    pattern="[A-Za-z]+"
                    required
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.firstName.length === 0
                      ? "This field is required."
                      : "Please enter only character"}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationCustom02"
                  style={{ marginTop: "24px" }}
                >
                  <Form.Label>lastName</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                    pattern="[A-Za-z]+"
                    required
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.lastName.length === 0
                      ? "This field is required."
                      : "Please enter only character"}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationCustom03"
                  style={{ marginTop: "24px" }}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    required
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.email.length === 0
                      ? "This field is required."
                      : "enter invalid email."}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationCustom04"
                  style={{ marginTop: "24px" }}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    required
                    minLength={5}
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.password.length === 0
                      ? "This field is required."
                      : "password  must be at least 5 characters long"}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <p style={{ textAlign: "right", marginTop: "12px" }}>
                If you have an account please{" "}
                <Link
                  style={{ textDecoration: "none", color: "rgb(1, 150, 1)" }}
                  to={"/login"}
                >
                  Sign In
                </Link>
              </p>

              <Button
                className="ButtonPrimary"
                type="button"
                onClick={handleSubmit}
                style={{
                  margin: "10px auto",
                  display: "block",
                  width: "180px",
                }}
              >
                Submit
              </Button>
              {errorMessage && (
                <div className="error text-danger">{errorMessage}</div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
