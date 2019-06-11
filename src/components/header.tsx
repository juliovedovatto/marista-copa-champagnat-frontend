import { Link } from "gatsby"
import React from "react"

import { Container, Row, Col, Navbar } from "react-bootstrap"

import Logo from '../images/logo.png'
import SoccerJerseys from '../images/camisetas.png'


interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div className="site-header">
    <Container as="header">
      <Row noGutters>
        <Col lg="4">
          <Navbar>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Inscrições</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Tabela</a></li>
            </ul>
          </Navbar>
        </Col>  
        <Col lg="4" className="text-center">
          <img src={Logo} alt={siteTitle} />
        </Col>  
        <Col lg="4" className="text-right">
          <Navbar className="justify-content-end">
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Regulamento</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Galeria</a></li>
            </ul>
          </Navbar>  
        </Col>  
      </Row>
      <Row noGutters>
        <Col lg="12">
          <picture className="jerseys">
            <img src={SoccerJerseys} alt="" />
          </picture>
        </Col>
      </Row>  
      <Row noGutters>
        <Col className="text text-center">
          <h3>Diversos Times vestindo uma só camisa:</h3>
          <h2>A Marista</h2>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Header
