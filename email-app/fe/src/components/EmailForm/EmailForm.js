import React, { useState } from "react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prepare form data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5600/send-email", {
        method: "POST",
        body: formData,
      });

      (response.ok) ? console.log("Email sent successfully") : console.log("Failed to send the email");

    } 
    catch (error) {
      console.log(`Error, sending the email: ${error}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            required 
          />
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            required 
          />
        </div>
        <br/>
        <div>
          <label htmlFor="file">File: </label>
          <input 
            type="file" 
            id="file" 
            onChange={(e)=>setFile(e.target.files[0])} 
            required 
          />
        </div>
        <br/>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea 
            type="message" 
            id="message" 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;