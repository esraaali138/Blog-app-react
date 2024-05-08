import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateBlog({}) {
  const { id } = useParams();
  const [blogUpdated, setBlogUpdated] = useState({
    img: "",
    title: "",
    body: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchBlogId() {
      const { data } = await axios.get(`http://localhost:2299/api/blog/${id}`);
      setBlogUpdated(data);
    }
    fetchBlogId();
  }, []);
  const handleUpdate = async (event) => {
    event.preventDefault();
    const { data } = await axios.patch(
      `http://localhost:2299/api/blog/update/${id}`,
      blogUpdated
    );
    console.log(data);
    navigate("/");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogUpdated({
      ...blogUpdated,
      [name]: value, /// newblog["img"] = "url"
    });
    console.log(blogUpdated);
  };

  return (
    <div className="Container ">
 <Container className="container mt-5 ">

<Form>
<h2 className="text-center">Update blog</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Url</Form.Label>
    <Form.Control
      type="email"
      name="img"
      value={blogUpdated.img}
      placeholder="Enter email"
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter title</Form.Label>
    <Form.Control
      type="text"
      name="title"
      value={blogUpdated.title}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>Enter body</Form.Label>
    <Form.Control
      type="text"
      name="body"
      value={blogUpdated.body}
      onChange={handleChange}
    />
  </Form.Group>

  <Button variant="primary" className="ButtonPrimary" type="submit" onClick={handleUpdate}>
    Update
  </Button>
  <Link to={"/"}>
    <Button variant="primary" type="submit" className="cancle ButtonPrimary" style={{marginLeft: "16px"}}>
    cancel
    </Button>
  </Link>
</Form>
</Container>
    </div>
   
  );
}
