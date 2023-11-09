import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              A <span>Propos</span>
            </h3>
            <p className="aboutdetails">
              {" "}
              Je suis Développeur Frontend junior et passionné.
              J'apprécie le code qui va droit au but et j'essaie toujours de
              proposer une expérience web fluide et efficace. Pour cela,
              j'utilise plusieurs technologies, à base de Javascript notamment...<br /><br /> Par ailleurs, je suis très sociable et serviable
              mes soft skills sont nombreux mais principalement lié à ma culture générale.
              Alors, j'espère intégrer une équipe de talentueux développeurs pour apporter ma contribution technique et humaine, grandir avec une entreprise ambitieuse!🚀
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
