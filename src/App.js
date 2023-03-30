import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Inicio from './Inicio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <div className="container">
            <Routes>
              <Route path="/nibiru/Inicio" element={<Inicio />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


