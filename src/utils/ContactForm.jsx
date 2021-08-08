import React from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";

function ContactForm() {
  const [info, setInfo] = React.useState({
    email: "",
    name: "",
    message: "",
    success: "",
  });

  const onChangeHandle = (name) => (e) => {
    setInfo({ ...info, [name]: e.target.value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "gmail",
        "template_ipQcx6HW",
        {
          to_name: 'Toan',
          message_html: info.message,
          from_name: info.name,
          from_email: info.email,
        },
        "user_Xb0klYCmO4LdwZwqkIS8M"
      )
      .then(
        (result) => {
          console.log(result.text);
          setInfo({
            email: "",
            name: "",
            message: "",
            success: "You message was successfully sent. Thanks!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form
      onSubmit={onSubmitHandle}
      onBlur={() => setInfo({ ...info, success: "" })}
    >
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          value={info.email}
          placeholder="Your Email"
          size="lg"
          required={true}
          onChange={onChangeHandle("email")}
        />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Control
          value={info.name}
          type="text"
          placeholder="Your Fullname"
          size="lg"
          required={true}
          onChange={onChangeHandle("name")}
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Control
          value={info.message}
          as="textarea"
          placeholder="Your Message"
          rows={5}
          size="lg"
          onChange={onChangeHandle("message")}
          required={true}
        />
      </Form.Group>
      {info.success !== "" && (
        <div className="text-warning">{info.success}</div>
      )}
      <div className="text-center my-4">
        <button className="button-link mt-4">
          <span>Send Message</span>
        </button>
      </div>
    </Form>
  );
}

export default ContactForm;