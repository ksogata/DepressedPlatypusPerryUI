import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const styles = {
  banner: {
    background: "url('spring-4072393_1920.jpg')"
  },
  about: {
    fontSize: '14pt'
  },
  about1: {
    background: 'lightgoldenrodyellow',
    padding: '20px 20px 0 20px',
    marginBottom: '30px',
    border: '1px solid rgba(0, 0, 0, 0.125)',
    borderRadius: '0.25rem'
  },
  about2: {
    background: '#dae3ef',
    padding: '20px 20px 0 20px',
    marginBottom: '30px',
    marginTop: '-65px',
    border: '1px solid rgba(0, 0, 0, 0.125)',
    borderRadius: '0.25rem'
  }
}

const About = () => {
    return (
      <div>
        <h1 style={styles.banner}>About</h1>
        <Container>
          <Row>
            <Col md={7} style={styles.about1}>
              <p style={styles.about}>Having positive social interactions is important for our health and well-being.</p>
              <p style={styles.about}>Social isolation, on the other hand, is associated with many negative health outcomes, and some studies have suggested that the impact of isolation and loneliness is just as high as risk factors such as high blood pressure, obesity, and smoking.</p><br/>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 7, offset: 3 }} style={styles.about2}>
              <p style={styles.about}>Journey is designed to help connect people who share similar interests, with a focus on mental health and providing that human connection with others who may have experienced similar situations.</p>
              <p style={styles.about}>We hope that through encouraging people to go out and do activities with other like-minded individuals, this will help increase meaningful social interactions and have a positive influence on people who may be struggling with isolation and loneliness.</p><br/>
            </Col>
          </Row>
        </Container>
      </div>
    )
};

export default About;
