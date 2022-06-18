import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListFoodTruckComponent from './components/ListFoodTruckComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
        <ListFoodTruckComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;
