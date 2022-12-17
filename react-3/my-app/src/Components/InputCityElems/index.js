
import React from "react";

import './style.css';

function InputCityElems(props)
{

    const GetValue = () =>{
        props.SetInputCity(document.querySelector('.input_city').value); 
        document.querySelector('.input_city').value = '';
      }

    return(
        <div className="InputElems">

        <input placeholder="Enter city name" className='input_city'/>
        <button className="search_button" onClick={GetValue}>Search</button>

        </div>
    );
}

export default InputCityElems;