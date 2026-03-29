const Hobbies: React.FC = () => {
  return (
    <main className="hobbies-main">
      <div className="hobbies-section">
        <div className="hobbies-header">
          <div className="header-text">My Hobbies</div>
          <div className="header-line"></div>
        </div>
        <div className="section">
          <div className="row first">
            <div className="hobbies">
              <div className="image">
                <img src="/Assets/hobbies/Travelling.jpg" alt="Travelling" />
              </div>
              <div className="header">
                <div className="header-text">Travelling</div>
                <div className="header-line"></div>
              </div>
              <div className="text">
                Traveling is more than just a pastime for me; it's a way of life. Exploring new
                destinations, immersing myself in diverse cultures, and uncovering the beauty of our world
                bring me immense joy and endless opportunities for personal growth.
              </div>
            </div>
            <div className="hobbies">
              <div className="image">
                <img src="/Assets/hobbies/Swimming.jpg" alt="Swimming" />
              </div>
              <div className="header">
                <div className="header-text">Swimming</div>
                <div className="header-line"></div>
              </div>
              <div className="text">
                Swimming is my ultimate escape. The feeling of gliding through the water, weightless and
                free, is truly unparalleled. Whether it's in the calm waters of a pool or the waves of the
                open sea, swimming rejuvenates my body and soul.
              </div>
            </div>
          </div>
          <div className="row second">
            <div className="hobbies">
              <div className="image">
                <img src="/Assets/hobbies/Social-Hangouts.jpg" alt="Social Hangouts" />
              </div>
              <div className="header">
                <div className="header-text">Social Hangouts</div>
                <div className="header-line"></div>
              </div>
              <div className="text">
                Spending quality time with friends is a treasured escape from the routine. Whether it's
                sharing laughter, exploring new places, or simply enjoying each other's company, social
                hangouts create lasting bonds and cherished memories.
              </div>
            </div>
            <div className="hobbies">
              <div className="image">
                <img src="/Assets/hobbies/Camera.webp" alt="Photography" />
              </div>
              <div className="header">
                <div className="header-text">Photography</div>
                <div className="header-line"></div>
              </div>
              <div className="text">
                Photography is my way of capturing the world's fleeting moments and turning them into
                lasting memories. With a camera in hand, I explore the beauty of everyday life, seeking to
                frame the world in a unique and captivating way.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hobbies
