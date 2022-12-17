import React from "react";
import './cards.css';
import cardDate from '../mock/card_data.json';
import Card from "./Card/card";


function Cards() {

    const cards = cardDate;

    return (

        <div className="cards">
            <div className="cards_container">
                {


                    cards.map(card => {
                        return (
                            <Card
                                img={card.img}
                                title={card.title}
                                text={card.text}
                                subtext={card.subtext}
                                button_text = {card.button_text}
                            />)
                        })

                }

            </div>

        </div>
    );
}

export default Cards;