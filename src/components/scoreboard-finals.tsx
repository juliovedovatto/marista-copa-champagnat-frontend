import React, { Component, ReactElement, Fragment } from "react"
import { Row, Col, Carousel, CarouselItem } from "react-bootstrap"
import axios from 'axios'

interface Props {
  type: string,
  onFinish?: Function,
  reverse?: boolean
}
type State = {}

export default class ScoreboardFinals extends Component<Props, State> {
  state = {
    items: [],
    triggerFinished: false
  }

  buildListItem(item: object, index: number): ReactElement {
    return (
      <Fragment key={`finals-${index}-teams`}>
        <Col md={5}  xs={12} className="scoreboard-versus text-center d-flex justify-content-center align-items-end">
            <h3 className={`team-name` + (!item.team[1].trim().length ? ' team-winner' : '' )}>{item.team[0]}</h3>
          { item.team[1].trim().length ?
            (<Fragment>
              <span className="versus">X</span>
              <h3 className="team-name">{item.team[1]}</h3>
            </Fragment>) : ''
          }
        </Col>
      </Fragment>
    )
  }

  buildList(item: object, index: number): ReactElement {
    return (
      <li key={`finals-${index+1}`} className="glide__slide">
        <Row noGutters className="justify-content-center scoreboard-round" as="section">
          <Col xs={12} className="text-center">
              <h3 className="title group-type-title mb-5">{item.name}</h3>
          </Col>
          { item.group && item.group.map((item, i) => this.buildListItem(item, i)) }
        </Row>
      </li>
    )
  }


  async componentDidMount() {
    const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:8080'
    const { data } = await axios.get(`${apiUrl}/api/round?type=${this.props.type}`)

    if (data.success) {
      this.setState({
        items: data.data || []
      })

      setTimeout(() => {
        this.setState({ triggerFinished: true })
      }, 300)
    }
  }

  componentDidUpdate() {
    if (this.state.triggerFinished) {
      this.props.onFinish && this.props.onFinish(this.props.type)
      this.setState({ triggerFinished: false })
    }
  }

  render():ReactElement {
    const items = Array.from(this.state.items || []);

    if (this.props.reverse)
      items.reverse()

    return (
      <Fragment>
        { items.map((item, i) => this.buildList(item, i)) }
      </Fragment>
    )
  }
}