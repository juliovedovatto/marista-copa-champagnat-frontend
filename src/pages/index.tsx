import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"


import Layout from "../components/layout"
import SEO from "../components/seo"

import BlockRegister from '../components/register-team'
import BlockScoreboard from '../components/scoreboard'
import BlockTournamentRules from '../components/tournament-rules'
import BlockGallery from '../components/gallery'


const IndexPage = () => (
  <Layout>
    <SEO title="Copa Champagnat - Província Marista Brasil Centro-Sul" />
    
    <BlockRegister until="2019-06-26 18:00" showUntil={false} />
    <BlockScoreboard id="scoreboard" />
    <BlockTournamentRules />
    <BlockGallery id="gallery" />

  </Layout>
)

export default IndexPage
