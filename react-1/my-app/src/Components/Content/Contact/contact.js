

import './contact.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function Contact() {

    return (

        
            <div data-aos="fade-up" className="contact">
                <div className='contact_title'>Get in Touch</div>

                <div className='contact_text'>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </div>

                <div className='contact_text'>
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </div>

                <form className='contact_form'>

                    <div className='contact_item'>
                        <div className='input_suptitle'>Name</div>
                        <input placeholder='Enter your name' className='input_name input_field' />
                    </div>

                    <div className='contact_item'>
                        <div className='input_suptitle'>Email Address</div>
                        <input placeholder='Enter your email' className='input_email input_field' />
                    </div>

                    <div className='contact_item'>
                        <div className='input_suptitle'>Message</div>
                        <textarea placeholder='Enter your message' className='input_message input_field' />
                    </div>

                    <div className='contact_button'>
                        <a href='#' className='contact_btn'>Submit</a>
                    </div>

                </form>
            </div >
            
            );

}

export default Contact;