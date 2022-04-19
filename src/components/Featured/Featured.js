import axios from "axios";
import "./Featured.css";
import React, { useState, useEffect } from "react";
import Coincard from "../Coincard";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/* left */}
        <div className="left">
          <h2>Explore Top Crypto's Like Bitcoin, Ethereum and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* right */}
        <div className="right">
        {data.map(data => (
          <Coincard key={data.id} data={data}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
