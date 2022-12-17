import { NavLink } from "react-router-dom";
import './about.css';
import image from './images/image1.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function About() {

    return (

        <div className="about_container">
            <div data-aos="fade-up" className="about">
                <div className="about_image" style={{backgroundImage: `url(${image})`}}></div>
                <div className="about_block">
                    <div className="about_block_title">About me</div>
                    <div className="about_block_suptext">
                        The rich text element allows you to create and format headings, paragraphs, blockquotes,
                        images, and video all in one place instead of having to add and format them individually.
                        Just double-click and easily create content.
                    </div>

                    <div className="about_block_subtitle">Static and dynamic content editing</div>

                    <div className="about_block_subtext">
                        A rich text element can be used with static or dynamic content.
                        For static content, just drop it into any page and begin editing.
                        For dynamic content, add a rich text field to any collection and then
                        connect a rich text element to that field in the settings panel. Voila!
                    </div>

                    <div className="about_block_button">
                        <NavLink to="/contact" className="about_block_btn">Get in touch</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;