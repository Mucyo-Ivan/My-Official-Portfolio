const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left">
        &copy; {new Date().getFullYear()} • MUCYO Ivan • All Rights Reserved
      </div>
      <div className="right">
        <div className="social">
          <a href="https://www.instagram.com/ivan.mucyo" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/mucyo-yvan-0633bb3b0" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/Mucyo-Ivan" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://x.com/_Mucyo_" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
