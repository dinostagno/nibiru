import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import Inicio from './Inicio';
import Classic from './Classic';
import Djent from './components/Djent';
import Live from './components/Live';
import Random from './components/Random';
import YoutubeApi from './YoutubeApi'
import Jazz from './components/Jazz';
import PinkFloyd from './components/PinkFloyd';
import FavoriteMetal from './components/FavoriteMetal';
import Guitarrist from './components/Guitarrist';
import CodeBlock from './components/CodeBlock';
import Ai from './components/Ai';
import TopBanner from './components/TopBanner';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';
import FavoriteSingers from './components/FavoriteSingers';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TopBanner />
          <NavigationBar />
          <BottomBanner />
            <Routes>
              {/* <Route path="/nibiru/Inicio" element={<Inicio />} /> */}
              <Route path="/nibiru/Guitarrist" element={<Guitarrist />} />
              <Route path="/nibiru/Classic" element={<Classic />} />
              <Route path="/nibiru/Djent" element={<Djent />} />
              <Route path="/nibiru/Live" element={<Live />} />
              <Route path="/nibiru/Random" element={<Random />} />
              <Route path="/nibiru/YoutubeApi" element={<YoutubeApi />} />
              <Route path="/nibiru/Jazz" element={<Jazz />} />
              <Route path="/nibiru/PinkFloyd" element={<PinkFloyd />} />
              <Route path="/nibiru/FavoriteMetal" element={<FavoriteMetal />} />
              <Route path="/nibiru/CodeBlock" element={<CodeBlock />} />
              <Route path="/nibiru/Ai" element={<Ai />} />
              <Route path="/nibiru/FavoriteSingers" element={<FavoriteSingers />} />
            </Routes>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


