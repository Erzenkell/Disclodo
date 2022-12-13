import React from 'react';
import "./signup.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import loginBackground from '../../assets/login-background.png';

const Signup = ({setToken}) => {

    const handleSignup = (e) => {
        e.preventDefault();
        fetch('http://localhost:5678/api/auth/register', {
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": e.target[0].value,
                "password": e.target[1].value
              })
        })
             .then(response => response.text())
             .then(data => data !== "Username is taken" ? setToken(data) : null)
             .catch((err) => {
                console.log(err.message);
             });
    }

    return (
        <div className="signup">
        <img className="d-block w-100 custom-img " src={loginBackground} alt="slide 1"/>
        <CardGroup className="signup-card">
        <Card className='signup-card-form'>
            <Card.Body>
                <Card.Title className="signup-card-title">Sign up to Disclodo</Card.Title>
                <Form onSubmit={handleSignup} className="signup-form">
                    <Form.Group className="signup-form-group" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control className='signup-input' type="text" />
                    </Form.Group>
                    <Form.Group className="signup-form-group" controlId="username">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='signup-input' type="password" />
                    </Form.Group>
                    <Form.Group className="signup-form-group">
                        <Button type="submit" className="signup-button">
                            <Link className='signup-button' to={'/login'}>Register</Link>
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>
    )
}

export default Signup;