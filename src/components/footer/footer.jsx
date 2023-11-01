function Footer() {
    return (
        <footer>
            <div>
                <a href="#presentation"><img className="logo-white" src=".\src\assets\logos\logo-final-noir-transparent.webp" alt="logo Allano VTC noir" aria-label="logo Allano VTC noir" /></a>
            </div>
            <div>
                <ul>
                    <li><a href="tel:07 88 15 75 58" aria-label="phone" alt="phone"><img src="../src/assets/icons/phone-solid.svg" alt="phone icon" aria-label="phone icon" /></a></li>
                    <li><a href="mailto:allanovtc@gmail.com" aria-label="email" alt="email"><img src="../src/assets/icons/envelope-solid.svg" alt="email icon" aria-label="email icon" /></a></li>
                    <li><a href="https://m.facebook.com/ALLANOVTC/" aria-label="facebook" alt="facebook"><img src="../src/assets/icons/facebook-f.svg" alt="facebook icon" aria-label="facebook icon" /></a></li>
                    <li><a href="https://www.instagram.com/allanovtc/" aria-label="instagram" alt="instagram" ><img src="../src/assets/icons/instagram.svg" alt="instagram icon" aria-label="instagram icon" /></a></li>
                    <li><a href="https://wa.me/33788915758" aria-label="whatsapp" alt="whatsapp"><img src="../src/assets/icons/whatsapp.svg" alt="whatsapp icon" aria-label="whatsapp icon" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 All rights reserved <span>|</span>Made with <span>❤</span> by Gwendal Petitjean</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;