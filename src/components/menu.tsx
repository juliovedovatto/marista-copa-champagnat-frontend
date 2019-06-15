import React from "react"

import { Row, Col, Navbar, Nav, Image } from "react-bootstrap"

import Logo from '../images/logo.png'

interface Props {
  siteTitle: string
}

const Menu = ({ siteTitle }: Props) => (
  <Row id="menu" noGutters>
    <Col sm={12} className="nav-mobile d-sm-block d-lg-none">
      <Navbar className="justify-content-center">
        <Nav>
            <Nav.Link href="#register-your-team" className="text-uppercase">Inscrições</Nav.Link>
            <Nav.Link href="#scoreboard" className="text-uppercase">Tabela</Nav.Link>
            <Nav.Link href="#tournament-rules" className="text-uppercase">Regulamento</Nav.Link>
          {/* <Nav.Link href="#gallery" className="text-uppercase">Galeria</Nav.Link> */}
        </Nav>
      </Navbar>
    </Col>
    <Col lg={4} className="nav-primary">
      <Navbar className="d-none d-sm-block">
        <Nav>
            <Nav.Link href="#register-your-team" className="text-uppercase">Inscrições</Nav.Link>
            <Nav.Link href="#scoreboard" className="text-uppercase">Tabela</Nav.Link>
        </Nav>
      </Navbar>
    </Col>  
    <Col lg={4} sm={12} className="text-center">
      <Image src={Logo} alt={siteTitle} fluid className="logo" />
    </Col>  
    <Col lg={4} className="nav-secondary text-right">
      <Navbar className="d-none d-sm-block ">
        <Nav className="justify-content-end">
          <Nav.Link href="#tournament-rules" className="text-uppercase">Regulamento</Nav.Link>
          {/* <Nav.Link href="#gallery" className="text-uppercase">Galeria</Nav.Link> */}
        </Nav>
      </Navbar>  
    </Col>  
  </Row>
)

export default Menu