import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import bibi from "/src/assets/images/bibi.png";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground min-vh-100">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="ModulHome"
                description="Un projet React.js avec Tailwind.css pour mettre en valeur cette innovante idée de transformer les conteneurs en habitations."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="ZaXxo"
                description="Sample project made react and tailwind.The website is responsive in web and mobile "
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="Viafro"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="CarZone"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="Denadia"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="Little Lemon"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="Future Now"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="ToupourToi"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bibi}
                isBlog={false}
                title="PetsBook"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
