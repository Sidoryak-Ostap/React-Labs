
import './card.css';


function Card(props)
{


    return(

    <div className='card'>
        <div className='card_img'>
            
        </div>

        <div className='card_info'>

            <div className='card_info_title'>
                {props.title}
            </div>

            <div className='card_info_text'>
                {props.text}
            </div>

            <div className='card_info_subtext'>
                {props.subtext}
            </div>

            <div className='card_info_button'>
                <a className='card_btn'>
                    {props.button_text}
                </a>
            </div>


        </div>
    </div>

    );
}

export default Card;