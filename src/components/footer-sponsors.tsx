import React from "react"

import { Container, Row, Col, Image } from "react-bootstrap"

import logo1 from '../images/patrocinadores/CMC.png'
import logo2 from '../images/patrocinadores/LHermitage.png'
import logo3 from '../images/patrocinadores/Amigo-Marista.png'
import logo4 from '../images/patrocinadores/Colegios-Maristas.png'
import logo5 from '../images/patrocinadores/Hospital.png'
import logo6 from '../images/patrocinadores/PUC-DII-ICF.png'
import logo7 from '../images/patrocinadores/Tecpuc_Logo.png'
import logo8 from '../images/patrocinadores/Labcom.png'

const FooterSponsors = () => (
  <Container as="section" className="site-footer-sponsors">
    <Row noGutters>
      <Col>
        <h4 className="title text-uppercase text-center text-lg-left">Patrocínio:</h4>
        <div className="d-flex align align-items-center justify-content-between text-center sponsor-list">
          <picture>
            <Image src={logo1} width="95" />
          </picture>
          <picture>
            <Image src={logo2} width="97" />
          </picture>
          <picture>
            <Image src={logo3} width="85" />
          </picture>
          <picture>
            <Image src={logo4} width="131" />
          </picture>
          <picture>
            <Image src={logo5} width="146" />
          </picture>
          <picture>
            <Image src={logo6} width="175" style={{ transform: 'translateY(-20px)' }} />
          </picture>
          <picture>
            <Image src={logo7} width="82" />
          </picture>
          <picture>
            <Image src={logo8} width="100" />
          </picture>
        </div>
      </Col>  
    </Row>
  </Container>
)

export default FooterSponsors
