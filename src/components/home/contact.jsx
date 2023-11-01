import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    return (
        <section id="contact">
            <h2 data-aos="zoom-in"><span className="red">C</span>ontact</h2>
            <div className="contact_wrapper">
                <div className="contact-left">
                    <video autoPlay muted loop width={"400px"} height={"auto"} ><source src="./src/assets/video/anim-rs.mp4" type="video/mp4" /></video>
                </div>
                <div className="contact-right">
                    <div className="blur" style={{ right: "10%", width: "9rem", height: "7rem" }}></div>
                    <ul>
                        <li data-aos="flip-down"><a href="tel:07 88 15 75 58" alt="phone number link" aria-label="phone number link"><div className="filter_contact-icons flex-center"><img src="../src/assets/icons/phone-solid.svg" alt="phone icon" aria-label="phone icon" /></div><p> : 07 88 15 75 58</p></a></li>
                        <li data-aos="flip-down"><a href="mailto:allanovtc@gmail.com" alt="email link" aria-label="email link"><div className="filter_contact-icons flex-center"><img src="../src/assets/icons/envelope-solid.svg" alt="mail icon" aria-label="mail icon" /></div><p> : allanovtc@gmail.com</p></a></li>
                    </ul>
                    <ul className="social_wrapper" >
                        <li data-aos="flip-up"><a className="filter_contact-icons flex-center" href="https://m.facebook.com/ALLANOVTC/" alt="facebook link" aria-label="facebook link"><img src="../src/assets/icons/facebook-f.svg" alt="facebook icon" aria-label="facebook icon" /></a></li>
                        <li data-aos="flip-up"><a className="filter_contact-icons flex-center" href="https://www.instagram.com/allanovtc/" alt="instagram link" aria-label="instagram link"><img src="../src/assets/icons/instagram.svg" alt="instagram icon" aria-label="instagram icon" /></a></li>
                        <li data-aos="flip-up"><a className="filter_contact-icons flex-center" href="https://wa.me/33788915758" alt="whatsapp link" aria-label="whatsapp link"><img src="../src/assets/icons/whatsapp.svg" alt="whatsapp icon" aria-label="whatsapp icon" /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;