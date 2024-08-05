import React from 'react';
import { Link } from 'react-router-dom';

const style = "border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; height: 47px; height: 55px;"

const Otro = ()=><h1>Otro.</h1>

export function MenusHeader() {
    
    const Menus = [
        {
            // as: <Link />, 
            // to: '/otro',
            key: "0", 
            label: <Link to="/home" >HOME</Link> ,
            Style: style,
            path: '/home',
            // onClick: _=> <Otro />,
        },
        {
            key: "1", 
            label: <Link to="/proyects" >PROYECTS</Link> ,
            Style: style,
            path: '/proyects',
        },
        {
            key: "2", 
            label: <Link to="/HOBBITS" >HOBBITS</Link> ,
            Style: style,
            path: '/hobbits',
        },
        {
            key: "3", 
            label: 'CONTACT',
            Style: style,
            path: '/contact',
            onClick: () => {
                const section = document.getElementById("id-ancla");
                section.scrollIntoView({ behavior: "smooth" });
            }
        },
    ]
    
    return Menus;
}