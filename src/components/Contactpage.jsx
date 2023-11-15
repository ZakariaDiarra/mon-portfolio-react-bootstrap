import { Container, Form, Button, Row } from "react-bootstrap";
import "../pages/style.css";
import Typewriter from "typewriter-effect";



function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <div>
          <h2 className="contacthead">Contact</h2>
          <p className="contactpara">
            Je suis à la recherche d'une opportunité d'entrée en tant que développeur junior en Frontend ou Backend. <br /> En effet, j'ai plus de deux ans d'expériences dans le développement fullstack
            car j'ai commencé la programmation en voulant concrétiser certaines de mes idées. Alors j'apprends les stacks lorque le besoin s'en fait.
            <br /> Si vous avez des questions à me poser ou êtes intéressé par mon profil, <br />
            Je me tiens à votre entière disposition! Contactez-moi via Linkedin, par Mail ou par Téléphone :
          </p>
        </div>
        <div className="contact-email">
          <Typewriter
            options={{
              strings: [
                "zak@viafro.com",
                "Tel: (+33) 06.74.26.42.71",
                "zbdiarra31@gmail.com",
                ],
              autoStart: true,
              loop: true,
              deleteSpeed: 15,
              }}
                />
        </div>

          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/zakaria-diarra-17bb55156/");
            }}
          >
            LinkedIn
          </button>
        
        {/*
        <Form className="contactform">
          <Row>
            <Col lg={6} md={8} sm={10} className="mx-auto">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Votre Email</Form.Label>
                <Form.Control type="email" placeholder="nom@exemple.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Votre Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="text-center">
                <Button variant="dark" type="submit">
                  Envoyer
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
        */}
      </Container>
      <Container>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Par <span>Zak | avec React.js & Bootstrap</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;