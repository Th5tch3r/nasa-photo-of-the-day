import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function PhotoCard() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
            console.log(res.data);
            setPhotos(res.data.url)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
    <div>
        <img className="Frame" src={photos} alt="img"/> 
    </div>
    )
};

