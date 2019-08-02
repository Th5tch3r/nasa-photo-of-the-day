import React, {useState, useEffect} from "react";
import axios from 'axios';

import Card from "./Photo"



export default function PhotoCard() {
    const [photos, setPhotos] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=XhZmFZvmMBnw8hDKnQIuUEzVjRORbTmds6vFPMHo`)
            .then(res => {
            console.log(res.data);
            setPhotos(res.data.url);
            setMessages(res.data.explanation);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
    <div>
        <Card photo={photos} message={messages}/> 
    </div>
    )
};

