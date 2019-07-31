import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function PhotoCard() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY`)
            .then(res => {
            console.log(res.data);
            setPhotos(res.data.photos)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
    <div>
        <img className="Frame" src={photos}/> 
    </div>
    )
};

