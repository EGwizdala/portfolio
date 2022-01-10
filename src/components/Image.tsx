import React from 'react';
import { ReactComponent as Visibility } from '../svg/visibility.svg';
import { ReactComponent as GithubPages} from '../svg/github.svg';

interface ImageProps {
    picture: string;
    fileType: string;
    alt: string;
    key: string;
}

function Image(props: ImageProps) {
    return (
        <div className="gallery--card">
            <div className="gallery--card__background--image" style={{ backgroundImage: `url(/images/${props.picture}.${props.fileType})` }} >
            </div>
            <div className = "gallery--card__content">
                <h4>{props.alt}</h4>
                < Visibility />
                < GithubPages />
            </div>
            
        </div>
            
            
            
    )
}

export default Image;