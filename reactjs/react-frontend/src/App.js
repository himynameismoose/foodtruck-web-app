import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListFoodTruckComponent from './components/ListFoodTruckComponent';
import AddFoodTruckComponent from './components/AddFoodTruckComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListFoodTruckComponent/>}></Route>
            <Route path="/foodtrucks" element={<ListFoodTruckComponent/>}></Route>
            <Route path="/add-employee" element={<AddFoodTruckComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
      
    </div>
  );
}

export default App;
