import React, { ReactNode } from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"


import Header from "./header"
import Footer from "./footer"

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
            <main>{children}</main>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
    )}
  />
)

export default Layout
