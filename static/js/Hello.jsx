import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";

const language = 'en-us'
const text = 'something to say'
const url = `${origin}/${language}/${text}`

var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: 'Hello ' + this.props.name};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting + ' ' + this.props.name + '!'});
    }

    getPythonHello() {
        $.get(url, () => {
            console.log();
        });
    }

    render () {
        return (
            <Grid>
                <Row>
                <Col md={7} mdOffset={5}>
                    <h1>{this.state.greeting}</h1>
                    <hr/>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Enter the text: </span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </input>
              </div>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                    <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
                    Send !
                    </Button>
                </Col>
                </Row>
            </Grid>
        );
    }
}

  

  