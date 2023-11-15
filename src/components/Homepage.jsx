import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Text";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import "../pages/style.css";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Bonjour <span className="wave">⌨️</span>
            </h2>
            <h2 className="nametext">Je suis Zakaria</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/ZakariaDiarra");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/zakaria-diarra-17bb55156/");
              }}
              className="socailmediabtn"
            >
              <AiFillLinkedin className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.facebook.com/Zaky3301");
              }}
              className="socailmediabtn"
            >
              <AiFillFacebook className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
