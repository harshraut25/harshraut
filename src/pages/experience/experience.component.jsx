import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_SAI_CARE_SYSTEMS from "../../assets/img/experience/sai_care_systems.svg";
import L_NEODOCTO from "../../assets/img/experience/NeoDocto.webp";
import L_ManipalCigna from "../../assets/img/experience/ManipalCigna.webp";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h2" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize1" src={L_SAI_CARE_SYSTEMS} alt="SAI_CARE_SYSTEMS logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Computer Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer</strong>
                    <br />
                    <strong>Duration:</strong> May 2019 - June 2019
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Web Development</strong> learned basics of web developement</li>
                      <li><strong>Software Development</strong> Domain Registration, Web Designing, and Hosting.</li>
                      <li><strong>Network Integration</strong> Network Security and Solution, IT Infrastructure, Management,
                      Outsourcing, Managed Services, Network Operation Center. 
                      </li>
                      <li><strong>Computer Maintenance</strong> Printers, Data Backup Solutions, Laptop, Desktop, Motherboard.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul> 
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h2" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize2" src={L_NEODOCTO} alt="NEODOCTO logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style "> Web Developer Intern</strong>
                    <br />
                    <strong>Duration:</strong> October 2021 - December 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>NeoDocto is a healthcare technology business that focuses on health education and digital 
                      healthcare services.
                      </li>
                      <li>
                      They are a coordinated care platform that offers each individual a range of healthcare services.
                      </li>
                      <li><strong>Developed &amp; enhanced</strong> I and my colleague interns developed their secondary
                      neodoctoarticles website which is hosted live.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
 
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h2" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize1" src={L_ManipalCigna} alt="SAI_CARE_SYSTEMS logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Digital Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer</strong>
                    <br />
                    <strong>Duration:</strong> May 2021 - July 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Manipal Cigna</strong> ManipalCigna Health Insurance Company Limited is a joint venture 
                      between the U.S. based global health services leader, Cigna Corporation and Indian conglomerate, Manipal Group.</li>
                      <li><strong>Manipal Cigna</strong> is an insurance provider focused solely on health assurance products.</li>
                      <li><strong>Agent Login and Issuance</strong> we worked on project Agent Login and Issuance, in which the agent can login and 
                      check his own details of login and issuance information as well as he can also check the information of reportees under him. 
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul> 
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

    </div>
  );
};

export default Experience;
