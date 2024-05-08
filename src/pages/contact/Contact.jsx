import React from 'react'

export default function Contact() {
  return (
  <>
    <div className='Container'>
    <div className="container w-50">
        <div className="text-center text-white">
        <h1>Contact Us</h1>
    <p className="lead">Feel free to get in touch with us!</p>
        </div>
   
    <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button style={{
                  margin: "8px auto",
                  display: "block",
                  width: "180px",
                  background: "#3A6940",
                  border: "none",
                }} type="submit" className="btn btn-primary ButtonPrimary">Send Message</button>
    </form>
</div>
    </div>
  </>
  )
}
