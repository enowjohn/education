// src/pages/LandingPage.js
import { Link } from "react-router-dom";
// import './styles.css'; // You can uncomment this when you have your styles
// import educationImage from '../assets/Digital-Learning.jpeg'; // Example image, replace with your actual image path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
      <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          </div>
        <h1 className="logo">LearnHub</h1>
        <div className="nav-bar">
        <Link to="/LandingPage.jsx" className="nav-link">
            Home
          </Link>
          <Link to="/signup" className="nav-link">
            Contact Us
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          </div>
        <nav className="nav-links">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </nav>
      </header>

      <section className="hero">
        {/* This image is positioned using CSS in the body */}
        <div className="hero-text">
          <h2>Unlock Your Potential</h2>
          <p>Access quality education from anywhere</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Personalized Learning</h3>
          <p>Customized lessons to fit your learning style.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Teachers</h3>
          <p>Learn from the best educators around the world.</p>
        </div>
        <div className="feature-card">
          <h3>Interactive Lessons</h3>
          <p>Engage with content through interactive lessons.</p>
        </div>
        <div className="feature-card">
          <h3>Progress Tracking</h3>
          <p>Track your learning journey and achievements.</p>
        </div>
        <div className="imgs">
        <img className="img-1"
          src="src/assets/african-american-student-girl-holding-books-white-background-african-american-student-girl-holding-books-isolated-white-136546005.webp"
          alt=""
        />
        </div>
      </section>

      <div className="main">
      <div className="header-1">
        <h2>Join Our Community</h2>
        <p>Connect with other learners and share your experiences.</p>
        <button className="cta-button">Join Now</button>
      </div>

      <div className="header-2">
        <h2>Get Started Today</h2>
        <p>Sign up for a free account and start learning.</p>
        <button className="cta-button">Sign Up</button>
        </div>
        </div>

        <div className="img-section">
          <div>
          <img className="img-size" src="src/assets/african-american-student-girl-holding-books-white-background-african-american-student-girl-holding-books-isolated-white-136546005.webp" alt="" />
          <p>EVELYN</p>
          </div>
          <div>
          <img className="img-size" src="src/assets/photo-of-a-beautiful-female-student-carrying-books-KR6DA5.jpg" alt="" />
          <p>ANNA</p>
          </div>
          <div>
          <img className="img-size" src="src/assets/images (2).jpeg" alt="" />
          <p>HELLEN</p>
          </div>
          <div>
          <img className="img-size" src="src/assets/graduate-wage-gap.webp" alt="" />
          <p>Graduation Batch</p>
          </div>
          <div className="para">
          {/* <p>Am so super excited i was part of the learning team in this website it has so much impacted </p> */}
          </div>
        </div>

      <footer className="footer">
        <nav className="foter-nav">
          <div>
          <div>
          <a href="#">About</a>
          </div>
          <div>
          <a href="#">Contact</a>
          </div>
          <div>
          <a href="#">Privacy Policy</a>
          </div>
          <div>
          <a href="#">Terms & Conditions</a>
          </div>
          <div>
          <a href="#">teachers</a>
          </div>
          </div>
        </nav>
        <div className="foter-imgs">
          <div>
        <img className="foterimg-size" src="src/assets/images (1).png" alt="" />
        </div>
        <div>
        <img className="foterimg-size"  src="src/assets/Telegram-icon-on-transparent-background-PNG.png" alt="" />
        </div>
        <div>
        <img className="foterimg-size"  src="src/assets/download (1).jpeg" alt="" />
        </div>
        <div>
        <img className="foterimg-size"  src="src/assets/download (1).png" alt="" />
        </div>
        <div>
        <img className="foterimg-size"  src="src/assets/download.jpeg" alt="" />
        </div>
        <div>
        <img className="foterimg-size"  src="src/assets/download.png" alt="" />
        </div>
        </div>
        <p>&copy; JOHN-WASHINGTON.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
