import React from 'react';
import { ReactComponent as SVGHeart } from '../svg/heart.svg'
import Canvas from '../components/Canvas'


function Header() {
    
    return (
        <header>
            {<Canvas />}
        </header>
    )
}

export default Header



//class A e C{
//inputRef = null;
//render(
//return (
//  <input ref={inputRef} />/
//)
//)
//}