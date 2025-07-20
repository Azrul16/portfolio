import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards({ imgPath, title, description, onClick }) {
  return (
    <Card className="project-card-short" onClick={onClick} style={{ cursor: "pointer", minHeight: 220 }}>
      <Card.Img variant="top" src={imgPath} alt="card-img" style={{ height: 120, objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: 14, color: "#bbb" }}>
          {description.length > 60 ? description.slice(0, 60) + "..." : description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
