import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

type Props = {}
type State = { showModal: boolean }

import BlockCTA from '../components/cta'
import BlockModalRules from './modal-tournamente-rules'

class Component extends React.Component<Props, State> {
  state = { showModal: false }
  

  showTournamentRules = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    this.setState({ showModal: !this.state.showModal })
      
    return false
  }
  hideTournamentRules = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <BlockCTA id="tournament-rules" className="tournament-rules-block">
        <Container>
            <Row noGutters className="align-content-center">
              <Col className="text-center">
                <div className="cta-text text-uppercase">
                  <h3 className="title">Pode isso, Arnaldo? Confira o Regulamento</h3>
                </div>
                <div className="cta-button">
                  <Button variant="primary" href="#tournament-rules" formTarget="_blank" onClick={this.showTournamentRules}>
                      Regulamento da Copa
                  </Button>
                </div>

                <div className="soccer-whistle soccer-whistle-shadow"></div>
                <div className="soccer-whistle"></div>
                <div className="soccer-cards"></div>
                <BlockModalRules showModal={this.state.showModal} handleClose={this.hideTournamentRules} />
              </Col>
            </Row>
        </Container>
      </BlockCTA>
    )
  }
}

export default Component