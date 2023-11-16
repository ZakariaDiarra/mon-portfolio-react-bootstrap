import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import littlelemon1 from "/img/littlelemon1.png";
import modulhome1 from "/img/modulhome1.png";
import archie1 from "/img/archie1.png";
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
                title="Little Lemon"
                description="C'est le projet Full-Stack que j'ai réalisé pour le Capstone de ma certification Backend de Meta.
                Le projet a été réalisé avec Python et Django Rest Framework et la librairie Djoser. La base de donnée MySQL permet de stocker les table de Menu et les Réservations.
                De même, ce projet a impliqué l'utilisation de Insomnia pour le test des endpoints des API.
                Le projet est déployé via cpanel."
                ghLink="https://lemon.viafro.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={modulhome1}
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
                imgPath={archie1}
                isBlog={false}
                title="Archie ATS"
                description="Il s'agit d'un logiciel de ciblage publicitaire très ambitieux qui a motivé et guidé mon apprentissage du code.
                En effet, c'est un projet de Saas qui a pour ambition de résoudre un problème dans l'industrie de l'audivisuel. Cibler les publicités selon des groupes d'audiences préétablis.
                Le Frontend est réalisé avec React.js et Bootstrap. Et le Backend est en cours de développement. Il s'agit d'un MVP."
                ghLink="https://archie.viafro.com/"
              />
            </Col>
            {/*
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Future Now"
                description="..."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="CarZone"
                description="..."
                ghLink="https://github.com/ZakariaDiarra"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={littlelemon1}
                isBlog={false}
                title="Denadya"
                description="..."
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
