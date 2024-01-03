import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class GradientNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: null,
    };
  }

  handleNavClick = (section) => {
    this.setState({ selectedSection: section });
  };

  render() {
    return (
      <Navbar style={{background: 'linear-gradient(to right, #6aa3b4, white)'}} variant="dark" expand="lg">
        <div class="container">
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Tus enlaces de navegación aquí */}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default GradientNavigationBar;
