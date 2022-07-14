import React from "react";
import { useState, useEffect } from "react";
import "./CoinMarketList.css";
import { useNavigate } from "react-router-dom";

function CoinMarketList() {
  const [coinMarkets, setcoinMarkets] = useState([]);

  const navigate = useNavigate();

  const navigateCoin = (id) => {
    navigate(`/coins/${id}`);
  };

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&per_page=10&order=market_cap_desc"
    )
      .then((response) => response.json())
      .then((data) => {
        setcoinMarkets(data);
      });
  }, []);

  return (
    <div>
      <h1>Coin's Market</h1>
      {coinMarkets.map((item) => (
        <div
          className="container"
          key={item.id}
          onClick={() => navigateCoin(item.id)}
        >
          <div className="coin-wrapper">
            <img src={item.image} />
            <p> Name: {item.name}</p>
            <p>Symbol: {item.symbol}</p>
            <p>Current Price: {item.current_price}</p>
            <p>High 24 hour Price: {item.high_24h}</p>
            <p>Low 24 hour Price: {item.low_24h}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoinMarketList;
