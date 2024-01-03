import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import Inicio from './Inicio';
import Classic from './Classic';
import Djent from './Djen';
import Live from './Live';
import Random from './Random';
import YoutubeApi from './YoutubeApi'
import Tu from './Tu'
import Jazz from './components/Jazz';
import PinkFloyd from './components/PinkFloyd';
import FavoriteMetal from './components/FavoriteMetal';
import GradientNavigationBar from './components/GradientNavigationBar';
import Guitarrist from './components/Guitarrist';
import CodeBlock from './components/CodeBlock';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <GradientNavigationBar />
            <Routes>
              {/* <Route path="/nibiru/Inicio" element={<Inicio />} /> */}
              <Route path="/nibiru/Guitarrist" element={<Guitarrist />} />
              <Route path="/nibiru/Tu" element={<Tu />} />
              <Route path="/nibiru/Classic" element={<Classic />} />
              <Route path="/nibiru/Djent" element={<Djent />} />
              <Route path="/nibiru/Live" element={<Live />} />
              <Route path="/nibiru/Random" element={<Random />} />
              <Route path="/nibiru/YoutubeApi" element={<YoutubeApi />} />
              <Route path="/nibiru/Jazz" element={<Jazz />} />
              <Route path="/nibiru/PinkFloyd" element={<PinkFloyd />} />
              <Route path="/nibiru/FavoriteMetal" element={<FavoriteMetal />} />
              <Route path="/nibiru/CodeBlock" element={<CodeBlock />} />
            </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


