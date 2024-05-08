import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function LogOut({ setAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem("token"); 
      setAuthenticated(false); 
      navigate("/");
    };

    handleLogout()
  }, [navigate, setAuthenticated]);

}
