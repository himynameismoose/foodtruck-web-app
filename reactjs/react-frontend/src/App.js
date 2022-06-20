import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListFoodTruckComponent from './components/ListFoodTruckComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListFoodTruckComponent/>}></Route>
            <Route path="/foodtrucks" element={<ListFoodTruckComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
      
    </div>
  );
}

export default App;
