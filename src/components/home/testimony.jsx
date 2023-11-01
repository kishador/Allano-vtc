import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css"
import "swiper/css/autoplay";
import Aos from "aos";
import "aos/dist/aos.css";
function Testimony() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })

    const clients = [
        {
            review: "Chauffeur au top avec une super conduite. Toujours à l'heure,  très agréable et souriant malgré l'heure tardive. Je recommande vivement.",
            name: "Laura A.",
        },
        {
            review: "Je vous recommande fortement Julien pour vos futurs trajets. Je n'avais jamais eu l'occasion de recourir au service d'un chauffeur VTC mais il m'a permis de vivre une excellente expérience pour mon déplacement. Ponctuel, poli, souriant et conduite prudente rien à demander de plus. Bonne continuation.",
            name: "Damien J.",
        },
        {
            review: "Très bon service proposé par le chauffeur, réactif et très polie. Le véhicule est très propre. Merci pour votre professionnalisme",
            name: "Dimitri L.",
        },
        {
            review: "Chauffeur au top! Voiture propre, confortable et chauffeur ponctuel et très sympathique. Rapport qualité prix très correct. Merci à vous et à bientôt pour de futures courses",
            name: "Charline V.",
        },
        {
            review: "Chauffeur disponible et à l'écoute de ses clients. Tarif interressant que ce soit pour des courts ou des longs trajets. Voiture confortable. Je recommande sans hésiter",
            name: "Maxime G.",
        }
    ]
    return (
        <section id="testimony">
            <div className="t-wrapper">
                <h2 data-aos="zoom-in"><span className="red">A</span>vis et Témoignages</h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                >
                    {clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <div className="review_wrapper"><p>"{client.review}"</p></div>
                                    <div className="name_wrapper"><span>{client.name}</span></div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <p>Plus d'avis a voir <a href="https://www.google.com/search?hl=fr-FR&gl=fr&q=VTC+ALLANO+-+TAXI+A+VANNES+chauffeur+priv%C3%A9,+15+Rue+de+Kerv%C3%A9nic,+56000+Vannes&ludocid=10237633788260603703&lsig=AB86z5UYdkjWES4E3ea0hFnVbWpM&hl=fr&gl=FR&sa=X&ved=2ahUKEwiK3aLCwPaBAxWzXaQEHbokAe0Q3PALegQIMRAV&pli=1#lrd=0x48101961bc273b8b:0x8e1361b069cf5737,1,,,,&pli=1"> ICI ➪</a></p>
            </div>
        </section>
    );
}

export default Testimony;