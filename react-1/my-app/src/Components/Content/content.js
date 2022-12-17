import React, { useEffect, useState } from "react";
import './content.css';
import Card from './Card/card';
import mockDate from './mock/data.json';
import arrow from './images/right-arrow.png';





function Content() {

const cards = mockDate;

    const [tag, setTag] = useState();

    const [selectedCard, setSelectedCard] = useState();

   
    
   
    return (


        <div className="content_container">

            <div className="selected_tag" style={{ display: tag ? 'block' : 'none' }}>  
                {tag}
            </div>


            {cards
                .filter(card => {
                    if (tag) {
                        return card.tag===tag; 
                    }

                    if (selectedCard) {
                        return card.id === selectedCard.id
                    }

                    return true;
                })
                .map(card => {
                    return (
                        
                            <Card 
                                image={card.image}
                                id={card.id}
                                title={card.title}
                                isArticleVisible={selectedCard && card.id === selectedCard.id}
                                description={card.description}
                                date={card.date}
                                tag={card.tag}
                                fullPage={card.fullPage}
                                selectedTag={setTag}
                                setSelectedCard={() => setSelectedCard(card)}
                            />
                        
                    );
                })}

            
                <div onClick={() => { setTag(); setSelectedCard() }} className="content_button">
                    <img style={{ display: tag || selectedCard ? 'block' : 'none', transform: 'rotate(180deg)' }} className=" button_arrow_left" src={arrow} />
                    <a className="all_posts_btn" >All posts</a>
                    <img style={{ display: tag || selectedCard ? 'none' : 'block' }} className="button_arrow" src={arrow} />
                </div>
           


        </div>



    );
}

export default Content;