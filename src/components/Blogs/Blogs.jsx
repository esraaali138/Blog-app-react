import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import { nums } from "../../utils/nums";
export default function Blogs({ authenticated }) {
  const [blogData, setBlogData] = useState([]);

  //pagination//
  const pageSize = 6;
  const numOfPages = Math.ceil(blogData.length / pageSize);
  const pages = nums(numOfPages);

  const [selectedPage, setSelectedPage] = useState(1);
  const handleSelectedPage = (page) => {
    setSelectedPage(page);
  };
  const startIndex = pageSize * (selectedPage - 1);
  const endIndex = startIndex + pageSize;
  //pagination//

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://blog-nodejs-5.onrender.com/api/blogs");
      setBlogData(data);
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://blog-nodejs-5.onrender.com/api/blog/${id}`);
    const filteredBlog = blogData.filter((b) => b._id !== id);
    setBlogData(filteredBlog);
  };

  const handleText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength);
    }
    return text;
  };

  return (
    <>
      {authenticated && (
        <Link
          to={"/add"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-plus-circle "
            viewBox="0 0 16 16"
            style={{ cursor: "pointer", color: "green" , margin:"30px" , position:"static" }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </Link>
      )}
      <Container>
        <h1 className="text-center mt-4">Our Posts</h1>
        <Row className="justify-content-md-between">
          {blogData.slice(startIndex, endIndex).map((blog) => (
            <Col key={blog._id} md={4} style={{ marginBottom: "20px" }}>
              <Card
                className="cards"
                style={{
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={blog.img}
                  height={300}
                  style={{ position: "relative" }}
                />
                <Card.Body
                  style={{
                    maxHeight: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{handleText(blog.body, 150)}</Card.Text>
                  {authenticated && blog.body.length > 150 && (
                    <Link
                      to={`/blog/${blog._id}`}
                      style={{ color: "green", textDecoration: "none" }}
                    >
                      Read More
                    </Link>
                  )}
                  {/* update and delete */}
                  {authenticated && (
                    <div
                      className=""
                      style={{
                        position: "absolute",
                        top: "-14px",
                        right: "20px",
                       
                      }}
                    >
                      <div
                        class=" "

                      >
                        <button
                            class="btn"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{
                              fontSize: "30px",
                              border: "none",
                              height:"30px",
                              marginTop:"30px",
                              borderRadius: "50%", 
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center",
                              width:"30px",
                              background:"#fff",
                              color:"green",                              

                            }}

                        >
                          <span style={{marginTop:"-20px"}}>
                          ...
                          </span>
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          style={{marginLeft:"-30px" }}
                        >
                          <Link
                            class="dropdown-item"
                            onClick={() => handleDelete(blog._id)}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            Delete
                          </Link>
                          <Link
                            to={`/update/${blog._id}`}
                            class="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            Update
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {numOfPages > 1 && (
          <Pagination
            pages={pages}
            selectedPage={selectedPage}
            handleSelectedPage={handleSelectedPage}
          />
        )}
      </Container>
    </>
  );
}

//
