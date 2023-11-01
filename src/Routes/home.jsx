import Introduction from "../components/home/Introduction";
import Car from "../components/home/car";
import Contact from "../components/home/contact";
import Prices from "../components/home/price";
import Services from "../components/home/services";
import Testimony from "../components/home/testimony";
function Home() {
    return (
        <main>
            <Introduction />
            <Services />
            <Contact />
            <Prices />
            <Testimony />
            <Car />
        </main>
    );
}

export default Home;