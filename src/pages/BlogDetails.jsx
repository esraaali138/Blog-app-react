import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function fetchBlogId() {
      const { data } = await axios.get(`http://localhost:2299/api/blog/${id}`);
      setBlog(data);
      setLoading(true);
    }
    fetchBlogId();
  }, []);
  return (
    <div className="container mt-5">
      {
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {blog.img && (
              <img src={blog.img} alt="Blog Image" className="img-fluid mb-3" />
            )}
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <Link to={"/"} style={{textDecoration:"none"}}>
            <button className="ButtonPrimary" style={{display:"block" , margin:"auto"}}>Go back home</button>
            </Link>

          </div>
          {/* // (loading && img) */}
        </div>
      }
    </div>
  );
}
