import GalleryItem from '../../components/GalleryItem';
import images from '../../data/images.json';

import './index.sass';
import 'animate.css';


function Gallery() {

    const className = "gallery"
    
    const gallery = images.map((img) => {
        return (
            <GalleryItem
                key={img.picture}
                className={`${className}-card`}
                picture={img.picture}
                fileType={img.fileType}
                alt={img.alt}
                projectLink={img.projectLink}
                githublink = {img.githubLink}
            />
        )
    })
    return (
        <div className = {className}>
            {gallery}
        </div>
    );
}
 
export default Gallery;