import './App.css';
import Home from './components/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000
});

function App() {
  return (
    <>
<Home />
    </>
  );
}

export default App;
