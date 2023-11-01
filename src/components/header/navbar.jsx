
import { useState } from "react"

function Nav() {
    const [showLinks, setShowLinks] = useState(false)


    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>


            <ul className="navbar__links show-nav">
                <li className="navbar__item"><a className="navbar__link" href="#services" onClick={handleShowLinks}>Services</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#contact" onClick={handleShowLinks}>Me contacter</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#price" onClick={handleShowLinks}>Tarifs</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#testimony" onClick={handleShowLinks}>Avis & témoignages</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#car" onClick={handleShowLinks}>Véhicule</a></li>
            </ul>

            <div className="box-burger">
                <img className="logo" src=".\src\assets\logos\logo-blanc.webp" alt="logo blanc Allano VTC" aria-label="logo blanc Allano VTC" />
                <button className="navbar__burger" aria-label="menu" alt="menu" onClick={handleShowLinks}>
                    <span className="burger-bar"> </span>
                </button>
            </div>
        </nav>
    );
}

export default Nav;