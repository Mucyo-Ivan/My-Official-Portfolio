const Projects: React.FC = () => {
  return (
    <main className="gallery-main">
      <div className="gallery-section">
        {/* Web Development Projects Section */}
        <div className="column nepal">
          <div className="header">
            <div className="header-line"></div>
            <div className="text">
              Web Development Projects<i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className="header-line right"></div>
          </div>
          <div className="images">
            <div className="project-item">
              <img
                src="/Assets/Projects/Online-Library-Management-System-_-1024x820.png"
                alt="Web Project 1"
              />
              <p>
                <strong>Online library management system</strong> - A fully functional Online library
                management system.
              </p>
              <a
                href="https://github.com/Mucyo-Ivan/Library-system-in-PHP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                GitHub Repository
              </a>
            </div>
            <div className="project-item">
              <img
                src="/Assets/Projects/Student-Result-Management-System-_-Dashboard-1024x442.png"
                alt="Web Project 2"
              />
              <p>
                <strong>Student Result Management System</strong> - A fully functional Student Result
                Management system.
              </p>
              <a
                href="https://github.com/Mucyo-Ivan/Student_result_management_system"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="column australia">
          <div className="header">
            <div className="header-line"></div>
            <div className="text">
              Software &amp; IoT Projects <i className="fa-solid fa-microchip"></i>
            </div>
            <div className="header-line right"></div>
          </div>
          <div className="images">
            <div className="project-item">
              <img src="/Assets/Projects/pipe leakage.jpeg" alt="Software Project 1" />
              <p>
                <strong>Pipe water leakage detection system</strong> - IOT project for pipe water leakage
                detection.
              </p>
              <a
                href="https://github.com/Mucyo-Ivan/Smarten"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                GitHub Repository
              </a>
            </div>
            <div className="project-item">
              <img src="/Assets/Projects/Smart-Home.png" alt="Software Project 2" />
              <p>
                <strong>Smart Home System</strong> - IoT project for remote home automation.
              </p>
              <a
                href="https://github.com/Mucyo-Ivan/Weather-App"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects
