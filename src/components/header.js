import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  state = {
    currentPage: 'projects',
  }

  onPageChange = page => {
    this.setState({
      currentPage: page,
    })
  }

  componentDidMount() {
    let pathname = this.props.pathname
    if (pathname === '/') {
      this.onPageChange('projects')
    } else if (pathname === '/about') {
      this.onPageChange('about')
    } else {
      this.onPageChange('blog')
    }
  }

  render() {
    let { currentPage } = this.state
    return (
      <div className="header">
        <div className="header__brand">
          <span>
            <Link to="/">ML</Link>
          </span>
        </div>
        <ul className="header__nav">
          <li className="header__nav__link ">
            <Link className={currentPage === 'projects' && 'selected'} to="/">
              Projects
            </Link>
          </li>
          <li className="header__nav__link">
            <Link className={currentPage === 'about' && 'selected'} to="/about">
              About
            </Link>
          </li>
          <li className="header__nav__link">
            <Link className={currentPage === 'blog' && 'selected'} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="header__mobilenav">
          <li className="header__mobilenav__link">
            <Link to="/">Projects</Link>
          </li>
          <li className="header__mobilenav__link">
            <Link to="/about">About</Link>
          </li>
          <li className="header__mobilenav__link">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
