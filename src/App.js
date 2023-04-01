import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Inicio from './Inicio';
import Classic from './Classic';
import Djent from './Djen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
            <Routes>
              <Route path="/nibiru/Inicio" element={<Inicio />} />
              <Route path="/nibiru/Classic" element={<Classic />} />
              <Route path="/nibiru/Djent" element={<Djent />} />
            </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


