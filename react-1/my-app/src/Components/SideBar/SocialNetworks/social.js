
import './social.css'
import instagram from './images/instagram.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';
import email from './images/email.svg';


function SocialNetworks()
{


    return(
        <div className = "social_networks">

            <div className ="icons">
                <a href = "#" >
                    <img className = "networks" src = {facebook}/>
                </a>
                <a href = "#" >
                    <img className = "networks" src = {instagram}/>
                </a>
                <a href = "#" >
                    <img className = "networks" src = {twitter}/>
                </a>
                <a href = "#" >
                    <img className = "networks" src = {linkedin}/>
                </a>
                <a href = "#" >
                    <img className = "networks" src = {email}/>
                </a>
            </div>
            <div className ="networks_sub_text">BUILT WITH WEBFLOW</div>
        </div>
    );
}


export default SocialNetworks;