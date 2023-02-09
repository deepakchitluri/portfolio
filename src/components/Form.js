import "./FormStyles.css"

import React from 'react'
const Form = () => {

  return (
    <div className="form">
        <form action="https://getform.io/f/d4e07633-d985-4eae-8ae9-b43c6d572274" method="POST">
            <label>Your Name</label>
            <input type="text" required name="name"></input>
            <label>Email</label>
            <input type="email" name="email" required></input>
            <label>Subject</label>
            <input type="text" name="subject" required></input>
            <label>Message</label>
            <textarea name="message" placeholder="Type your message here" rows="6"></textarea>
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form