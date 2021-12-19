import React from 'react';
import {ReactComponent as SVGHeart} from '../svg/heart.svg'


function Header() {

    return (
        <header>
            <canvas id="myCanvas" width={200} height={100}></canvas>
            <h1>Hello World !</h1>
            <h2>I'm Emilia and I <SVGHeart /> to code</h2>
        </header>
    )
}

export default Header