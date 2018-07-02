import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPage = props => {
  const pathname = props.location.pathname
  return (
    <div className="container">
      <Header pathname={pathname} />
      <div className="blog">
        <img
          className="blog__image"
          src="/static/img/icons/blog.png"
          alt="blog"
        />
        <h1 className="blog__title">Blog</h1>
        <h4 className="blog__subtitle">Under construction.</h4>
      </div>

      <Footer />
    </div>
  )
}
export default BlogPage
