import axios from "axios";
import { MARKETPLACE_ADDRESS, X_API_KEY } from "../../../config/variable";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

export const MarketplaceScreen = () => {
  const [dataFetched, setDataFetched] = useState([]);

  const getMarket = async () => {
    const getMarketUrl = `https://api.shyft.to/sol/v1/marketplace/active_listings?network=devnet&marketplace_address=${MARKETPLACE_ADDRESS}`;
    await axios
      .get(getMarketUrl, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": X_API_KEY,
        },
      })
      .then((response) => {
        setDataFetched(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMarket();
  }, []);


  return (
    <div className="mt-12 md:mt-0 md:py-24 md:px-12 lg:px-16 xl:px-28">
      <div className="mt-12 px-12 md:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {dataFetched
            ? dataFetched.map((element) => <Card data={element} />)
            : null}
        </div>
        
      </div>
    </div>
  );
};
