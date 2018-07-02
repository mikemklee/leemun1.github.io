import React from 'react'

import Header from '../components/Header'
import Statement from '../components/Statement'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const IndexPage = props => {
  const pathname = props.location.pathname
  return (
    <div className="container">
      <Header pathname={pathname} />
      <Statement />
      <Projects />
      <Footer />
    </div>
  )
}

export default IndexPage
