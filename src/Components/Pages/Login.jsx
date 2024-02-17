import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

function LOGIN() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSwitchForm = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (username && password) {
      // Implement login logic
      console.log('Logging in...');
      setIsSuccess(true); // Set success state to true
    } else {
      setIsValid(false);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (name && username && email && password && confirmPassword && password === confirmPassword) {
      // Implement registration logic
      console.log('Registering...');
      setIsSuccess(true); // Set success state to true
    } else {
      setIsValid(false);
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
          <Form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit} className="p-4 border rounded bg-white">
            <h2 className="mb-4 text-center">{isLogin ? 'Sign In' : 'Register'}</h2>
            {isValid ? null : <Alert variant="danger" className="mb-3">Please fill in all fields</Alert>}
            {isSuccess && <Alert variant="success" className="mb-3">{isLogin ? 'Login successful!' : 'Registration successful!'}</Alert>}
            {!isLogin && (
              <Form.Group className="mb-3" controlId="register-name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId={isLogin ? 'login-username' : 'register-username'}>
              <Form.Label>{isLogin ? 'Username' : 'Username (optional)'}</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="register-email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId={isLogin ? 'login-password' : 'register-password'}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="register-confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </Form.Group>
            )}
            {!isLogin && (
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="I have read and agree to the terms and conditions" />
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
