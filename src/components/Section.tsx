import React from 'react';

interface SectionProps {
    icon: JSX.Element;
    text: string;
}

function Section(props: SectionProps) {
    return (
        <div>
            {props.icon}
            <div>{props.text}</div>
        </div>
    )
}

export default Section;