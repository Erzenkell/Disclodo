import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import loginBackground from '../../assets/login-background.png';
import QRcode from '../../assets/tmp-qr-code.png';

const Login = ({setToken}) => {
    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:5678/api/auth/login', {
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
             .then(data => data !== "User not found" ? setToken(data) : null)
             .then(() => window.location.href = "/")
             .catch((err) => {
                console.log(err.message);
             });
    }

    return (
        <div className="login">
        <img className="d-block w-100 custom-img " src={loginBackground} alt="slide 1"/>
        <CardGroup className="login-card">
        <Card className='login-card-form'>
            <Card.Body>
                <Card.Title className="login-card-title">Welcome back</Card.Title>
                <Card.Subtitle className="login-card-subtitle">We're so excited to see you again!</Card.Subtitle>
                <Form onSubmit={handleLogin} className="login-form">
                    <Form.Group className="login-form-group" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control className='login-input' type="text" />
                    </Form.Group>
                    <Form.Group className="login-form-group" controlId="username">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='login-input' type="password" />
                        <Form.Text className="text-muted">
                            <Card.Link className="link" href="http://nootnoot.net">forgot password?</Card.Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="login-form-group">
                        <Button type="submit" className="login-button" >
                            <Link className='signup-button'>Login</Link>
                        </Button>
                        <Form.Text>
                            Need an account? <Card.Link className="link" href="/signup">Register</Card.Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        <span className="divider"/>
        <Card className="qrcode-card">
            <Card.Img className="qr-code" variant="top" src={QRcode} />
            <Card.Body>
                <Card.Title className="login-card-title">Log in with QR Code</Card.Title>
                <Card.Subtitle className="login-card-subtitle">Scan this to log in instantly</Card.Subtitle>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>
    )
}

export default Login;