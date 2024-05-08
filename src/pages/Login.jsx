import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
export default function Login({ setAuthenticated }) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory()
  const handleSubmit = async (event) => {
    const formField = event.currentTarget; ///curent = form;
    if (!formField.checkValidity()) {
      //check the form is not valid
      event.preventDefault();
    }
    setValidated(true);
    try {
      const { data } = await axios.post("https://blog-nodejs-5.onrender.com/api/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(data.token);
      const token = data.token;
      localStorage.setItem("token", token);
      setAuthenticated(true);
      navigate("/", { replace: true });
    } catch (error) {
      {
        const { message } = error.response.data;

        if (message === "Incorrect email or password") {
          setErrorMessage("Incorrect email or password");
        } else if (message === "Wrong email or password") {
          setErrorMessage("Wrong email or password");
        } else if (message === "Successful login") {
          setErrorMessage("Successful login");
        }
      }
    }
    setValidated(true);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormDate({
      ...formData,
      [name]: value, //["email"] : the value ....
    });
  };
  return (
    <div className="Container mt-0">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <Row>
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    pattern="^[S+@\S+\.\S]+$"
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  {/* error */}
                  <Form.Control.Feedback type="invalid">
                    {formData.email.length === 0
                      ? "This field is required."
                      : null}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationCustom02"
                  style={{ marginTop: "24px" }}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    style={{
                      borderWidth: "0 0 1px",
                      borderColor: "gray",
                      borderRadius: "0",
                      boxShadow: "none",
                      marginTop: "-12px",
                    }}
                  />
                  {/* error */}
                  <Form.Control.Feedback type="invalid">
                    {formData.password.length === 0
                      ? "This field is required."
                      : "Please enter your password"}
                  </Form.Control.Feedback>
                  {/*  */}
                </Form.Group>
                {/*  */}
              </Row>
              <p style={{ textAlign: "right", marginTop: "12px" }}>
                If you do not have an account please{" "}
                <Link
                  style={{ textDecoration: "none", color: "rgb(1, 150, 1)" }}
                  to={"/register"}
                >
                  Sign Up
                </Link>
              </p>

              <Button
                type="button"
                className="ButtonPrimary"
                onClick={handleSubmit}
                style={{
                  margin: "32px auto",
                  display: "block",
                  width: "180px",
                  background: "#3A6940",
                  border: "none",
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
      <div></div>
    </div>
  );
}
