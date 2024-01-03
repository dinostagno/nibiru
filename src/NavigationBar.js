import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from './logo'
import Jazz from './components/Jazz';
import SAOIcon from './Assets/_7000cc86-7b2e-4722-a5a8-d48e050f5442.jpg';
{/* <Logo /> */}

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
      <Navbar bg="dark" variant="dark" expand="lg">
        <div class="container">
        {/* <Navbar.Brand href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
        <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
        </svg> 私のお気に入りの曲
        </Navbar.Brand> */}
        <Navbar.Brand href="#">
          <img
            src={SAOIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo de SAO"
          />
          私のお気に入りの曲
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/nibiru/YoutubeApi">YoutubeApi</Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Inicio">Guitarrist</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Guitarrist">Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteMetal">
              FavoriteMetal
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Classic">Classic</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Djent">Djent</Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Live">Live</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Random">Random</Nav.Link>
            {/* <Nav.Link as={Link} to="/nibiru/Tu">...</Nav.Link> */}
            <Nav.Link as={Link} to="/nibiru/Jazz">
              Jazz
            </Nav.Link>
            <Nav.Link as={Link} to="/nibiru/PinkFloyd">
              PinkFloyd
            </Nav.Link>
            <Nav.Link as={Link} to="/nibiru/CodeBlock">
              PinkFloyd
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
