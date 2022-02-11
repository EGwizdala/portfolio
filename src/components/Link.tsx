import React from 'react';
interface LinkProps{
    href: string
    className?: string
}
export const Link: React.FC<LinkProps> = ({href, className, children }) => {
    return <a className={className } href = {href}>{children}</a>
}