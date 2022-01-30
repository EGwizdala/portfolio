import React from 'react';
import { ReactComponent as Visibility } from '../svg/visibility.svg';
import { ReactComponent as GithubPages} from '../svg/github.svg';

interface GalleryItemProps {
    picture: string;
    fileType: string;
    alt: string;
    className: string;
    githublink: string;
    projectLink: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({picture, fileType, alt, className, githublink, projectLink}) => {
    return (
        <div className={className}>
            <div
                className={`${className}__background-image`}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${picture}.${fileType})`
                }} >
            </div>
            <div className = {`${className}__content`}>
                <h4 className = 'content-text'>{alt}</h4>
                <a href={projectLink}>
                    < Visibility />
                </a>
                <a href={githublink}>
                    < GithubPages />
                </a>
            </div>
        </div>     
    )
}

export default GalleryItem;