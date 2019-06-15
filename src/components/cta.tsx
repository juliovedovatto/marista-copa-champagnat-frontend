import React, { ReactNode } from "react"

import { Container, Row, Col } from "react-bootstrap"

interface Props {
  children: ReactNode
  id: string,
  className: string
}

const Component = ({ children, className, id }: Props) => {
  className = `cta-block ${className || ''}`.trim()

  return (
    <Container id={id} as="section" fluid className={className}>
      <Row noGutters className="align-items-center">
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  )
  }


export default Component