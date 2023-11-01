import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    const text1 = "<p>Besoin d'un moyen de transport pour vous rendre de la gare de Vannes à Port Blanc pour un séjour à l'île-aux-moines?</p><p> Vous avez à rejoindre Conleau pour profiter de cette magnifique presqu'île depuis votre hôtel ?</p><p> Envie d'aller visiter Carnac et ses alignements de menhirs ou d'aller a Arzon pour manger une glace et profiter de ces magnifiques paysages ?</p><p> Nous vous conduisons à toutes les villes, les ports et les plages situés dans le Golfe du Morbihan, nous pouvons aussi vous conseiller et vous faire découvrir de magnifiques endroits que seul les personnes de la région connaissent.</p><div><img src='./src/assets/pictures/car-beach.webp' alt='car and beach' aria-label='car and beach'/></div><p> Alors, contactez-nous ! Notre prestation est totalement modulable en fonction de vos besoins et de vos envies. En effet, que vous soyez plutôt culture, nature, shopping ou encore sport, nous nous adaptons.</p><p> Ce service de chauffeur est disponible toute l'année 7j/7 afin que vous profitiez au mieux de Vannes et du golfe du Morbihan.</p>";
    const text2 = "<p>Notre service de VTC toutes distances à Vannes couvre l'intégrale de vos déplacements en Morbihan et bien au-delà. Rejoignez Nantes, Rennes, Toulouse, Lille, Lyon, Marseille, mais aussi les aéroports de Paris ou d'autres villes sur simple réservation!</p><div><img src='./src/assets/pictures/tir-vertical.webp' alt='sunny road' aria-label='sunny road'/></div>";
    const text3 = "<p>Allano VTC Vannes réalise vos transferts avec les gares et aéroports de Bretagne et Pays de Loire.<br /> Notre parfaite connaissance de ces aéroports et gare SNCF en tant que professionnel du transport, nous permettra de vous conduire au plus près des quais ou de votre vol.</p><div><img src='./src/assets/pictures/car-airport.webp' alt='car airport' aria-label='car airport'/></div><p> Nous proposons une solution de navette avec les aéroports et gares de votre choix. Notre chauffeur privé VTC réalise vos liaisons entre la gare ou aéroports et votre domicile, votre hôtel ou votre travail.<br /> Notre service sera adapté à votre emploi du temps et aux horaires de votre train ou avion.</p><p> Sur demande, nous pouvons également vous conduire ou venir vous chercher dans des gares et aéroports éloignés grâce a notre service toutes distances.<br /> Dans ce cas et afin de garantir notre disponibilité, nous vous conseillons de nous contacter par téléphone.<br /> Pour vous y rendre, nous venons vous accueillir à l'adresse convenue lors de votre réservation.</p>";
    const text4 = "<p>Nous proposons également un service de livraison ou messagerie express pour les entreprises et particuliers souhaitant faire livrer plis ou colis.</p><p> Selon un planning défini, ou le temps d'une prestation unique, un chauffeur se charge de venir récupérer votre bien et de le livrer avec ponctualité.<br /> À l'issue de la livraison, un reçu signé vous sera remis, si vous le souhaitez.</p><p> Bien entendu, ce type de service est adaptable en fonction de vos besoins.<br /> Et si vous le souhaitez, vous pouvez aussi organiser ce service de livraison avec d'autres entreprises de votre ville ou quartier.</p><p> De quoi assurer vos livraisons à Vannes ou en Morbihan en temps et en heure, même lorsque vous n'êtes pas disponible.<br /> Cette prestation est parfaite pour les entreprises qui ont des besoins urgents ou en horaire décalé par exemple.</p>";
    const text5 = "<p>Besoin d'un chauffeur VTC de confiance pour vos trajets et vos rendez-vous professionnels ?<br />  Pour vous offrir une prestation de qualité, nous proposons un service dédié pour le business.</p><div><img src='./src/assets/pictures/car-pub.webp' alt='car publicity' aria-label='car publicity'/></div><p> Besoin d'un chauffeur pour une journée shopping et vous attendre afin de transporter vos nombreux achats ?<br /> Besoin d'un chauffeur qui vous accompagne et est a votre disposition le long d'un mariage, d'une cérémonie ou autre?<br /> D'un chauffeur qui vous attend pendant un dîner, spectacle, concert, cinéma...?</p><p> Dans le cadre d'une mise à disposition, nous sommes à votre service sur une durée déterminée, pour une heure, pour une journée ou plus selon vos impératifs.</p>"
    function modificationHandler() {
        const serviceTextElement = document.querySelector(".service-text");
        serviceTextElement.innerHTML = text1;
        window.location.href = "#s-right";
    }
    function modificationHandler1() {
        const serviceTextElement = document.querySelector(".service-text");
        serviceTextElement.innerHTML = text2;
        window.location.href = "#s-right";
    }
    function modificationHandler2() {
        const serviceTextElement = document.querySelector(".service-text");
        serviceTextElement.innerHTML = text3;
        window.location.href = "#s-right";
    }
    function modificationHandler3() {
        const serviceTextElement = document.querySelector(".service-text");
        serviceTextElement.innerHTML = text4;
        window.location.href = "#s-right";
    }
    function modificationHandler4() {
        const serviceTextElement = document.querySelector(".service-text");
        serviceTextElement.innerHTML = text5;
        window.location.href = "#s-right";
    }
    return (
        <section id="services">
            <h2 data-aos="zoom-in"><span className="red">S</span>ervices</h2>
            <div className="s-box">

                <div className="s-left"><div className="blur" style={{ background: "#2b2b2e", left: "20%" }}></div><p>Réserver votre chauffeur privé VTC dans le Morbihan pour vos déplacements privés et professionnels, un service disponible 7j/7.</p></div>
                <div id="s-right">
                    <ul >
                        <li data-aos="fade-left"><button className="filter-text-icons flex-between" onClick={modificationHandler}><div className="filter-icons flex-center"><div className="icon-check"></div></div><div className="filter-text flex-center">Trajets courte distance.</div></button></li>
                        <li data-aos="fade-left"><button className="filter-text-icons flex-between" onClick={modificationHandler1}><div className="filter-icons flex-center"><div className="icon-check"></div></div><div className="filter-text flex-center">Trajets toutes distances.</div></button></li>
                        <li data-aos="fade-left"><button className="filter-text-icons flex-between" onClick={modificationHandler2}><div className="filter-icons flex-center"><div className="icon-check"></div></div><div className="filter-text flex-center">Transferts aéroports, gares.</div></button></li>
                        <li data-aos="fade-left"><button className="filter-text-icons flex-between" onClick={modificationHandler3}><div className="filter-icons flex-center"><div className="icon-check"></div></div><div className="filter-text flex-center">Livraison express et messagerie.</div></button></li>
                        <li data-aos="fade-left"><button className="filter-text-icons flex-between" onClick={modificationHandler4}><div className="filter-icons flex-center"><div className="icon-check"></div></div><div className="filter-text flex-center">Mise a disposition.</div></button></li>
                    </ul>
                </div>
            </div>
            <div className="service-text">
                <p>Avec Allano VTC à Vannes, vous avez la possibilité de vous déplacer simplement au cœur de la ville ou dans sa périphérie, mais également dans tous le Morbihan, la Bretagne et la France.</p><p> Même dans le cas d'une demande urgente, nous serons sur place dans les meilleurs délais pour assurer votre trajet. Si vous devez vous déplacer depuis ou vers Vannes, Auray, Lorient, Nantes ou encore Quiberon, contactez-nous. Notre chauffeur sera à l'heure et à l'adresse convenues.<br /> Puis, nous vous conduirons à destination de Quimper, Rennes, Pontivy, Guidel, la Roche-Bernard ou encore toute autres destinations souhaitées.</p><p> Notre service de chauffeur privé VTC est accessible de jour comme de nuit pour vos trajets.<br /> De plus, notre service toutes distances est disponible sur réservation du lundi au dimanche toute l'année. En effet, notre disponibilité est une force et nous la mettons au service de nos clients.</p><p> Nous vous offrons un service qui correspond à vos besoins 7j/7 & 24h/24. Pour en savoir plus, contactez-nous.</p>
            </div>
        </section>
    );
}

export default Services;