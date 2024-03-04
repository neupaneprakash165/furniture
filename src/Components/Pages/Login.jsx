import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function LOGIN({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSwitchForm = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          setUser(data); // Set user information in state
          setIsSuccess(true);
          navigate('/shop'); // Navigate to shop page after successful login
        } else {
          console.error('Login failed:', response.statusText);
          setIsValid(false);
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Login error:', error);
        setIsValid(false);
        setIsSuccess(false);
      }
    } else {
      // Register
      if (name && email && password && password === confirmPassword) {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });

          if (response.ok) {
            console.log('Registration successful');
            setIsSuccess(true);
          } else {
            console.error('Registration failed:', response.statusText);
            setIsValid(false);
            setIsSuccess(false);
          }
        } catch (error) {
          console.error('Error registering:', error);
          setIsValid(false);
          setIsSuccess(false);
        }
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <Container className="p-5 my-5 bg-light rounded">
      <Row className="justify-content-center mb-4">
        <Col md="6">
          <div className="text-center">
            <Button onClick={handleSwitchForm} className="me-3" variant={isLogin ? "primary" : "outline-primary"}>{isLogin ? "Login" : "Register"}</Button>
            <Button onClick={handleSwitchForm} variant={!isLogin ? "primary" : "outline-primary"}>{isLogin ? "Register" : "Login"}</Button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-4">
        <Col md="6" className="text-center">
          <div className="mb-3">Sign in with:</div>
          <FaFacebook className="me-3" size={24} />
          <FaGoogle className="me-3" size={24} />
          <FaGithub size={24} />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md="6">
          <Form onSubmit={handleSubmit} className="p-4 border rounded bg-white">
            <h2 className="mb-4 text-center">{isLogin ? 'Sign In' : 'Register'}</h2>
            {!isValid && <Alert variant="danger" className="mb-3">Please fill in all fields correctly</Alert>}
            
            {!isLogin && (
              <Form.Group className="mb-3" controlId="register-name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="login-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="login-password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="register-confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="mb-3 w-100">{isLogin ? 'Login' : 'Register'}</Button>
            {!isLogin && (
              <p className="mt-3 text-center">Already have an account? <Button variant="link" onClick={handleSwitchForm}>Login here</Button></p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LOGIN;
