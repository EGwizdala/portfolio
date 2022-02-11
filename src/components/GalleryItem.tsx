import  {useState} from 'react';
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

const GalleryItem: React.FC<GalleryItemProps> = ({ picture, fileType, alt, className, githublink, projectLink }) => {
    const [opacity, setOpacity] = useState(0);
    const [opacityGitLink, setOpacityGitLink] = useState(0);

    
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
                    < Visibility
                    onMouseEnter={() => setOpacity(1)}
                    onMouseLeave={() => setOpacity(0)}/>
                    <div
                        style = {{opacity: `${opacity}`}}
                        
                        className='content-icon-text'>go to project</div>
                </a>
                <a href={githublink}>
                    < GithubPages
                    onMouseEnter={() => setOpacityGitLink(1)}
                    onMouseLeave={() => setOpacityGitLink(0)}/>
                    <div
                        style = {{opacity: `${opacityGitLink}`}}
                        className='content-icon-text'>go to github</div>
                </a>
            </div>
        </div>     
    )
}

export default GalleryItem;