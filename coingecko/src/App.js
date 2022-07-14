import "./App.css";
import CoinMarketList from "./components/CoinMarketList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinInfo from "./components/CoinInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CoinMarketList />} />
          <Route exact path="/coins/:id" element={<CoinInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
