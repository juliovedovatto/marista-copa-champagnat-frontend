import React, { ReactNode } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"

interface Props {
  id: string,
}

const Component = ({ id }: Props) => (
  <Container id={id} as="section" fluid className="scoreboard-block">
    <Row noGutters className="align-items-center">
      <Col>
        <Container>
          <Row>
            <Col>
              <h2 className="title big-title text-uppercase">Tabela</h2>
              <div className="soccer-ball soccer-ball-shadow"></div>
              <div className="soccer-ball"></div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)


export default Component