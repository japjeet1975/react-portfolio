import React, { useState } from 'react';

function ContactMe() {
     const [formState, setFormState] = useState({ name:"", email:"", message:"" });
     const [errorMessage, setErrorMessage] = useState('');
     const { name, email, message } = formState;

     const handleSubmit = event => {
         event.preventDefault();
         if(!errorMessage){
             console.log("Form Submitted", formState);
         }
};
const showMessage = () => {
    alert("this field is required")
};
const handleChange = (event) => {

      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
  };

return(
    <section>
    <h1>Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input type="text" name="name" placeholder="type your name"defaultValue={name}  onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input type="email" name="email"  placeholder="Type your email" defaultValue={email} onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea name="message"  placeholder="Type your message" defaultValue={message}  onBlur={handleChange} />
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button data-testid="button" className="btn" type="submit">Submit</button>
    </form>
  </section>

);
}

export default ContactMe;