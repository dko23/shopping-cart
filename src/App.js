
import './App.css';
import Home from './Components/Home';
import kart from './images/trolley.svg'
import jump from './images/shopping.png'
import cart from './images/cart pic.jpg'




function App() {

  return (
    <div className="App">
     <Home kart={kart} cart={cart} jump={jump}  />
     
    </div>  
  );
}

export default App;

