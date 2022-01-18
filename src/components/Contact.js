import React from "react";
import { Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <div className="contactform">
      <h3>Contact me for a chat!</h3>
      <Form className="form">
        <div className="form__details">
          <Form.Group
            className="mb-3 form__details--group"
            controlId="formBasicName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            className="mb-3 form__details--group"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;