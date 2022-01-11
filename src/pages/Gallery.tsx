import React from 'react';
import Image from '../components/Image'
import images from '../data/images.json'


function Gallery() {

    let key: number = 0
    
    const gallery = images.map((img) => {
        key++;//redundant, if needed can be taken from arguments: (contact, i) => {...}
        //also, key should be unique and base on data to avoid complications
        return (
            <Image key={img.picture} picture={img.picture} fileType={img.fileType} alt={img.alt}/>
        )
    })
    return (
        <div className = "gallery">
            {gallery}
        </div>
    );
}
 
export default Gallery;