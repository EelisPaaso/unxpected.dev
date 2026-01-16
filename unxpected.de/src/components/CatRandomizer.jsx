import { useState } from 'react';
import pabloPhotos from './pablophotos.js';

function CatRandomizer() {
    const getRandomCatUrl = () => {
        const randomIndex = Math.floor(Math.random() * pabloPhotos.length);
        return pabloPhotos[randomIndex];
    };

    const [url, setUrl] = useState(getRandomCatUrl);

    const getNewCat = () => {
        setUrl(getRandomCatUrl());
    };

    return (
        <>
            <button onClick={getNewCat} className="fixed-btn">click for new pablo</button>
            {url && <img src={url} alt="cat" />}
        </>
    );
}

export default CatRandomizer;