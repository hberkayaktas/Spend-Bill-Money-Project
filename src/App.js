import './style.css';
import './spend_money.css';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import BillHeader from './Components/BillHeader';
import Items from './Components/Items';
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <BillHeader/>
      <Items/>
      <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
