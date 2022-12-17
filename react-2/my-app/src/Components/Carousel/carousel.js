import React from 'react';
import './carousel.css';

import Carousel from 'react-material-ui-carousel';



function MyCarousel(){


    
const colors = ['read', 'green', 'blue', 'yellow', 'grey', 'orange', 'black', 'purple', 'pink'];
    
    return(
        <div className = "carousel_wrapper">
            <Carousel height={'400px'}>
                {
                colors.map(color => <div
                    style={{backgroundColor: color}}
                     className='carousel_item'></div>)
                }
            </Carousel>
        </div>
    );
}


export default MyCarousel;