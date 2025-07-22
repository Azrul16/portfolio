import React from 'react';
import './Profile.css';
import profilePhoto from '../assets/images/photo/photo.png';
import nameImage from '../assets/images/name/name.png';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-content">
        <div className="profile-image">
          <img src={profilePhoto} alt="Profile" className="image-placeholder" />
        </div>
        <div className="profile-text">
          <img src={nameImage} alt="Name" className="name-image" />
          <p>Software Developer | Web Enthusiast | Lifelong Learner</p>
          <div className="social-links">
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile; 