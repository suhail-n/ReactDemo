import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { Navbar, Nav, NavItem, Jumbotron, Button, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {

  render() {
    const popoverLeft = (
      <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Ex nec dicam tibique, eam choro minimum appetere at, no eam labore theophrastus. Ei sit facete saperet patrioque, eos quodsi integre prodesset eu. Vix fastidii mnesarchum ad, vidit perpetua in has. Quis impedit conceptam vis ex, ius eu purto referrentur, vis facer ponderum in. Ex sed scripta forensibus, ad eam dicat commune.
      </Popover>
    );
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
        <Jumbotron>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, possim iracundia ad per, posse paulo sea ad, fastidii facilisi sed id. Sed etiam causae an. Id summo audire epicuri pri. Et pro putant placerat intellegat, dicit noster insolens ei pro. An pro soleat maiorum, modo habeo interesset vim te, nam idque eloquentiam id.
            Sit sonet posidonium te. Qui no sint hinc postulant, vix id integre nostrud forensibus. In nec vitae dolorum molestie, novum molestie ei pri, tritani corrumpit reprimique ad pri. Vis te nulla nostrum antiopam, id mel ferri mundi. Nibh percipitur ne quo, in eos enim etiam vidisse. Id omittam officiis incorrupte vel, dico tota malis eu vis, sit evertitur voluptaria id.

          </p>
          <p>
            <ButtonToolbar style={{display: 'inline-block'}}>
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button bsStyle="primary">Holy guacamole!</Button>
              </OverlayTrigger>
            </ButtonToolbar>
          </p>
        </Jumbotron>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/courses" component={Courses} /> />
              <Redirect from='/all-courses' to='/courses' />
              <Route path='/' exact />
              <Route render={() => <h1>Page Not Found </h1>} />
            </Switch>

      </div>
          );
        }
      }
      
      export default App;
