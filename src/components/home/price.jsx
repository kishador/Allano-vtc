import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Prices() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    return (
        <section id="price" >
            <h2 data-aos="zoom-in"
            ><span className="red">T</span>arifs</h2>
            <p>Réserver votre chauffeur privé VTC dans le Morbihan pour vos déplacements privés et professionnels, un service disponible 7j/7.</p>
            <p>Le prix est fixé à la réservation et le Paiement s'effectue par espèces ou CB au départ de la course.</p>
            <img src="./src/assets/pictures/car-shadow.webp" alt="car and setting sun picture" aria-label="car and setting sun picture" />
        </section>
    );
}

export default Prices;