import React from "react";
import "./House.css";

const CardGrid = () => {
  return (
    <>
      <div className="container">
        <div className="card-grid">
          <div className="card">
            <div className="icon graphic-design"></div>
            <h3>Graphic Design</h3>
            <a href="Google.com" className="more">
              More
            </a>
          </div>
          <div className="card">
            <div className="icon web-design"></div>
            <h3>Web Design</h3>
            <a href="Google.com" className="more">
              More
            </a>
          </div>
          <div className="card">
            <div className="icon software"></div>
            <h3>Software</h3>
            <a href="Google.com" className="more">
              More
            </a>
          </div>
          <div className="card">
            <div className="icon application"></div>
            <h3>Application</h3>
            <a href="Google.com" className="more">
              More
            </a>
          </div>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-item">
            <h2>2019</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="timeline-item">
            <h2>2020</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="timeline-item">
            <h2>2021</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="timeline-item">
            <h2>2022</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.nicepagecdn.com/d2cc3eaa/3028120/images/woman-new-min.png"
            alt="Woman"
          />
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4801/4801092.png"
              alt="Phone Icon"
            />
          </div>
          <div className="contact-text">
            <h3>Contact Us Today!</h3>
            <p>
              Call us today +1 777 000 0000 or{" "}
              <a href="mailto:info@example.com">EMAIL US</a>
            </p>
          </div>
        </div>
        <div className="consultation-button">
          <button>BOOK A CONSULTATION</button>
        </div>
      </div>
    </>
  );
};

export default CardGrid;
