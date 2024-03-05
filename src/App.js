import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ThankYouPage from "./components/thankYou";
import Home from "./components/home";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
