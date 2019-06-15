import React from "react"

import { Container, Row, Col } from "react-bootstrap"

interface Props {
  id: string
}

const Component = ({ id }: Props) => (
  <Container id={id} as="section" fluid className="gallery-block">
    <Row noGutters className="align-items-center">
      <Col>
        <Container>
          <Row>
            <Col>
              <h2 className="title big-title text-uppercase text-center">Galeria</h2>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default Component