import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = props => {
  const pathname = props.location.pathname
  return (
    <div className="container">
      <Header pathname={pathname} />
      <div className="about">
        <h1 className="about__title">Hi, my name is Mike.</h1>
        <div className="about__subtitle">
          I am a developer based in Toronto and I love crafting{' '}
          <strong>beatiful</strong> and <strong>useful</strong> web
          applications.
          <div className="about__subtitle--divider" />
          Besides building things on the internet, I spend my spare time taking{' '}
          <a href="https://www.instagram.com/_munkyu" target="_blank">
            <span className="about__link">film photographs</span>
          </a>{' '}
          or watching cat videos on youtube 🐱.
          <div className="about__subtitle--divider" />
          Feel free to touch base with me via my email at{' '}
          <a href="mailto:mikemunkyu.lee@gmail.com">
            <span className="about__link">mikemunkyu.lee@gmail.com</span>
          </a>{' '}
          or check out my other projects on Github!
        </div>
        <a href="https://github.com/leemun1" className="about__button">
          Find me on Github
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
