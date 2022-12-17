import React from "react";
import './navigation.css';
import MenuItem from "./Menu-item/menu_item";


function Navigation() {
    const menu = [
        { text: 'homepage' },
        {
            text: 'pages',
            items: [
                { text: 'Full width content' },
                { text: 'content + left sidebar' },
                { text: 'content + right sidebar' },
                { text: 'content + both sidebars' },
                { text: 'contact' },
                { text: '404' },
                { text: 'testimonials'},
                { text: 'About us' },
                { text: 'Team member' },
                { text: 'FAQ' },
            ]
        },
        {
            text: 'Elements',
            items: [
                { text: 'buttons' },
                { text: 'allert messages' },
                { text: 'font icons' },
                { text: 'call to actions' },
                { text: 'columns' },
                { text: 'columns - no gutter' },
                { text: 'lists' },
                { text: 'accorditons' },
                { text: 'tabs' },
                { text: 'toggles' },
                { text: 'Pricing Tables' },
            ]
        },

        {
            text: 'portfolio layouts',
            items: [
                { text: 'full width portfolio' },
                { text: '2 columns grid' },
                { text: '2 col. grid + left sidebar' },
                { text: '2 col. grid + right sidebar' },
                { text: '2 col. grid + both sidebars' },
                { text: '3 columns grid' },
                { text: '3 col. grid + left sidebar' },
                { text: '3 col. grid + right sidebar' },
                { text: '3 col. grid + both sidebars' },
                { text: '4 columns grid' },
            ]
        },
        {
            text: 'galery layouts',
            items: [
                { text: 'full width galery' },
                { text: '2 columns grid' },
                { text: '2 col. grid + left sidebar' },
                { text: '2 col. grid + right sidebar' },
                { text: '2 col. grid + both sidebars' },
                { text: '3 columns grid' },
                { text: '3 col. grid + left sidebar' },
                { text: '3 col. grid + right sidebar' },
                { text: '3 col. grid + both sidebars' },
                { text: '4 columns grid' },
                { text: '5 columns grid' },
            ]
        },
        {
            text: 'link text',
        },
        {
            text: 'a very long link text',
        },
    ];
    return (
        <header>
            <div className="subheader_container">
                {
                    menu.map(elem => <MenuItem elem={elem} />)
                }
            </div>
        </header>
    );
}

export default Navigation;