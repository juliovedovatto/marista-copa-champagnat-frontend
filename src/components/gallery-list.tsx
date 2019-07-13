import React, { Component, ReactElement } from "react"
import { Row, Col, Image } from "react-bootstrap"
import axios from "axios"
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import LazyLoad from 'react-lazyload'

interface Props {
  size?: number
  onFinish?: Function,
}
interface State {
  items: { [key:string]: any }
  triggerFinished: boolean
}

export default class GalleryItems extends Component<Props, State> {
  state = {
    items: [],
    triggerFinished: false
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------

  private _buildGalleryItem(item: object, i: number): ReactElement {
    return (
      <Col key={`gallery-item-${i}`} lg={4} md={6} sm={12} className="gallery-item">
        <div className="gallery-image" data-index={i}>
          <LightgalleryItem group="group" src={item.url}>
            <a href={item.url} onClick={(e) => { e.preventDefault() }}>
              <LazyLoad placeholder={this._buildPlaceHolder()}>
                <Image className="thumbnail" src={item.thumb_url || item.url} />
              </LazyLoad>
            </a>
          </LightgalleryItem>
        </div>
      </Col>
    )
  }

  private _buildPlaceHolder(): ReactElement {
      return (
        <Image className="thumbnail lazyload" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
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

      setTimeout(() => {
        this.setState({ triggerFinished: true })
      }, 300)
    }
  }

  componentDidUpdate() {
    if (this.state.triggerFinished) {
      this.props.onFinish && this.props.onFinish(this.state.items.length)
      this.setState({ triggerFinished: false })
    }
  }

  render() {
    const { items } = this.state;
    const lightboxOptions = {
      mode: 'lg-fade',
      thumbnail: true,
      cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      addClass: 'gallery-modal'
    }

    return (
      <Row className="gallery-items">
        <LightgalleryProvider lightgallerySettings={lightboxOptions} galleryClassName="gallery-component">
          { items.map((item, i) => this._buildGalleryItem(item, i)) }
        </LightgalleryProvider>
      </Row>
    )
  }
}
