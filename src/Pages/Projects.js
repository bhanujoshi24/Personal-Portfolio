import React from "react";
import FNC from "../images/FNC.jpg";
import HealthPortal from "../images/HelathPortal.jpg";
import DigiCert from "../images/DigiCert.png";
import { Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Portal for Health Issue and Recommendation",
      imageUrl: HealthPortal,
      backTechStack: "Spring MVC, Hibernate",
      frontTechStack: "HTML, BootStrap 4, CSS, JSP",
      githubLink:
        "https://github.com/bhanujoshi24/Portal-For-Health-Issue-And-Recommendation",
    },
    {
      id: "2",
      name: "Fake News Classifier",
      imageUrl: FNC,
      backTechStack: "Django, Flask, ML, NLP",
      frontTechStack: "HTML, Jinja, CSS, Bootstrap",
      githubLink:
        "https://github.com/bhanujoshi24/Certificate-Generator-and-Mailing-API",
    },
    {
      id: "3",
      name: "Certificate Mailing API",
      imageUrl: DigiCert,
      backTechStack: "Django, Flask",
      frontTechStack: "HTML, Jinja, CSS, Bootstrap",
      githubLink:
        "https://github.com/bhanujoshi24/Certificate-Generator-and-Mailing-API",
    },
  ];
  return (
    <motion.div
      className="projects"
      initial={{ scale: [2, 1] }}
      animate={{ scale: [2, 1], rotate: [90, 0] }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h2>
        <br></br>
        <font>Personel Projects</font>
      </h2>
      <div className="wrapper">
        {projects.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
              key={item.id}
            >
              <Card key={item.id}>
                <Card.Img variant="top" src={item.imageUrl}></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <font>
                      <strong>{item.name}</strong>
                    </font>
                  </Card.Title>

                  <Card.Subtitle className="mb-1">
                    <span className="contentele">BackEnd:</span>{" "}
                    {item.backTechStack}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-3">
                    <span className="contentele">FrontEnd:</span>{" "}
                    {item.frontTechStack}
                  </Card.Subtitle>

                  <a href={item.githubLink}>
                    <Button>Github Link</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
