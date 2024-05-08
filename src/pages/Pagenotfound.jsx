import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagenotfound() {
  return (
    <div>
      <div className="h-100 d-flex flex-column align-items-center justify-content-center">
    <img src="src\assets\404-error-with-tired-person-concept-illustration_114360-7899.jpg" class="img-fluid" style={{height:"500px"}} alt="Responsive image"/>
     
    <Link to="/">
    <button className="ButtonPrimary"
                type="button"
                style={{
                  width: "180px",
                }}
              >
                Go home
              </button>
    </Link>
      </div>
    </div>
  )

}
