import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const [blogData, setBlogData] = useState({
    img: "",
    title: "",
    body: "",
  });
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:2299/api/blog/add", {
      img: blogData.img,
      title: blogData.title,
      body: blogData.body,
    });
    setBlogData(data);
    navigate("/")
    console.log(data);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({
      ...blogData,
      [name]: value, /// newblog["img"] = "url"
    });
    console.log(blogData);
  };

  return (
    <div className="Container">
<Container className="container mt-5 w-50">
     <Form>
     <h2 className="text-center">Add blog</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Url</Form.Label>
        <Form.Control
          type="email"
          name="img"
          value={blogData.img}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>Enter body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={blogData.body}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary"  style={{
                  margin: "32px auto",
                  display: "block",
                  width: "180px",
                  background: "#3A6940",
                  border: "none",
                }}
                 className="ButtonPrimary" type="submit" onClick={handleSubmit}>
        Add 
      </Button>
    </Form>
   </Container>
    </div>
   
  );
}
