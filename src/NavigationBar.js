import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import SAOIcon from './Assets/7000cc86-7b2e-4722-a5a8-d48e050f5442.svg';

class NavigationBar extends React.Component {
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
      // <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar expand="lg">
        <div class="container">
        <Navbar.Brand href="#">
          <img
            src={SAOIcon}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo de SAO"
          /> 私のお気に入りの曲
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/nibiru/YoutubeApi">YoutubeApi</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Guitarrist">Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteSingers">FavoriteSingers</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteMetal">
              Neoclassical Metal
            </Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guthrie">
              Guthrie
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Ai">
              愛
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/nibiru/Classic">Classic</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Djent">Djent</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Random">Random</Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Tu">...</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Jazz">
              Jazz
            </Nav.Link>
            <Nav.Link as={Link} to="/nibiru/PinkFloyd">
              PinkFloyd
            </Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Live">Live</Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/CodeBlock">
              CodeBlock
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
