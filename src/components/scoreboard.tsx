import React, { ReactNode } from "react"

import { Container, Row, Col } from "react-bootstrap"

// import ScoreboardList from './scoreboard-list'
import ScoreboardListStatic from './scoreboard-list-static'

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

              <Container className="scoreboard-container overflow-hidden">
                <h2 className="title scoreboard-title text-uppercase text-center mt-5 mb-5">Fase dos Grupos</h2>
                <ScoreboardListStatic />
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)


export default Component