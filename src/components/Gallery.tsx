import React from 'react';

interface Picture {
    picture: string;
    fileType: string;
}


 
function Gallery() {
    const pictures: Picture[]= [
        {
            picture: "unicorn",
            fileType: "jpg"
        },
        {   picture: "words-game",
            fileType: "jpg"
        },
        {   picture: "weather-app",
            fileType: "jpg"
        },
        {   picture: "form",
            fileType: "png"
        },
        {   picture: "architect-website",
            fileType: "png"
        },
        {   picture: "mybrary",
            fileType: "jpg"
        },
        {   picture: "winter-triathlon",
            fileType: "jpg"
        },
    
    ]
    
    let key: number = 0
    
    const gallery = pictures.map(picture => {
        console.log(picture.picture, picture.fileType)
        key++;
        return (
            <div key = {`picture${key}`}>
                <img src={`../images/${picture.picture}.${picture.fileType}`} />
            </div>
        )
        
    })
    return (
        <div>
            <img src={`../images/architect-website.png`} />
            {gallery}
        </div>
    );
}
 
export default Gallery;