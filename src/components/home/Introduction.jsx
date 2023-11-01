import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Introduction() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    return (
        <div id="presentation">
            <div className="p-left">
                <div className="driver-img_container">
                    <img className="driver-img" src="./src/assets/pictures/photo-detouree.webp" alt="driver picture" aria-label="driver picture" />
                </div>
            </div>
            <div className="p-right">

                <h1>ALLANO <span className="title_span">VTC</span></h1>
                <p>La voiture avec chauffeur qui simplifie la vie. Une réservation gratuite et un prix fixe connu à la réservation, un chauffeur privé professionnel toujours à l'écoute de sa clientèle, discret et un service adapté à vos envies.</p>
                <div className="blur"></div>

            </div>
        </div>
    );
}
export default Introduction;