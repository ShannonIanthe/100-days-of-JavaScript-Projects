import "./App.css";
import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";


const navbarLinks = [
  {url: '#', title: 'Home'},
  {url:'#', title: 'Trips'},
  {url:'#', title: 'Rewads'},
]
function App() {
  return (
    <div className="App">
    <Navbar navbarLinks={navbarLinks}/> 
      <Hero imageSrc={one} />
      <Slider
        imageSrc={two}
        title={"Be an explorer"}
        subtitle={
          "Our platform offers a wide variety of uniquer travel locations!"
        }
      />
      <Slider
        imageSrc={three}
        title={"Memories for a lifetime!"}
        subtitle={
          "Your dream vacation is only a few clicks away."
        }
        flipped={true}
      />
    </div>
  );
}

export default App;
