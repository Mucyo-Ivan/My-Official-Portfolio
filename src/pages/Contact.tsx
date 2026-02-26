import { useState, useRef, FormEvent } from 'react'

const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [loading, setLoading] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const name = nameRef.current?.value.trim() || ''
    const email = emailRef.current?.value.trim() || ''
    const message = messageRef.current?.value.trim() || ''

    let isValid = true
    let emailIsValid = true
    let nameIsValid = true
    let messageIsValid = true

    if (name === '') {
      isValid = false
      nameIsValid = false
    }

    if (email === '' || !isValidEmail(email)) {
      isValid = false
      if (email !== '' && !isValidEmail(email)) {
        emailIsValid = false
      }
    }

    if (message === '') {
      isValid = false
      messageIsValid = false
    }

    if (!isValid) {
      setShowError(true)
      setShowEmailError(false)
      if (nameIsValid && messageIsValid && !emailIsValid) {
        setShowError(false)
        setShowEmailError(true)
      }
    } else {
      setShowError(false)
      setShowEmailError(false)
      setLoading(true)
      setTimeout(() => {
        sendMail()
      }, 2000)
    }
  }

  const sendMail = () => {
    setShowSuccess(true)
  }

  const handleOk = () => {
    setShowSuccess(false)
    setLoading(false)
    if (nameRef.current) nameRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (messageRef.current) messageRef.current.value = ''
  }

  return (
    <main className="contact-main">
      <div className="contact-full">
        <div className={`contact-section${showSuccess ? ' csa-cs' : ''}`}>
          <div className="cs-top mobile-show">
            <h1>Reach Me</h1>
            <div className="border-line"></div>
          </div>
          <div className="cs-item email">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text">
              <div className="placeHolder">E-mail</div>
              <div className="info">
                <a href="mailto:mucyoivan25@gmail.com">mucyoivan25@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="cs-item number">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="text">
              <div className="placeHolder">Phone</div>
              <div className="info">
                <a href="tel:250738567540">+250738567540</a>
              </div>
            </div>
          </div>
          <div className="cs-item address">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text">
              <div className="placeHolder">Address</div>
              <div className="info">Kigali, Rwanda</div>
            </div>
          </div>
        </div>
        <section className={`contact-form${showSuccess ? ' csa-cf' : ''}`}>
          <h1>Contact Me</h1>
          <div className="border-line"></div>
          <div className={`contact-submit-after${showSuccess ? ' show' : ''}`}>
            <div className="box">
              <i className="fa-solid fa-circle-check csa-icon"></i>
              <div className="csa-text">Message sent successfully</div>
              <div className="csa-ok" onClick={handleOk}>OK</div>
            </div>
          </div>
          <form
            id="contact-form"
            className={`form-section${showSuccess ? ' hide' : ''}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-group name-section">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" ref={nameRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} ref={messageRef} required></textarea>
            </div>
            <div className={`error${showError ? ' error-show' : ''}`}>
              <i className="fa-solid fa-circle-xmark error-icon"></i>Please fill out all the fields
            </div>
            <div className={`email-error${showEmailError ? ' error-show' : ''}`}>
              <i className="fa-solid fa-circle-xmark error-icon"></i>Email address is not valid
            </div>
            <button
              type="submit"
              id="contact-submit"
              className={`contact-button${loading ? ' loading' : ''}`}
            >
              <div className={`contact-load${loading ? ' show' : ''}`}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className={`submit-text${loading ? ' hide' : ''}`}>Submit</div>
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Contact
