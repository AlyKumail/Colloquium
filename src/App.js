import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GrayCard from "./components/GrayCard";
import Tokenomics from "./components/Tokenomics";
import Shares from "./components/Shares";
import TokenInfo from "./components/TokenInfo";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <GrayCard />
            <Tokenomics />
            <Shares />
            <TokenInfo />
            <Partners />
            <Footer />
        </div>
    );
}

export default App;
