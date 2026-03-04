const Projects: React.FC = () => {
  const webProjects = [
    {
      title: 'Online Library Management System',
      description: 'A fully functional online library management system with user authentication, book catalog, borrowing system, and admin dashboard.',
      image: '/Assets/Projects/Online-Library-Management-System-_-1024x820.png',
      tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/Mucyo-Ivan/Library-system-in-PHP',
    },
    {
      title: 'Student Result Management System',
      description: 'A comprehensive student result management system with grade tracking, performance analytics, and dashboard visualization.',
      image: '/Assets/Projects/Student-Result-Management-System-_-Dashboard-1024x442.png',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Mucyo-Ivan/Student_result_management_system',
    },
    {
      title: 'Rwalent',
      description: 'A talent marketplace web application that bridges the gap between artists, musicians, and entertainers with clients and event organizers looking to book creative talent across Rwanda.',
      image: '/Assets/Projects/rwalent.png',
      tags: ['Java (Spring Boot)', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/Mucyo-Ivan/Rwalent_Front_End',
    },
    {
      title: 'Music Player',
      description: 'A sleek, interactive music player built entirely with vanilla JavaScript featuring playlist management, playback controls, and a modern responsive UI.',
      image: '/Assets/Projects/music-player.png',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Mucyo-Ivan/Music-Player-in-JS',
    },
  ]

  const iotProjects = [
    {
      title: 'SMARTEN',
      description: 'SMARTEN is a real-time smart water management system that tracks usage, detects leaks instantly, and allows users to control and pay for water services remotely through web and mobile platforms.',
      image: '/Assets/Projects/Smarten-web-page.png',
      tags: ['Arduino', 'Java (Spring Boot)', 'React', 'Flutter', 'InfluxDB', 'TimescaleDB', 'AWS'],
      github: 'https://github.com/Mucyo-Ivan/SMARTEN-WEBSITE',
    },
    {
      title: 'Smart Home System',
      description: 'IoT project for remote home automation enabling users to control lights, temperature, and security systems from anywhere.',
      image: '/Assets/Projects/Smart-Home.png',
      tags: ['IoT', 'Embedded Systems', 'C++', 'Web'],
      github: 'https://github.com/Mucyo-Ivan/Weather-App',
    },
  ]

  const renderCard = (project: typeof webProjects[0], index: number) => (
    <div className="project-card" key={index}>
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
        <div className="project-card-overlay">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-btn"
          >
            <i className="fa-brands fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="projects-main">
      <div className="projects-container">
        {/* Page Header */}
        <div className="projects-page-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my work spanning web development, IoT, and software engineering
          </p>
          <div className="projects-title-line"></div>
        </div>

        {/* Web Development Section */}
        <section className="projects-category">
          <div className="category-header">
            <div className="category-icon-wrapper">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h2>Web Development</h2>
          </div>
          <div className="projects-scroll-wrapper">
            <div className="projects-scroll-track">
              {webProjects.map((project, index) => renderCard(project, index))}
              {webProjects.map((project, index) => renderCard(project, index + webProjects.length))}
            </div>
          </div>
        </section>

        {/* Software & IoT Section */}
        <section className="projects-category">
          <div className="category-header">
            <div className="category-icon-wrapper">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h2>Software &amp; IoT</h2>
          </div>
          <div className="projects-grid">
            {iotProjects.map((project, index) => renderCard(project, index))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects
