import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, Modal, Button } from "react-bootstrap";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map(doc => doc.data());
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-section" style={{ padding: "2rem", color: "white" }}>
      <h1>Blog</h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {blogs.map((blog, idx) => (
            <Card
              key={idx}
              className="blog-card-short"
              style={{ width: 320, cursor: "pointer", background: "#232323", color: "#fff" }}
              onClick={() => setSelected(blog)}
            >
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text style={{ color: "#bbb", fontSize: 14 }}>
                  {blog.shortDescription.length > 60 ? blog.shortDescription.slice(0, 60) + "..." : blog.shortDescription}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <Modal show={!!selected} onHide={() => setSelected(null)} centered>
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ color: "#888" }}>{selected.shortDescription}</p>
              <div style={{ whiteSpace: "pre-line" }}>{selected.details}</div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Blog; 