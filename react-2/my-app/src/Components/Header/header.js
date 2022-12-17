import react from 'react';
import './header.css';
import mail from './images/mail.png';
import phone from  './images/phone.png';

function Header()
{
    return(

        <div className='header'>

            <div className='header_container'>
                <div className='header_holder'>

                    <div className='header_logo'>

                        <div className='header_logo_suptext'>
                        RS-1200 Prototype 35
                        </div>

                        <div className='header_logo_subtext'>
                        Free Responsive Template
                        </div>

                    </div>

                    <div className='header_info'>
                        <div className='header_info_block'>
                            <img  src={mail}/>
                            <div className='info_block_text'>info@domain.com</div>
                        </div>

                        <span>|</span>

                        <div className='header_info_block'>
                            <img  src={phone}/>
                            <div className='info_block_text'> +xx xxx xxxxxxxxxx</div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
}

export default Header;