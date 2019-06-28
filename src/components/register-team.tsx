import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import dayjs from "dayjs"

import BlockCTA from '../components/cta'

interface Props {
  until: string ,
  showUntil?: boolean
}

const Component = ({ until, showUntil }: Props) => { 
  const date = !!until ? dayjs(until) : false
  const dateStr = date && date.isValid() ? date.format('DD/MM/YYYY HH:mm') : false
  const isOpen = date ? date.isAfter(Date.now()) : true

  return (
    <BlockCTA id="register-your-team" className="subscribe-team-block">
      <Container>
            <Row noGutters>
              <Col className="cta-text text-uppercase text-center text-sm-left" xs={12} sm={6}>
                <p>Na Copa Champagnat todos podem jogar. 
                São duas categorias: masculina e mista. 
                É a chance de mostrar que sua equipe também 
                é boa de bola. Reúna seu time e participe! </p>
              </Col>
              <Col className="cta-button text-center text-md-right d-flex align-content-center align-items-center justify-content-center justify-content-md-end" xs={12} sm={6}>
                <div className="cta-button-details">
                  <Button variant="primary" href="https://forms.gle/PrWVuZwtVMDY6nXM9" target="_blank" disabled={!isOpen}>
                  { isOpen ? 'Inscreva seu Time' : 'Inscrições encerradas' }
                  </Button>
                  { !!date && showUntil && <small className="obs" >Inscrições válidas até dia {dateStr}</small> }
                </div>
              </Col>
            </Row>
          </Container>
    </BlockCTA>
)}

export default Component