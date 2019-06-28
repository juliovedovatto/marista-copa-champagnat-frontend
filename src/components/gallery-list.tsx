import React, { Component, ReactElement } from "react"
import { Row, Col, Image } from "react-bootstrap"
import axios from "axios"
import ReactFancyBox from 'react-fancybox'

import 'react-fancybox/lib/fancybox.css'


interface Props {
  size?: number
}
type State = {
}

export default class GalleryItems extends Component<Props, State> {
  state = {
    items: []
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------

  buildGalleryItem(item: object, i: number): React.ReactNode {
    return (
      <Col key={`gallery-item-${i}`} lg={4} md={6} sm={12} className="gallery-item">
        <div className="gallery-image">
          <ReactFancyBox thumbnail={item.thumb_url || item.url}  image={item.url} />
        </div>
      </Col>
    )
  }

  // /CUSTOM METHODS ------------------------------------------------------------------------------

  async componentDidMount() {
    const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:8080'
    const { data } = await axios.get(`${apiUrl}/api/gallery`)

    if (data.success) {
      this.setState({
        items: data.data || []
      })
    }
  }

  render() {
    const { items } = this.state;

    return (
      <Row className="gallery-items">
          { items.map((item, i) => this.buildGalleryItem(item, i)) }
      </Row>
    )
  }
}
