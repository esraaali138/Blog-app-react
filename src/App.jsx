import React, { useState } from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/registration/SignUp";
import LogOut from "./pages/LogOut";
import BlogDetails from "./pages/BlogDetails";
import AddBlog from "./pages/AddBlog";
import UpdateBlog from "./pages/UpdateBlog";
import { Navbar } from "react-bootstrap";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  

  return (
   <>
    <BrowserRouter>
    {/* <Navbar authenticated = {authenticated}/> */}

      <Routes>
        <Route path="/" element={<Home authenticated={authenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ authenticated ? (<Contact setAuthenticated={setAuthenticated}  />) : (<Navigate to="/" replace />)}/>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route
          path="/logout"
          element={
            authenticated ? (
              <LogOut setAuthenticated={setAuthenticated} /> ) : ( <Navigate to="/" replace /> )}  authenticated={authenticated}/>
       
        <Route path="/blog/:id" element={authenticated ? ( <BlogDetails setAuthenticated={setAuthenticated} />) : (<Navigate to="/" replace/>)} />
        <Route path="/add" element={authenticated ?( <AddBlog setAuthenticated={setAuthenticated} />) :  (<Navigate to="/" replace/>)} />
        <Route path="/update/:id" element={authenticated ? (<UpdateBlog setAuthenticated={setAuthenticated}/>) : (<Navigate to="/" replace/>) } />
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>

   </>
  );
}

export default App;
