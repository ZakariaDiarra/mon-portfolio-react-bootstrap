import { Container, Row, Col, Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";

import myCert1 from "../Assets/metafront.png";
import myCert2 from "../Assets/metaback.png";


import ReadMore from "./ReadMore";


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
              Je suis Développeur Full-Stack passionné, rigoureux et assoiffé de savoirs.
              En effet, je code depuis 2 ans et mon envie d'apprendre toujours plus n'a jamais dimunué. Aussi, j'apprécie la programme qui va droit au but et j'essaie toujours de
              proposer des solutions web fluides et pragmatiques. Pour cela,
              j'utilise plusieurs technologies, à base de Javascript notamment pour le Frontend avec React, Next et Vue.js et principalement Python avec Django pour le Backend avec PostgreSQL 
              et MySQL en Databases relationnelles ou Mongo DB lorsque le non-relationnel s'avère pertinent...<br /><br /> Je suis prêt à découvrir de nouvelles technologies afin d'améliorer mes compétences globales 
              et apporter un plus à l'équipe de développement. Par ailleurs, je suis très sociable, serviable, cultivé et bilingue.
              Alors, j'espère intégrer une équipe de talentueux développeurs pour apporter toute ma contribution technique et stratégique, grandir avec une entreprise ambitieuse!🚀
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
        <Container className="cert-section">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <Card className="cert-card-view">
                <Card.Img variant="top" src={myCert1} alt="certif-img" />
                <Card.Body>
                  <Card.Title><h2>Meta FrontEnd Developer</h2></Card.Title>
                  <Card.Text>
                    <ReadMore text="Ayant débuté la programmation en 2021 en apprenant à travers les tutos et bouquins sur Javascript, j 'ai décidé de prendre la formation Meta sur Coursera initialement pour débloquer l'accès au job board de Meta car j'estimais avoir appris suffisamment pour ne pas bénéficier de cette formation. Cependant, j'ai appris lors de cette certification tout ce qui me reste à apprendre afin de devenir le meilleur développeur que je puisse être. Ma certification en développement front-end a donc débuté par une 'Introduction au développement front-end', posant les fondations essentielles de cette discipline. J'ai acquis une compréhension globale des processus et des meilleures pratiques dans la construction d'interfaces web. Le module suivant, 'HTML et CSS en profondeur', m'a permis de maîtriser la structure et la mise en forme des pages web. J'ai appris à créer des sites web visuellement attrayants et fonctionnels, en respectant les standards modernes du web. La formation a ensuite abordé le 'Contrôle de version', un élément crucial pour la gestion efficace des projets de développement et la collaboration en équipe. En progressant, le cours sur 'La programmation avec JavaScript' m'a équipé des compétences nécessaires pour ajouter de l'interactivité et des fonctionnalités dynamiques aux sites web. Les modules 'React Basics' et 'Advanced React' m'ont permis de développer une compréhension approfondie de ce framework populaire, me rendant capable de construire des applications web complexes et réactives. L'accent a été également mis sur les 'Principes de conception UX/UI', où j'ai appris à améliorer l'expérience utilisateur en créant des interfaces intuitives et esthétiquement plaisantes, de Figma au code jusqu'au feedbacks des utilisateurs pour améliorer continuellement l'expérience utilisateur. Le 'Front-End Developer Capstone' a été l'apogée de cette formation, où j'ai appliqué toutes mes connaissances et compétences dans un projet complet, démontrant ma capacité à concevoir et développer des solutions front-end innovantes. Enfin, la préparation aux 'Entretiens de codage' m'a fourni les outils nécessaires pour exceller dans les défis techniques et les entretiens d'embauche, me préparant à une carrière réussie dans le développement front-end."></ReadMore>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="project-card">
              <Card className="cert-card-view">
                <Card.Img variant="top" src={myCert2} alt="certif-img" />
                <Card.Body>
                  <Card.Title><h2>Meta BackEnd Developer</h2></Card.Title>
                  <Card.Text>
                    <ReadMore text="C'est en effet cette certification de Meta pour être 'job-ready' dans le Backend m'a appris énormément de choses mais m'a surtout permis de savoir tout ce qu'il me reste à approfondir.
                        Mon parcours dans la certification en développement back-end a commencé avec une 'Introduction au développement back-end', où j'ai acquis une compréhension fondamentale des rôles et responsabilités d'un développeur back-end, ainsi que des concepts clés tels que les serveurs, les bases de données et l'architecture d'application.
                        Le module sur le 'Contrôle de version' m'a enseigné l'importance de la gestion de versions dans le développement de logiciels, un outil essentiel pour tout développeur moderne pour le suivi des changements de code et la collaboration efficace.
                        Puis, j'ai approfondi mes connaissances avec 'Introduction aux bases de données pour le développement back-end', apprenant à concevoir, gérer et interagir avec les bases de données, un élément vital de la gestion des données dans le développement d'applications.
                        Le cours 'Programmation en Python' m'a permis de maîtriser ce langage de programmation puissant et polyvalent, largement utilisé dans le développement back-end pour sa simplicité et sa robustesse.
                        Ensuite, le 'Django Web Framework' a été une étape cruciale, où j'ai appris à utiliser ce framework de haut niveau pour construire des applications web sécurisées et maintenables.
                        Le module sur les 'APIs' m'a enseigné comment créer et utiliser des interfaces de programmation d'applications, permettant la communication entre différentes parties d'une application ou entre différentes applications.
                        Le module 'Full Stack' a élargi ma perspective, me donnant une vue d'ensemble du développement d'applications, et soulignant comment les parties front-end et back-end s'intègrent pour créer des solutions complètes.
                        Le 'Back-End Developer Capstone' a été l'occasion de mettre en pratique toutes les compétences acquises dans un projet complet, démontrant ma capacité à développer des solutions back-end sophistiquées et efficaces.
                        Enfin, la préparation aux 'Entretiens de codage' m'a équipé des compétences nécessaires pour aborder avec confiance les défis techniques des entretiens d'embauche, complétant ma formation en tant que développeur back-end.">
                    </ReadMore>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Aboutpage;
