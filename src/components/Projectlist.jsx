import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import littlelemon1 from "/img/littlelemon1.png";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground min-vh-100">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Restaurant Little Lemon"
                description="C'est le projet Full-Stack que j'ai réalisé pour le Capstone de ma certifications Backend de Meta.
                Le projet a été réalisé avec Python et Django Rest Frameworks. La base de donnée MySQL permet de stocker les table de Menu et les Réservations de table.
                Le projet est déployé en hébergement partagé sur cpanel via o2switch. Par ailleurs, l'ensemble de mes projets sont déployés chez cet hébergeur local."
                ghLink="https://lemon.viafro.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="ModulHome"
                description="Un projet React.js avec Tailwind.css pour mettre en valeur cette innovante idée de transformer les conteneurs en habitations.
                En effet, ce project dispose des fonctionnalités pour tier les offres de biens à la vente selon le lieu, le type et la valeur dudit bien.
                J'ai utilisé la data statique pour stocker les produits dans React. De même, j'ai utilisé les hooks de React pour gérer les états et permettre le filtrage des données."
                ghLink="https://modulhome.viafro.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Archie ATS"
                description="Il s'agit d'un logiciel de ciblage publicitaire très ambitieux qui a motivé et guidé mon apprentissage du code.
                En effet, c'est un projet de Saas qui résoudra un énorme problème dans l'industrie de l'audivisuel.
                Le Frontend est réalisé avec React.js et Bootstrap. Et le Backend est sur Node.js avec Express pour la partie serveur. A noter que le projet n'est pas encore terminé et il s'agit d'un MVP."
                ghLink="https://archie.viafro.com/"
              />
            </Col>
            {/*
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Future Now"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="CarZone"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Denadya"
                description="Un blog fullstack bati avec React en frontend et Django RF + Mongo DB pour le backend."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
