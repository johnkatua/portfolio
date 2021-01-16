import SimpleCard from 'components/Card/SimpleCard'
import React from 'react'
import Badge from 'reactstrap/lib/Badge'
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import Col from 'reactstrap/lib/Col'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'

function ThreeCards() {
  return (
    <section className="section section-lg pt-lg-0 mt--100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <SimpleCard 
                  icon='spaceship'
                  color='primary'
                  title='Frontend'
                  description='Look at my Frontend projects here'
                  badges={['React', 'Angular', 'Vue', 'Javascript']}
                />
              </Col>
              <Col lg="4">
                <SimpleCard 
                  icon='ui-04'
                  color='success'
                  title='Backend'
                  description='Look at my Backend projects here'
                  badges={['Nodejs', 'GraphQL', 'Deno', 'C#']}
                />
              </Col>
              <Col lg="4">
                <SimpleCard 
                  icon='palette'
                  color='warning'
                  title='Design'
                  description='Look at my designs here'
                  badges={['Photoshop', 'Figma', 'Sketch', 'XD']}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThreeCards
