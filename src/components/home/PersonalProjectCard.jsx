import React from "react";
import { Card, Col } from "react-bootstrap";

const PersonalProjectCard = ({ data }) => {
  return (
    <Col lg="4">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body className="d-flex flex-column" >
         {/* style={{ height: '750px' }} */}
          <Card.Title as="h5">{data.title}</Card.Title>
          <Card.Img className="rounded mx-auto d-block" src={data.img} resizeImage='contain' style={{ maxHeight: '35vh', width: 'auto', maxWidth: '100%' }} />
          <br></br>
          <Card.Text>
              <ul>
                {data.bulletpoints.map((bullet, index) => (
                  <li>{bullet}</li>
                ))}
              </ul>
          </Card.Text>
          <p className="lead text-center mt-auto">
            {data.repo && (<a href={data.repo} target=" _blank" className="lead text-center btn btn-outline-dark btn mx-2">
              <i className="fab fa-github" /> Repo
            </a>)}
            {data.link && (<a
              className="lead text-center btn btn-outline-dark btn mx-2"
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Report"
            >
              {data.extraDesc ? data.extraDesc : "Learn More"}
            </a>)}
          </p>
          <div className="d-grid gap-2 d-md-block"></div>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default PersonalProjectCard;
