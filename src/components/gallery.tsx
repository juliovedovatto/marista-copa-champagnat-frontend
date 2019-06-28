import React from "react"

import { Container, Row, Col, Image } from "react-bootstrap"

import GalleryList from './gallery-list'

interface Props {
  id: string
}

const Component = ({ id }: Props) => (
  <Container id={id} as="section" fluid className="gallery-block">
    <Row noGutters className="align-items-center">
      <Col>
        <Container>
          <Row noGutters>
            <Col>
              <h2 className="title big-title text-uppercase text-center">Galeria</h2>
            </Col>
          </Row>
          <Row noGutters>
            <Col className="gallery">
              <GalleryList />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default Component