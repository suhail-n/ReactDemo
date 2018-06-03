import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { Navbar, Nav, NavItem, Button, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Jumbotron from './containers/UI/Modal/Modal';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Blog</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/courses">
                <NavItem>Courses</NavItem>
              </LinkContainer>
              <LinkContainer to='/users'>
                <NavItem> Users </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/courses" component={Courses} /> />
              <Redirect from='/all-courses' to='/courses' />
              <Route path='/' exact component={Jumbotron}/>
              <Route render={() => <h1>Page Not Found </h1>} />
            </Switch>

      </div>
          );
        }
      }
      
      export default App;
