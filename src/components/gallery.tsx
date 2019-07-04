import React, { Component, ReactElement } from "react"

import { Container, Row, Col, Image } from "react-bootstrap"

import GalleryList from './gallery-list'

interface Props {
  id?: string
}
interface State {
  hide: string
}

export default class Gallery extends Component<Props, State> {
  state: Readonly<State> = {
    hide: 'd-none'
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------

  update():Function {
    return (size: number):void => {
      size > 0 && this.setState({ hide: '' })
    }
  }

  // /CUSTOM METHODS ------------------------------------------------------------------------------

  render():ReactElement {
    const id = this.props.id || `component-gallery-` + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))

    return (
      <Container id={id} as="section" fluid className={`gallery-block ${this.state.hide}`}>
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
                  <GalleryList onFinish={this.update()} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}