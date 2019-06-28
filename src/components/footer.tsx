import React from "react"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"

import FooterSponsors from './footer-sponsors'

import logoProvincia from '../images/logo-PROVINCIA.png'
import logoMarista from '../images/logo-GRUPO.png'
import logoFTD from '../images/logo-FTD.png'

const Footer = () => (
  <div className="site-footer">
    <Container as="footer">
      <Row>
        <Col lg={{ span: 5, offset: 1 }}>
          <h4 className="title text-uppercase text-center text-lg-left">Realização:</h4>
          <Navbar className="justify-content-center justify-content-sm-left">
            <Nav className="align-items-end">
              <Nav.Link href="#home">
                <img src={logoProvincia} alt="Província Marista - Brasil Centro Sul" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>  
        <Col lg="5">
          <h4 className="title text-uppercase text-center text-lg-left">Apoio:</h4>
          <Navbar className="justify-content-center justify-content-sm-left">
            <Nav className="align-items-end">
              <Nav.Link href="#link">
                <img src={logoMarista} alt="Grupo Maristal" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img src={logoFTD} alt="FTD Educação" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
    <FooterSponsors />
  </div>
)

export default Footer
