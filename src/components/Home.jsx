import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <h1>WELCOME</h1>
                </Container>
            </div>
        );
    }
}
export default Home;