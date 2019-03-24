import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Form, FormGroup, Label, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import MyCard from "./card";

const styles = {
    filter: {
      float: 'left',
      width: '20%',
      height: '100vh',
      paddingRight: '20px'
    },
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    }
}

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/getAllData')
            .then(res => {
                console.log(res.data.result);
                const data = res.data.result;
                this.setState({data});
            }) 
    }
    
    render() {
        return (
        <Container>
            <h1>Explore Experiences</h1>
            <Row>
            <Col>
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>What are you interested in?</InputGroupText>
                </InputGroupAddon>
                <Input />
                </InputGroup>
                <br/>
            </Col>
            </Row>
            <div style={styles.filter}>
            Filters
            <br/><br/>
            <Form>
                <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </FormGroup>
                <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </FormGroup>
            </Form>
            </div>
            {this.state.data.map((json, i) => {
                return(
                    <Row key={i}>
                        {json.map((item, index) => {
                        return (
                            <MyCard key={index}
                                image={item.photo}
                                title={item.name} 
                                subtitle={item.location}
                                text={item.description}
                            />
                            )
                        })}
                    </Row>
                )
            })}
        </Container>
        );
    }
};

export default Explore;
