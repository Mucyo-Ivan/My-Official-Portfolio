const Testimonials: React.FC = () => {
  return (
    <main className="testimonials-main">
      <div className="testimonials-section">
        <div className="testimonials-header">
          <div className="header-text">What Others Say About Me</div>
          <div className="header-line"></div>
        </div>
        <div className="section">
          <div className="row">
            <div className="block maddat">
              <div className="image">
                <img src="/Assets/testimonials/Keza Delice.png" alt="Keza Delice" />
              </div>
              <div className="content">
                <div className="content-row">
                  <div className="name">Name</div>
                  <div className="description">Keza Delice</div>
                  <div className="line"></div>
                </div>
                <div className="text">
                  Ivan is not just a talented web developer but also an amazing friend. His
                  dedication to his work and warm personality make him someone you can always rely on. I'm
                  proud to call him a friend and collaborator.
                </div>
              </div>
            </div>
            <div className="block oasis">
              <div className="image">
                <img src="/Assets/testimonials/Ganza Danny Mike.png" alt="Ganza Rwabuhama Danny Mike" />
              </div>
              <div className="content">
                <div className="content-row">
                  <div className="name">Name</div>
                  <div className="description">Ganza Rwabuhama Danny Mike</div>
                  <div className="line"></div>
                </div>
                <div className="text">
                  Ivan's creativity knows no bounds! From brainstorming ideas to executing projects
                  flawlessly, he's the go-to person for anything innovative.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="block sudip">
              <div className="image">
                <img src="/Assets/testimonials/Ruyange Arnold.png" alt="Ruyange Arnold" />
              </div>
              <div className="content">
                <div className="content-row">
                  <div className="name">Name</div>
                  <div className="description">Ruyange Arnold</div>
                  <div className="line"></div>
                </div>
                <div className="text">
                  Ivan is not only a tech enthusiast but also a passionate musician. His ability to
                  balance both worlds and excel in each is a testament to his incredible work ethic and
                  talent.
                </div>
              </div>
            </div>
            <div className="block subin">
              <div className="image">
                <img src="/Assets/testimonials/Ntwali Isimbi Vieira.jpg" alt="Ntwali Isimbi Vieira" />
              </div>
              <div className="content">
                <div className="content-row">
                  <div className="name">Name</div>
                  <div className="description">Ntwali Isimbi Vieira</div>
                  <div className="line"></div>
                </div>
                <div className="text">
                  I've known Ivan for years, and his dedication to learning and adapting to new
                  challenges is inspiring. He's always the first to lend a helping hand in any
                  tech-related dilemma.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Testimonials
