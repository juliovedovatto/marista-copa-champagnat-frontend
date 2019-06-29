import React, { Component, ReactElement } from "react"
import { Row, Col, Image } from "react-bootstrap"
import axios from "axios"

interface Props {
}

const ScoreboardListStatic = ({}: Props) => (
  <Row className="scoreboard-list d-flex justify-content-center">
    <Col xs={12} className="text-center">
      <h3 className="title group-type-title mb-5">Masculino</h3>
    </Col>
    <Col lg={5} md={8} xs={12} className="scoreboard">
      <h4 className="scoreboard-group text-uppercase">Grupo A</h4>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Tecpuc</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Les Mitages</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Real Marcelino</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">FC Barcelino</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
    </Col>
    <Col lg={5} md={8} xs={12} className="scoreboard">
      <h4 className="scoreboard-group text-uppercase">Grupo B</h4>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Escola Escológica</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Amigo Marista DEAS</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Saúde F.C.</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Supply Team</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
    </Col>
    <Col lg={5} md={8} xs={12} className="scoreboard">
      <h4 className="scoreboard-group text-uppercase">Grupo C</h4>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">DDHO F.C.</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Dinamaquina</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Liverpuc F.C.</h3> 
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">FTD Educação</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
    </Col>
    <Col xs={12} className="text-center">
      <h3 className="title group-type-title mb-5">Misto</h3>
    </Col>
    <Col lg={5} md={8} xs={12} className="scoreboard">
      <h4 className="scoreboard-group text-uppercase">Grupo A</h4>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Vírus da Saúde </h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">TPM</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">kkkknelas</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Peppas e Penélopes</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
    </Col>
    <Col lg={5} md={8} xs={12} className="scoreboard">
      <h4 className="scoreboard-group text-uppercase">Grupo B</h4>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Escola Escológica</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">PUCA's Soccer Club</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Todo mundo sonha - DEAS</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
      <div className="scoreboard-team d-flex align-items-center">
        <h3 className="team-name text-uppercase">Fridas FC</h3>
        <ul className="score-list">
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
          <li className="score-item text-center">0</li>
        </ul>
      </div>
    </Col>
  </Row>
)

export default ScoreboardListStatic