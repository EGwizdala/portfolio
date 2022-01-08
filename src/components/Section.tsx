import React from 'react';

interface SectionProps {
    icon: React.ReactNode;
    text: string;
    classNameIcon: string;
}

function Section(props: SectionProps) {
    return (
        <>
            <div className = {props.classNameIcon}>{props.icon}</div>
            <p>{props.text}</p>
        </>
    )
}

export default Section;


//const Section: React.FC<SectionProps> = () => {...}

/// icon zamiast JSX.element == ReactNode