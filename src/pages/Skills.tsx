const Skills: React.FC = () => {
  return (
    <main className="skills-main">
      <div className="skills-section">
        <div className="header">
          <div className="text">My Skills</div>
          <div className="border-line"></div>
        </div>
        <div className="skills">
          <div className="technical-skills skills-group-row">
            <div className="skills-group-header">Technical Skills</div>
            <div className="border-line"></div>
            <div className="skills-group">
              <div className="html skill">
                <div className="icon">
                  <i className="fa-brands fa-html5 icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">HTML, CSS</div>
                  <div className="block-section">
                    Forms, Semantic Markup, Structures, HTML in general, Layout design, Animations, CSS in general
                  </div>
                  <div className="progress-block">90%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="css skill">
                <div className="icon">
                  <i className="fa-brands fa-java icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Programming Languages</div>
                  <div className="block-section">C++, Java, C, C#, Python</div>
                  <div className="progress-block">85%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="js skill">
                <div className="icon">
                  <i className="fa-brands fa-square-js icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Javascript, React JS, Node JS, Next JS, MongoDB</div>
                  <div className="block-section">DOM Manipulation, Event Handling, Backend, etc...</div>
                  <div className="progress-block">85%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="python skill">
                <div className="icon">
                  <i className="fa-brands fa-figma icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">UI/UX Design</div>
                  <div className="block-section">Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop</div>
                  <div className="progress-block">90%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="professional-skills skills-group-row">
            <div className="skills-group-header">Professional Skills</div>
            <div className="border-line"></div>
            <div className="skills-group">
              <div className="communication skill">
                <div className="icon">
                  <i className="fa-solid fa-paper-plane icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Communication</div>
                  <div className="block-section">Clear Messaging, Active Listening</div>
                  <div className="progress-block">95%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="team-work skill">
                <div className="icon">
                  <i className="fa-solid fa-people-group icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Team Work</div>
                  <div className="block-section">Collaboration, Conflict Resolution</div>
                  <div className="progress-block">95%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="management skill">
                <div className="icon">
                  <i className="fa-solid fa-hourglass-start icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Management</div>
                  <div className="block-section">Task Delegation, Time Management</div>
                  <div className="progress-block">90%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
              <div className="creativity skill">
                <div className="icon">
                  <i className="fa-solid fa-palette icon-img"></i>
                </div>
                <div className="skill-block">
                  <div className="block-header">Creativity</div>
                  <div className="block-section">Innovative Solutions, Brainstorming</div>
                  <div className="progress-block">90%</div>
                  <div className="progress-bar">
                    <div className="progress-per"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Skills
