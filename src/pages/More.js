import React, { useState, useEffect } from "react";
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import axios from "axios";
import "../pages/More.css"

import Coincard from "../components/Coincard";

const More = () => {

        const [data, setData] = useState(null);
      
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
      
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
    <>
        <Navbar />
            <div className="container">
            <div className="crypto_header">
                 <h2>Crypto Currencies</h2>
                 <p>Live update for different crypto currencies</p>
            </div>
             
            <div className="more">
           
            {data.map(data => (
                <Coincard key={data.id} data={data}/>
                ))}
            </div>
            </div>
        <Footer />
    </>
  )
}

export default More