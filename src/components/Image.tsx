import React from 'react';

interface ImageProps {
    picture: string;
    fileType: string;
    alt: string;
    key: string;
}

function Image(props: ImageProps) {
    return (
        <div>
            <img src={`images/${props.picture}.${props.fileType}`} alt={`${props.alt}`} />
            <div>
                <h4>{props.alt}</h4>
                
            </div>
        </div>
    )
}

export default Image;