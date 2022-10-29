import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GrayCard from "./components/GrayCard";
import Tokenomics from "./components/Tokenomics";

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <GrayCard />
            <Tokenomics />
        </div>
    );
}

export default App;
