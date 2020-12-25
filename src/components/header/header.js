import React, { Component } from 'react';
import { Fragment } from "react"
import { Nav, Button, Navbar, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./header.css"
import Service from "../service"

class Header extends Component {
  service = new Service()

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/features">Features</Link>
            <Link className="link" to="/pricing">Pricing</Link>
          </Nav>
          <Form inline>
            {this.props.user.username ?
              <Fragment><p style={{
                color: "white",
                marginTop: "13px",
                marginRight: "8px"
              }}>{this.props.user.username}</p>
                <Button onClick={() => {
                  this.service.deleteLogin().then(() => {
                    this.props.logout()
                  })
                }} variant="outline-primary">Выход</Button>
              </Fragment>
              :
              <Fragment>
                <Link to={'/Register'}>
                  <Button className='mr-2' variant="outline-primary">Регистрация</Button>
                </Link>
                <Link to={'/SignIn'}>
                  <Button variant="outline-primary">Войти</Button>
                </Link>
              </Fragment>
            }
          </Form>
        </Container>
      </Navbar>
    )
  }
}
export default Header;