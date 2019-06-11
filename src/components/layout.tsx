import React, { ReactNode } from "react"
import { StaticQuery, graphql } from "gatsby"

import * as bs from 'bootstrap/dist/css/bootstrap.css';
import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';
import { Container, Row, Col } from "react-bootstrap"


import Header from "./header"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
    <>
      <Container fluid className="site-main">
        <Row noGutters className="justify-content-center">
          <Col>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Col>
        </Row>
        <Row noGutters>
          <Col>
          <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          </Col>
        </Row>
      </Container>
    </>
    )}
  />
)

export default Layout
