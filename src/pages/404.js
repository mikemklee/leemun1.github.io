import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="NotFound">
    <h1 className="NotFound__title">404</h1>
    <p className="NotFound__description">
      The page you requested does not exist. <br />
      Please check if you have the right URL.
    </p>
    <Link to="/">
      <button className="button">Go to Main Page</button>
    </Link>
  </div>
)

export default NotFoundPage
