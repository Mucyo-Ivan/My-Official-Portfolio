import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

const Home: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Graphic Designer', 'Data Analyst', 'Web Developer'],
        typeSpeed: 55,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="column right">
          <img src="/Assets/Mucyo Ivan 02 April 2008 (1).JPG" alt="Ivan" />
        </div>
        <div className="column left">
          <div className="text">
            I'm Ivan and I'm a <span ref={typedRef} className="iAm"></span>
          </div>
          <p>
            A 16-year-old Web Developer with a deep passion for crafting elegant and user-friendly websites.
            With a creative mindset and strong technical skills, I specialize in turning web
            ideas into visually stunning and functional realities.
          </p>
          <div className="buttons">
            <a href="#">Download CV</a>
            <Link to="/contact" className="cm-button">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
