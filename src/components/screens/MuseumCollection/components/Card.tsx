import { useState } from "react";
import { WebAccountInfo } from "../../../../model/common";
import axios from "axios";
import { MARKETPLACE_ADDRESS, X_API_KEY } from "../../../../config/variable";
import { signAndConfirmTransactionFe } from "../../../../utils/utilityfunc";

export const Card = ({
  data,
  accountInfo,
}: {
  data: any;
  accountInfo: WebAccountInfo;
}) => {
  const [isSell, setIsSell] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("");
  const onList = async () => {
    setIsSell(true);
  };

  const callback = (signature: any, result: any) => {
    console.log("Signature ", signature);
    console.log("result ", result);
    if (signature.err === null) {
      alert("done");
    }
  };

  const onSell = async () => {
    const sellNftUrl = "https://api.shyft.to/sol/v1/marketplace/list";

    const sellData = {
      network: "devnet",
      nft_address: data.mint,
      // marketplace_address: accountInfo?.marketPlaceAddress,
      marketplace_address: MARKETPLACE_ADDRESS,
      price: Number(price),
      seller_wallet: accountInfo.publicKey,
    };
    await axios
      .post(sellNftUrl, sellData, {
        headers: {
          "x-api-key": X_API_KEY,
        },
      })
      .then(async (response) => {
        console.log(response.data.result);
        let network = "devnet";
        const transaction = response.data.result.encoded_transaction;
        try {
          const ret_result = await signAndConfirmTransactionFe(
            network,
            transaction,
            callback
          );
        } catch (error) {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <p>{data.name}</p>
      <button onClick={onList}>list</button>
      {isSell ? (
        <>
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={onSell}>Accept</button>
        </>
      ) : null}
    </div>
  );
};
