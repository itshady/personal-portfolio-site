import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import PersonalProjectCard from "./PersonalProjectCard";

const Project = ({ heading, projects, biomedicalprojects }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <h3 className="display-6 pb-5 text-center">{projects.heading}</h3>
        <Row className="justify-content-center">
          {projects.data.length
            && projects.data.map((project, index) => (
            <PersonalProjectCard data={project}></PersonalProjectCard>
          ))}
        </Row>
        <h3 className="display-6 pb-5 text-center">{biomedicalprojects.heading}</h3>
        <Row className="justify-content-center">
          {biomedicalprojects.data.length
            && biomedicalprojects.data.map((project, index) => (
            <PersonalProjectCard data={project}></PersonalProjectCard>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
