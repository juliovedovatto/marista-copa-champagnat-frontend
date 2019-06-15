import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import BlockCTA from '../components/cta'

const Component = () => (
  <BlockCTA id="register-your-team" className="subscribe-team-block">
      <Container>
            <Row noGutters>
              <Col className="cta-text text-uppercase text-center text-sm-left" xs={12} sm={6}>
                <p>Na Copa Champagnat todos podem jogar. 
                São duas categorias: masculina e mista. 
                É a chance de mostrar que sua equipe também 
                é boa de bola. Reúna seu time e participe! </p>
              </Col>
              <Col className="cta-button text-center text-md-right d-flex align-items-center justify-content-center justify-content-md-end" xs={12} sm={6}>
                <Button variant="primary" href="https://forms.gle/PrWVuZwtVMDY6nXM9" target="_blank">
                  Inscreva seu Time
                </Button>
              </Col>
            </Row>
          </Container>
    </BlockCTA>
)

export default Component