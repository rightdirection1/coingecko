import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CoinInfo.css";

function CoinInfo() {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCoinInfo(data);
      });
  }, [params.id]);
  console.log(coinInfo);
  return (
    <div className="wrapper">
      <p>Name: {coinInfo.name}</p>
      <p>Symbol: {coinInfo.symbol}</p>
      <p>
        {coinInfo.hashing_algorithm === null
          ? ""
          : `Hash algorithm: ${coinInfo.hashing_algorithm}`}
      </p>
      <p>
        {coinInfo.description === null || coinInfo.description === undefined
          ? ""
          : `Description: ${coinInfo.description.en}`}
      </p>
      <p>
        {coinInfo.market_data === null || coinInfo.market_data === undefined
          ? ""
          : `Market cap in Euro: ${coinInfo.market_data.market_cap.eur}`}
      </p>
      <p>
        {coinInfo.links === undefined
          ? ""
          : `Homepage: ${coinInfo.links.homepage[0]}`}
      </p>
      <p>
        {coinInfo.genesis_date === null
          ? ""
          : `Genesis date ${coinInfo.genesis_date}`}
      </p>
    </div>
  );
}

export default CoinInfo;
