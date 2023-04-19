import React from "react";
import avaloq from "../logo/Avaloq.png";
import JavaLogo from "../logo/JavaLogo.png";
import ReactImg from "../logo/ReactImg.png";
import PLSQL from "../logo/PLSQL.jpg";
import Node from "../logo/node.png";
import DS from "../logo/DS1.png";
import Algo from "../logo/Algorithm.jpg";
import Spring from "../logo/Spring.png";
import Html from "../logo/html.png";
import Css from "../logo/Css.png";
import Js from "../logo/Js.png";
import Django from "../logo/django.png";
import Bootstrap from "../logo/bootstrap.png";
import Jsp from "../logo/jsp.png";
import Python from "../logo/python.png";

import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "1",
      name: "Avaloq",
      imageUrl: avaloq,
    },
    {
      id: "2",
      name: "Java",
      imageUrl: JavaLogo,
    },
    {
      id: "3",
      name: "PlSQL",
      imageUrl: PLSQL,
    },
    {
      id: "4",
      name: "Node",
      imageUrl: Node,
    },
    {
      id: "5",
      name: "React",
      imageUrl: ReactImg,
    },
    {
      id: "6",
      name: "Data Structure",
      imageUrl: DS,
    },
    {
      id: "7",
      name: "Algorithm",
      imageUrl: Algo,
    },
    {
      id: "8",
      name: "Spring",
      imageUrl: Spring,
    },
    {
      id: "9",
      name: "HTML",
      imageUrl: Html,
    },
    {
      id: "10",
      name: "CSS",
      imageUrl: Css,
    },
    {
      id: "11",
      name: "JS",
      imageUrl: Js,
    },
    {
      id: "12",
      name: "Python",
      imageUrl: Python,
    },
    {
      id: "13",
      name: "Django",
      imageUrl: Django,
    },
    {
      id: "14",
      name: "Bootstrap",
      imageUrl: Bootstrap,
    },
    {
      id: "15",
      name: "JSP",
      imageUrl: Jsp,
    },
  ];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="skills-wrapper"
    >
      <div className="services">
        <h2>
          <br></br>
          <font>Skills</font>
        </h2>
        <div className="wrappers">
          {services.map((item) => {
            return (
              <motion.div
                whileHover={{ scale: 1.4, transition: { duration: 0.05 } }}
                key={item.id}
                style={{ width: "180px", height: "180px" }}
              >
                <Card key={item.id} style={{ width: "180px", height: "180px" }}>
                  <Card.Img
                    varient="top"
                    src={item.imageUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
