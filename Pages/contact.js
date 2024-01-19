import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kkyw1f6', 'template_tblf3vk', e.target, '0SxWog8GT0430vm8f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
 
    <form ref={form} onSubmit={sendEmail}>
           <h1>
        Please provide any suggestions on how to make this website better 
      </h1>

      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUs;