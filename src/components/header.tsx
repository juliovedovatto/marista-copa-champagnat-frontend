import React from "react"

import { Container, Row, Col, Image } from "react-bootstrap"

import Menu from './menu'
import SoccerJerseys from '../images/camisetas.png'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('.navbar .navbar-nav .nav-link')
}

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div className="site-header">
    <Container as="header">
      <Menu siteTitle={siteTitle} />
      <Row noGutters>
        <Col lg="12">
          <picture className="jerseys">
            <Image src={SoccerJerseys} fluid />
          </picture>
        </Col>
      </Row>  
      <Row noGutters>
        <Col className="text text-center">
          <h3 className="title secondary-title text-uppercase">Diversos Times vestindo uma só camisa:</h3>
          <h2 className="title big-title text-uppercase">A Marista</h2>
        </Col>
      </Row>
      <div className="soccer-cleat soccer-cleat-shadow d-sm-none d-lg-block"></div>
      <div className="soccer-cleat d-sm-none d-lg-block"></div>
      <div className="soccer-horn soccer-horn-shadow d-md-none d-xl-block"></div>
      <div className="soccer-horn d-md-none d-xl-block"></div>
    </Container>
  </div>
)

export default Header
