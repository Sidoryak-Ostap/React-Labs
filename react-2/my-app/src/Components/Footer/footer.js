
import react from 'react';

import './footer.css';


function Footer()
{

    return(

        <div className='footer'>
            <div className='footer_container'>

                <div className='footer_items_holder'>

                    <div className='footer_item'>

                    <div className='footer_item_title'>
                        Footer Navigation
                    </div>

                    <div className='footer_item_links'>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Home Page
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                               Our Services
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Meet the Team
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Blog
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Contact Us
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Gallery
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Portfolio
                            </a>
                        </div>

                        <div className='footer_link_item'>
                            <a className='footer_link'>
                                Online Shop
                            </a>
                        </div>

                    
                    </div>
                    </div>

                    <div className='footer_item'>

                    <div className='footer_item_title'>
                        Latest Gallery
                    </div>

                    <div className='footer_item_imgs'>
                        
                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        <div className='footer_item_img'>
                        </div>

                        
                    </div>

                    </div>

                    <div className='footer_item'>
                        <div className='footer_item_title'>
                            From Twitter
                        </div>

                        <div className='footer_item_text'>

                            <div className='footer_item_text_p'>
                              @ <span className='orange_text'>name</span> RT @<span className='orange_text'>name</span>
                               Donec suscipit vehicula turpis sed lutpat
                                Quisque vitae quam neque.<span className='orange_text'>about 9 hours ago</span> 
                            </div>

                            <div className='footer_item_text_p'>
                              @ <span className='orange_text'>name</span> RT @<span className='orange_text'>name</span>
                               Donec suscipit vehicula turpis sed lutpat
                                Quisque vitae quam neque.<span className='orange_text'>about 9 hours ago</span> 
                            </div>

                            <div className='footer_item_text_p'>
                              @ <span className='orange_text'>name</span> RT @<span className='orange_text'>name</span>
                               Donec suscipit vehicula turpis sed lutpat
                                Quisque vitae quam neque.<span className='orange_text'>about 9 hours ago</span> 
                            </div>

                            <div className='footer_item_text_p'>
                              @ <span className='orange_text'>name</span> RT @<span className='orange_text'>name</span>
                               Donec suscipit vehicula turpis sed lutpat
                                Quisque vitae quam neque.<span className='orange_text'>about 9 hours ago</span> 
                            </div>


                        </div>
                    </div>

                    <div className='footer_item'>


                        <div className='footer_item_title'>
                            Contact Us
                        </div>

                        <div className='footer_item_form'>

                            <div className='footer_item_field'>
                                <div className='footer_item_field_name'>
                                    Name*
                                </div>

                                <div className='footer_item_field_input'>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='footer_item_field'>
                                <div className='footer_item_field_name'>
                                    Email*
                                </div>

                                <div className='footer_item_field_input'>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='footer_item_textarea'>
                                <textarea></textarea>
                            </div>

                            <div className='footer_item_buttons'>
                                <a className='footer_item_button_sumbit footer_button'>submit</a>
                                <a className='footer_item_button_reset footer_button'>reset</a>
                            </div>

                        </div>




                    </div>

                </div>

               

            </div>

            <div className='footer_bottom_info'>
                <div className='footer_container footer_bottom_holder'>
                    <div className='footer_bottom_info_text'>
                        Copyright © 2009 - 2022 - All Rights Reserved - Domain Name
                    </div>

                    <div className='footer_bottom_info_text'>
                        Template by OS Templates
                    </div>
                </div>
            </div>

        </div>

    );


}

export default Footer;