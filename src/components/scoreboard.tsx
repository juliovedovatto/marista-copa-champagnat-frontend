import React, { Component, ReactElement } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import $ from 'jquery'

import ScoreboardList from './scoreboard-list'
import ScoreboardFinals from './scoreboard-finals'

// import ScoreboardListStatic from './scoreboard-list-static'

interface Props {
  id: string,
}
interface State {
  slider: { [key:string]: any }
}

export default class scoreboard extends Component<Props, State> {
  state: Readonly<State> = {
    slider: {}
  }

  // CUSTOM METHODS -------------------------------------------------------------------------------
  
  update():Function {
    return (type: string):void => {
      this.state.slider && this.state.slider.hasOwnProperty(type) && this.state.slider[type].destroy()
      
      const slider = this.initSlider(`.carousel-type-${type}`)
      
      this.setState({ slider: Object.assign({}, this.state.slider, { [type]: slider }) })
    }
  }

  initSlider(element: string):Glide {
    const slider = new Glide(element, {
      startAt: 0,
      keyboard: false,
      rewind: false,
      dragDistance: false
    })

    slider.on('build.after', () => {
      const $slider = $(slider.selector)
      const $track = $slider.find('.glide__track')
      const $slides = $track.find('.glide__slide')

      $slides.length > 1 && $slider.find('.glide__arrows').removeClass('d-none')
    }).on('build.after', () => {
      const $slider = $(slider.selector)
      const $track = $slider.find('.glide__track')
      const height = $track.find('.glide__slide--active').outerHeight(true)
      const trackHeight = $track.outerHeight(true)

      height !== trackHeight && $track.height(height)
    })
    .on('run', () => {
      const $slider = $(slider.selector)
      const $track = $slider.find('.glide__track')
      const height = $track.find('.glide__slide').eq(slider.index).outerHeight(true)
      const trackHeight = $track.outerHeight(true)

      height !== trackHeight && $track.height(height)
    })
    .on('run.after', () => {
      const $slider = $(slider.selector)
      const $track = $slider.find('.glide__track')
      const height = $slider.find('.glide__slide--active').outerHeight(true)
      const trackHeight = $track.outerHeight(true)

      height !== trackHeight && $track.height(height)
    })

    slider.mount({ Controls })

    return slider
  }

  // /CUSTOM METHODS -------------------------------------------------------------------------------

  render():ReactElement {
    return (
      <Container id={this.props.id} as="section" fluid className="scoreboard-block">
        <Row noGutters className="align-items-center">
          <Col>
            <Container className="p-0">
              <Row>
                <Col>
                  <h2 className="title big-title text-uppercase">Tabela</h2>
                  <div className="soccer-ball soccer-ball-shadow"></div>
                  <div className="soccer-ball"></div>

                  <Container className="scoreboard-container overflow-hidden p-0">
                      <div className="scoreboard-type">
                        <div className="scoreboard-carousel">
                          <div className="glide carousel-type-masc">
                            <h2 className="title scoreboard-title text-uppercase text-center mt-5 mb-5">Masculino</h2>

                            <div className="glide__arrows d-none" data-glide-el="controls">
                              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
                              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
                            </div>
                            <div className="glide__track" data-glide-el="track">
                              <ul className="glide__slides">
                                <ScoreboardFinals type="masc" onFinish={this.update()} reverse={true} />
                                <li className="glide__slide">
                                  <ScoreboardList type="masc" title="Fase dos Grupos" onFinish={this.update()} />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="scoreboard-type">
                      <div className="scoreboard-carousel">
                          <div className="glide carousel-type-mix">
                            <h2 className="title scoreboard-title text-uppercase text-center mt-5 mb-5">Misto</h2>

                            <div className="glide__arrows d-none" data-glide-el="controls">
                              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
                              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
                            </div>
                            <div className="glide__track" data-glide-el="track">
                              <ul className="glide__slides">
                                <ScoreboardFinals type="mix" onFinish={this.update()} reverse={true} />
                                <li className="glide__slide">
                                  <ScoreboardList type="mix" title="Fase dos Grupos" onFinish={this.update()} />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    <div className="finals-stage">

                    </div>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}