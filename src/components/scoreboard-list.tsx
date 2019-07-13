import React, { Component, ReactElement } from 'react'
import { Row, Col } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger' 
import Tooltip from 'react-bootstrap/Tooltip'
import axios from 'axios'

interface Props {
  type: string,
  title: string
  onFinish?: Function
}
interface State {
  items: { [key:string]: any },
  triggerFinished: boolean
}
type Object = {
  [key:string]: any
}

export default class ScoreboardList extends Component<Props, State> {
  state: Readonly<State> = {
    items: [],
    triggerFinished: false
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------

  buildTeamItem(item: Object, i: number): ReactElement {
    let points = item.points || 0;

    if (points > 0) {
      points = `+${points}`
    }

    return (
      <div key={`team-${i}`} className="scoreboard-team">
        <h3 className="team-name text-uppercase">{ item.name }</h3>
        <ul className="score-list">
          <li className="score-item text-center">{item.wins || 0}</li>
          <li className="score-item text-center">{item.draws || 0}</li>
          <li className="score-item text-center">{item.defeats || 0}</li>
          <li className="score-item text-center">{points}</li>
        </ul>
      </div>
    )
  }

  buildGroupItem(item: Object, i: number): ReactElement {
    return (
      <Col key={`group-${i}`} lg={5} md={8} xs={12} className="scoreboard">
        <h4 className="scoreboard-group text-uppercase">{ item.group }</h4>
        { this._buildScoreAbbreviationsItem(i) }
        { item.teams.map((item: Object, i: number) => this.buildTeamItem(item, i)) }
      </Col>
    )
  }

  private _buildScoreAbbreviationsItem(i: number): ReactElement {
    return (
      <div className="d-flex justify-itens-end mb-2 score-titles">
          <span className="score-title"></span>
          { 
            this._getScoreAbbreviationLabels().map((item: Object, abbr_idx: number) => (
                <OverlayTrigger key={`${item.abbr}-${i}-${abbr_idx}`} placement="top" overlay={<Tooltip id={`tootip-${item.abbr}-${i}-${abbr_idx}`} className="site-tooltip">{item.title}</Tooltip>}>
                  <span className="flex-fill text-center score-title">{item.abbr}</span>
                </OverlayTrigger>
              )
            )
          }
      </div>
    )
  }

  private _getScoreAbbreviationLabels():Array<Object> {
    return [
      { abbr: 'V', title: 'Vitórias' },
      { abbr: 'E', title: 'Empates' },
      { abbr: 'D', title: 'Derrotas' },
      { abbr: 'P', title: 'Pontos' }
    ]
  }

  // /CUSTOM METHODS ------------------------------------------------------------------------------

  async componentDidMount() {
    const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:8080'
    const { data } = await axios.get(`${apiUrl}/api/scoreboard?type=${this.props.type}`)

    if (data.success) {
      this.setState({
        items: data.data || []
      })
    }

    setTimeout(() => { this.setState({ triggerFinished: true }) }, 300)
  }

  componentDidUpdate() {
    if (this.state.triggerFinished) {
      this.props.onFinish && this.props.onFinish(this.props.type)
      this.setState({ triggerFinished: false })
    }
  }

  render(): ReactElement {
    const { items } = this.state;

    return (
      <Row noGutters className="scoreboard-list d-flex justify-content-center" as="section">
        <Col xs={12} className="text-center">
          <h3 className="title group-type-title mb-5">{this.props.title}</h3>
        </Col>
          { items.map((item: Object, i: number) => this.buildGroupItem(item, i)) }
      </Row>
    )
  }
}
