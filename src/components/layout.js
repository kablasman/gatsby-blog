import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import github from '../images/iconmonstr-github-1.svg'
import banner from '../images/6845851_preview.png'
import lowerBanner from '../images/10-grunge-spray-splatter-background-10.png'

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  const twitter = data.site.siteMetadata.social.twitter

  return (
    <div className="layout" data-is-root-path={isRootPath}>
      <header className="site-header">
        <div className="logo">
          <Link to="/">graffiti.io</Link>
          <a href="https://github.com/kablasman?tab=repositories"class="github"><img src={github} alt="github" width="40"/></a>
        </div>
      </header>
      <div class="banner"><img src={banner} alt="banner"/></div>
      <main className="site-main container">{children}</main>
      <div class="lowerBanner"><img src={lowerBanner} alt="banner"/></div>
      <footer className="site-footer">
        <div className="container">
          <p class="copyright">© Copyright, {new Date().getFullYear()}.</p>
          {/* <ul>
            <li><a href={`http://twitter.com/${twitter}`}>{`@${twitter}`}</a></li>
          </ul> */}
        </div>
      </footer>
    </div>
  )
}

export default Layout
