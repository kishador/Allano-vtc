import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Aos from "aos";
import "aos/dist/aos.css";

function Car() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    const baseUrl = "./src/assets/pictures/"
    const datas = [
        {
            id: 1,
            img: `${baseUrl}car-1.webp`
        },
        {
            id: 2,
            img: `${baseUrl}car-2.webp`
        },
        {
            id: 3,
            img: `${baseUrl}car-3.webp`
        },
        {
            id: 4,
            img: `${baseUrl}car-4.webp`
        },
        {
            id: 5,
            img: `${baseUrl}car-5.webp`
        },
        {
            id: 6,
            img: `${baseUrl}car-6.webp`
        },
        {
            id: 7,
            img: `${baseUrl}car-7.webp`
        },
        {
            id: 8,
            img: `${baseUrl}car-beach.webp`
        },
        {
            id: 9,
            img: `${baseUrl}car-8.webp`
        }



    ]

    return (

        <section id="car">
            <h2 data-aos="zoom-in"><span className="red">L</span>e véhicule</h2>
            <p>Découvrez une toute nouvelle dimension au <strong>transport haut de gamme VTC à Vannes</strong> à bord de notre <strong>véhicule hybride écologique</strong>. Vous aurez le plaisir de voyager sur de <strong>courte ou longue distance</strong> à bord d'un véhicule silencieux, récent et entretenu.</p>
            <ul className="accessories">
                <li>Wifi</li>
                <li>Bluetooth (pour musique)</li>
                <li>Prise USB, chargeurs téléphones et chargeur induction pour iPhone</li>
                <li>Oreillers disponnible à la demande pour longs trajets</li>
                <li>Réhausseur et siège bébé sur demande</li>
                <li>Animaux acceptés</li>
            </ul>
            <ul className="features">
                <li>Banquette arrière 3 places</li>
                <li>Clim automatiques bi-zones</li>
                <li>Filtre à Pollen</li>
                <li>Accoudoir arriére</li>
                <li>Siège passager chauffant</li>
                <li>Vitres teintées</li>
                <li>Tablette cache bagage</li>
                <li>Préparation Isofix</li>
                <li>Volume du coffre : 502L</li>
                <li>Emission de CO&sup2; : 76g/km (A) <div className="leaf-icon"></div></li>
                <li>Norme anti-pollution : Euro 6 <div className="leaf-icon"></div></li>
                <li>Consommation : 3,3L/100km <div className="leaf-icon"></div></li>
            </ul>
            <div className="blur" style={{ background: "#2b2b2e", right: "0", top: "50%", width: "9rem", height: "7rem" }}></div>
            <div className="blur" style={{ right: "20%", top: "30%", width: "9rem", height: "7rem" }}></div>
            <Carousel autoPlay interval={4000} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop>
                {datas.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.img} alt="car picture `${slide.id}`" aria-label="car picture `${slide.id}`" />
                    </div>
                ))}
            </Carousel>

        </section>
    );
}

export default Car;