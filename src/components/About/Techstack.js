import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,

  
  DiGit
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,SiDocker
  ,SiNestjs,SiExpress,SiPostgresql,SiKotlin,SiAndroidstudio,SiRedux,SiGraphql
} from "react-icons/si";



import {FaAws} from 'react-icons/fa'
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <CgCPlusPlus />
       
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiNodejs />
        <p>NodeJs</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiFirebase />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
