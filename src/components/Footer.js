import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="footer__contacts">
      <div className="footer__contactme">Get in touch</div>
      <div className="footer__myemail">mikemunkyu.lee@gmail.com</div>
      <div className="footer__social">
        <a href="https://github.com/leemun1">
          <span>
            <i className="fab fa-github" />
          </span>
        </a>
        <a href="https://www.instagram.com/_munkyu">
          <span>
            <i className="fab fa-instagram" />
          </span>
        </a>
      </div>
    </div>
    <div className="footer__copyright">&#169; Mike Lee. 2018</div>
  </footer>
)

export default Footer
