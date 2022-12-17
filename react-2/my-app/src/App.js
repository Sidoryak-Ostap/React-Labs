import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Cards from './Components/Cards/cards';
import BigCard from './Components/BigCards/bigcard';
import Navigation from './Components/Header/Navigation/navigation';
import Carousel from './Components/Carousel/carousel';

function App() {
  return (
    <div className="App">


    <Header/>
    <Navigation/>
    <Carousel/>
    <Cards/>
    <BigCard/>
    <Footer/> 
    
      
      
    </div>
  );
}

export default App;
