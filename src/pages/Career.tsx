const Career: React.FC = () => {
  return (
    <main className="career-main">
      <div className="career-section">
        <div className="professional-summary">
          <div className="ps-header career-header">
            <div className="text">Professional Summary</div>
            <div className="header-line"></div>
          </div>
          <div className="texts">
            I'm MUCYO Ivan, a creative problem-solver who's passionate about web development
            and design. With a background in coding and an eye for aesthetics, I'm on a mission to make the
            internet a better place, one pixel at a time. When I'm not glued to my screen, you'll find me
            exploring the great outdoors or Playing Basketball. Let's connect and craft some
            digital magic!
          </div>
        </div>
        <div className="career-goals">
          <div className="cg-header career-header">
            <div className="text">Career goals</div>
            <div className="header-line"></div>
          </div>
          <div className="goals">
            <div className="goals-row short-term-goals">
              <div className="goals-header">
                <div className="text">Short-Term Goals</div>
                <div className="header-line"></div>
              </div>
              <div className="texts">
                <div className="text-row">
                  <div className="tr-icon"></div>Develop technical skills in web development.
                </div>
                <div className="text-row">
                  <div className="tr-icon"></div>Gain practical experience through collaboration.
                </div>
                <div className="text-row">
                  <div className="tr-icon"></div>Build a strong portfolio.
                </div>
              </div>
            </div>
            <div className="goals-row long-term-goals">
              <div className="goals-header">
                <div className="text">Long-Term Goals</div>
                <div className="header-line"></div>
              </div>
              <div className="texts">
                <div className="text-row">
                  <div className="tr-icon"></div>Establish a web development agency.
                </div>
                <div className="text-row">
                  <div className="tr-icon"></div>Lead a team of creative professionals.
                </div>
                <div className="text-row">
                  <div className="tr-icon"></div>Contribute to business growth through online solutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Career
