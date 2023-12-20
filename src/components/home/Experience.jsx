import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container id={experiences.id}>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row className="justify-content-center">
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;