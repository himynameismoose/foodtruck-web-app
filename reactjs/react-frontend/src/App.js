import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListFoodTruckComponent from './components/ListFoodTruckComponent';

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
