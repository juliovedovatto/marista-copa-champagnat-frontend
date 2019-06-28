import React, { Component, ReactElement } from "react"
import { Row, Col, Image } from "react-bootstrap"
import axios from "axios"

interface Props {
}
type State = {
}

export default class ScoreboardList extends Component<Props, State> {
  state = {
    items: []
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------

  buildTeamItem(item: object, i: number): React.ReactNode {
    return (
      <div key={`team-${i}`} className="scoreboard-team">
        <h3 className="team-name text-uppercase">{ item.name }</h3>
        <ul className="score-list">
          <li className="score-item text-center">{item.wins}</li>
          <li className="score-item text-center">{item.draws}</li>
          <li className="score-item text-center">{item.defeats}</li>
          <li className="score-item text-center">{item.points}</li>
        </ul>
      </div>
    )
  }

  buildGroupItem(item: object, i: number): React.ReactNode {
    return (
      <Col key={`group-${i}`} lg={{ span: 4, offset: 2 }} md={{ span: 5, offset: 1 }} xs={12} className="scoreboard">
        <h4 className="scoreboard-group text-uppercase">{ item.group }</h4>
        { item.teams.map((item, i) => this.buildTeamItem(item, i)) }
      </Col>
    )
  }

  // /CUSTOM METHODS ------------------------------------------------------------------------------

  async componentDidMount() {
    const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:8080'
    const { data } = await axios.get(`${apiUrl}/api/scoreboard`)

    if (data.success) {
      this.setState({
        items: data.data || []
      })
    }
  }

  render() {
    const { items } = this.state;

    return (
      <Row className="scoreboard-list">
          { items.map((item, i) => this.buildGroupItem(item, i)) }
      </Row>
    )
  }
}
