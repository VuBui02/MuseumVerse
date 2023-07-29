import axios from "axios";
import { Card } from "./components/Card";
import { useBoundStore } from "../../../zustand";
import { X_API_KEY } from "../../../config/variable";
import { useEffect, useState } from "react";
import { url } from "inspector";
import { signAndConfirmTransactionFe } from "../../../utils/utilityfunc";

export const MuseumCollectionScreen = () => {
  const { accountInfo } = useBoundStore((store) => ({
    accountInfo: store.accountInfo,
  }));
  const [dataFetched, setDataFetched] = useState([]);

  const getNFTCollection = async () => {
    console.log(accountInfo);

    let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=devnet&address=${accountInfo.publicKey}`;
    axios({
      url: nftUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": X_API_KEY,
      },
    })
      .then((res) => {
        console.log(res.data.result);

        setDataFetched(res.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const callback = (signature: any, result: any) => {
    console.log("Signature ", signature);
    console.log("result ", result);
    if (signature.err === null) {
      alert("done");
    }
  };

  const onCreateMarketplace = async () => {
    const createMarketUrl = "https://api.shyft.to/sol/v1/marketplace/create";
    const createData = {
      network: "devnet",
      transaction_fee: 1,
      creator_wallet: accountInfo.publicKey,
    };

    await axios
      .post(createMarketUrl, createData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": X_API_KEY,
        },
      })
      .then(async (response) => {
        console.log(response.data.result);
        let network = "devnet";
        const transaction = response.data.result.encoded_transaction;
        const ret_result = await signAndConfirmTransactionFe(
          network,
          transaction,
          callback
        );
      });
  };

  useEffect(() => {
    if (accountInfo.publicKey.length !== 0) {
      getNFTCollection();
    }
  }, [accountInfo]);

  return (
    <div className="mt-12 md:mt-0 md:py-24 md:px-12 lg:px-16 xl:px-28">
      <div>
        <button onClick={onCreateMarketplace}>Create marketplace</button>
      </div>
      {dataFetched
        ? dataFetched.map((element) => (
            <Card data={element} accountInfo={accountInfo} />
          ))
        : null}
    </div>
  );
};
