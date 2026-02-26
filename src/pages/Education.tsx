const Education: React.FC = () => {
  return (
    <main className="education-main">
      <div className="education-section">
        <div className="study first">
          <div className="image">
            <img src="/Assets/education/1627321870-17-riviera-high-school.jpg" alt="Riviera High School" />
          </div>
          <div className="line"></div>
          <div className="texts">
            <div className="header">O' Level</div>
            <div className="name">Riviera High School</div>
            <div className="year">2020-2023</div>
            <div className="text">
              This is the school which I completed my O' level studies from Senior 1 to Senior 3 in.
            </div>
          </div>
        </div>
        <div className="study second">
          <div className="image">
            <img src="/Assets/education/Rwanda-Coding-Academy.jpg" alt="Rwanda Coding Academy" />
          </div>
          <div className="line"></div>
          <div className="texts">
            <div className="header">Higher Secondary Degree</div>
            <div className="name">Rwanda Coding Academy</div>
            <div className="year">2023-2026</div>
            <div className="text">
              I am currently studying in my Higher Secondary Degree from Rwanda Coding Academy. Here I am
              studying my majoring in Software Programming and Embedded Systems.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Education
