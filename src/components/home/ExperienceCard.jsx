import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4" className="pb-3 text-center d-flex align-items-center flex-column justify-content-end">
      {/* <div className=""> */}
        <div style={{ flexGrow: 1, alignSelf: 'center' }} className="d-flex flex-column justify-content-center align-items-center">
        <img className="bg-white mb-1" src={data.companylogo} alt="" style={{ maxWidth: '60%', height: 'auto' }}/>
        </div>
        <p className="lead">
          {data.role}
          <br />
          {data.team && <>{data.team}<br /></>}
          {data.date}
        </p>

      {/* </div> */}
    </Col>
  );
}

export default ExperienceCard;