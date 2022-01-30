import React from 'react';

interface NavSectionProps {
    className: string
};

const NavSection: React.FC<NavSectionProps> = ({ className }) => {
    return (
        <div className={className}>
            <span
                className={`${className}--title`}>
                About :
            </span>
            <a
                className={`${className}--menu`}
                href="#aboutMe">
                Me
            </a>
            <a
                className={`${className}--menu`}
                href="#mySkills">
                My skills
            </a>
            <a
                className={`${className}--menu`}
                href="#myWork">
                My work
            </a>
        </div>
    )
};

export default NavSection