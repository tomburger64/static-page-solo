import React from 'react';
import ReactDOM from 'react-dom';

import smallLogo from './../images/logo192.png'

export default function Header(){
    return(
        <header className='header d-flex align-items-center'>
            <img src={smallLogo}></img>
            <span>My solo React project !</span>
        </header>
    )
}