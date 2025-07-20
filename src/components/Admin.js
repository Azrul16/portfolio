import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Admin() {
  // Project form state
  const [project, setProject] = useState({
    name: "",
    description: "",
    ghLink: "",
    liveLink: "",
    imageLink: ""
  });
  const [projectMsg, setProjectMsg] = useState("");

  // Blog form state
  const [blog, setBlog] = useState({
    title: "",
    shortDescription: "",
    details: ""
  });
  const [blogMsg, setBlogMsg] = useState("");

  // Handle project form submit
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setProjectMsg("");
    try {
      await addDoc(collection(db, "projects"), project);
      setProjectMsg("Project added successfully!");
      setProject({ name: "", description: "", ghLink: "", liveLink: "", imageLink: "" });
    } catch (err) {
      setProjectMsg("Error adding project: " + err.message);
    }
  };

  // Handle blog form submit
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setBlogMsg("");
    try {
      await addDoc(collection(db, "blogs"), blog);
      setBlogMsg("Blog post added successfully!");
      setBlog({ title: "", shortDescription: "", details: "" });
    } catch (err) {
      setBlogMsg("Error adding blog: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>Admin Panel</h1>
      <div style={{ marginBottom: "2rem" }}>
        <h2>Add Project</h2>
        <form onSubmit={handleProjectSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: 400 }}>
          <input type="text" placeholder="Project Name" value={project.name} onChange={e => setProject({ ...project, name: e.target.value })} required />
          <textarea placeholder="Description" value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} required />
          <input type="text" placeholder="GitHub Link" value={project.ghLink} onChange={e => setProject({ ...project, ghLink: e.target.value })} required />
          <input type="text" placeholder="Live Link" value={project.liveLink} onChange={e => setProject({ ...project, liveLink: e.target.value })} required />
          <input type="text" placeholder="Image Link" value={project.imageLink} onChange={e => setProject({ ...project, imageLink: e.target.value })} required />
          <button type="submit" style={{ marginTop: "1rem" }}>Add Project</button>
        </form>
        {projectMsg && <p>{projectMsg}</p>}
      </div>
      <div>
        <h2>Add Blog Post</h2>
        <form onSubmit={handleBlogSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: 400 }}>
          <input type="text" placeholder="Title" value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} required />
          <textarea placeholder="Short Description" value={blog.shortDescription} onChange={e => setBlog({ ...blog, shortDescription: e.target.value })} required />
          <textarea placeholder="Full Details" value={blog.details} onChange={e => setBlog({ ...blog, details: e.target.value })} required />
          <button type="submit" style={{ marginTop: "1rem" }}>Add Blog</button>
        </form>
        {blogMsg && <p>{blogMsg}</p>}
      </div>
    </div>
  );
}

export default Admin; 