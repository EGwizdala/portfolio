import { getAllByDisplayValue } from '@testing-library/dom'
import React from 'react'

interface NavSectionProps {
    className: string
}

function NavSection(props: NavSectionProps) {
    const menu__button = "menu__button"
    return (
        <div className={`${props.className} menu`}>
            <span>
                About : 
            </span>
            {/* how about links to anchors */}
            <button type="button" className={menu__button}>Me</button> 
            <button type="button" className={menu__button}>My skills</button>
            <button type="button" className={menu__button}>My work</button> 
        </div>
    )
}

export default NavSection