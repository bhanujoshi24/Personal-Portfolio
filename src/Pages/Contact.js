import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { motion } from "framer-motion";
import email from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    email
      .sendForm(
        "service_1wbs29w",
        "template_l9rt6b9",
        e.target,
        "cUqHmEDhGa9v_RE4m"
      )
      .then((res) => {
        console.log(res);
        alert("Thanks for Connecting");
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2>
        <br></br>
        <font>Contact</font>
      </h2>
      <Row>
        <Col>
          <p>
            <span className="content">
              After submitting your message, you will receive an acknowledgment
              indicating that your submission was successful.
            </span>
          </p>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                ></FormControl>
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Email</FormLabel>
                <FormControl
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                ></FormControl>
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Message</FormLabel>
                <FormControl
                  required
                  name="message"
                  as="textarea"
                  placeholder="Message"
                ></FormControl>
              </FormGroup>
              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              Contact me for discussions on the Development Lifecycle,
              regardless of the programming language. I can assist you in acing
              technical interviews and real-time problem-solving. I am familiar
              with project management tools such as Jira and have worked with
              different programming languages such as{" "}
              <font>Java[Core + Advance] and Avaloq</font>. Additionally, I
              possess expertise in software testing and quality assurance,
              including regression testing, integration testing, and unit
              testing.
            </p>
            <p>
              <font>Let's connect!</font>
            </p>
            <ListGroup horizontal>
              <ListGroupItem>
                <a href="https://www.youtube.com/@developers2.0">Youtube</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://www.linkedin.com/in/bhanu-joshi/">LinkedIn</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://github.com/bhanujoshi24">Github</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://leetcode.com/bhanujoshi/">LeetCode</a>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
