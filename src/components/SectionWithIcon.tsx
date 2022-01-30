import React from 'react';

interface SectionWithIconProps {
    icon: React.ReactNode;
    text: string;
    classNameIcon: string;
}

const SectionWithIcon: React.FC<SectionWithIconProps> = ({icon, text, classNameIcon}) => {
    return (
        <>
            <div className = {classNameIcon}>{icon}</div>
            <p className = {`${classNameIcon}__text`}>{text}</p>
        </>
    )
}

export default SectionWithIcon;
