import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/sidebar';
import Content from './Components/Content/content';
import Contact from './Components/Content/Contact/contact';
import About from './Components/Content/About/about';
import NotFound from './Components/Content/Not found page/notfound';

function App() {
  return (

    <BrowserRouter>
    <div className="App">

      <Sidebar/>

      <div className='main_container'>

      
        <Routes>
          <Route path='/' element = {<Content />} >
            
          </Route>


          <Route path='/about' element = {<About />}/>
            
          
          <Route path='/contact' element = {<Contact />}/>
          <Route path='*' element = {<NotFound />}/>
        </Routes>

        </div>
      
      
    </div>
  </BrowserRouter>
    

  );
}

export default App;
