

import React from "react";

import './card.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const getComponentHeader = (text) => {
    return (
        <div className="card-header">{text}</div>
    );
}

const getComponentText = (text) => {
    return (
        <div className="card-text">{text}</div>
    );
}

const getComponentList = (elems) => {

    return(
        <div className="card_list">
            {
                elems.map(el =>{
                    return <li>{el}</li>
                })   
            }
        </div>    
    );

}

const getComponentSubBlock = (text) => {
    return (
        <div className="card-sub-block">{text}</div>
    );
}




function Card(props) {

    

    return (
        <div className="card">

            <div   className="card-id">{props.id}</div>
            <div onClick={props.setSelectedCard} className="card_image" style={{ backgroundImage: `url(${props.image})` }}></div>

            <div className="card_block">
                <div onClick={props.setSelectedCard} className="card_block_title" >
                    {props.title}
                </div>

                <div className="card_block_text">
                    {props.description}
                </div>

                <div className="info">
                    <div className="card_date">{props.date}</div>
                    <div onClick={() => props.selectedTag(props.tag)} className="card_tag">{props.tag}</div>
                </div>

                <article className={props.isArticleVisible ? 'article_animation' : 'hide'}>
                    {
                        props.fullPage.map(el => {
                            switch (el.type) {
                                case 'header-1':
                                    {
                                        return getComponentHeader(el.text);
                                    }
                                case 'text-1':
                                    {
                                        return getComponentText(el.text);
                                    }
                                case 'list-1':
                                    {
                                        return getComponentList(el.elems);
                                    }
                                case 'text-2':
                                    {
                                        return getComponentText(el.text);
                                    }
                                case 'header-2':
                                    {
                                        return getComponentHeader(el.text);
                                    }
                                case 'text-3':
                                    {
                                        return getComponentText(el.text);
                                    }
                                case 'sub-block':
                                    {
                                        return getComponentSubBlock(el.text);
                                    }
                                case 'text-4':
                                    {
                                        return getComponentText(el.text);
                                    }
                                case 'header-4':
                                    {
                                        return getComponentHeader(el.text);
                                    }
                                case 'text-5':
                                    {
                                        return getComponentText(el.text);
                                    }

                                default: { }
                            }
                        })
                    }

                </article>

            </div>



        </div>
    );
}

export default Card;