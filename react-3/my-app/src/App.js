import logo from './logo.svg';
import './App.css';
import WeatherWidget from './Components/WeatherWidget';
import { useState } from 'react';

import {SnackbarProvider} from 'react-snackbar-messages';

import InputCityElems from './Components/InputCityElems';


function App() {


  const [InputCity, SetInputCity] = useState('London');

 
  return (
    <SnackbarProvider>

    <div className="App">

      <div className='container'>
        <InputCityElems SetInputCity = {SetInputCity}/>
        <WeatherWidget city={InputCity}/>
      </div>
      
    </div>

    </SnackbarProvider>

  );
}

export default App;
