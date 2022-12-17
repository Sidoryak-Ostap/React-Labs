
import './sidebar.css';

import SocialNetworks from './SocialNetworks/social';
import { NavLink } from 'react-router-dom';


function Sidebar()
{
    return(
        <div className ="sidebar">
            <div className = "sidebar_title">
            <NavLink className="sidebar_title_link" to="/">Milton</NavLink> 
            </div>
            <div className="sidebar_text">
                Denali is a simple responsive blog template. Easily add new posts using the
                Editor or change layout and design using the Designer.
            </div>

            <div className = "sidebar_items">

                    <div className ="sidebar_item">
                        <NavLink to="/" className = "sidebar_link" >Home</NavLink>
                    </div>
                    <div className ="sidebar_item">
                        <NavLink to="/about" className = "sidebar_link" >About</NavLink>
                    </div>
                    <div className ="sidebar_item">
                        <NavLink to="/contact" className = "sidebar_link" >Contact</NavLink>
                    </div>
            </div>

            <SocialNetworks/>

        </div>
    );
}

export default Sidebar;