import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => doc.data());
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {loading ? (
          <p style={{ color: "white" }}>Loading projects...</p>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, idx) => (
              <Col md={4} className="project-card" key={idx}>
                <ProjectCard
                  imgPath={project.imageLink}
                  title={project.name}
                  description={project.description}
                  onClick={() => setSelected(project)}
                />
              </Col>
            ))}
          </Row>
        )}
        <Modal show={!!selected} onHide={() => setSelected(null)} centered>
          {selected && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selected.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={selected.imageLink} alt={selected.name} style={{ width: "100%", marginBottom: 16, borderRadius: 8 }} />
                <p>{selected.description}</p>
                <div style={{ display: "flex", gap: 12 }}>
                  <Button variant="primary" href={selected.ghLink} target="_blank">GitHub</Button>
                  <Button variant="success" href={selected.liveLink} target="_blank">Live Demo</Button>
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>
    </Container>
  );
}

export default Projects;
