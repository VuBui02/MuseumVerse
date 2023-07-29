import axios from "axios";
import { MARKETPLACE_ADDRESS, X_API_KEY } from "../../../../config/variable";
import { useBoundStore } from "../../../../zustand";
import { signAndConfirmTransactionFe } from "../../../../utils/utilityfunc";
import { NOTIFICATION_TYPE, notify } from "../../../../utils/notify";
import { error } from "console";

export const Card = ({ data }: { data: any }) => {
  const { accountInfo } = useBoundStore((store) => ({
    accountInfo: store.accountInfo,
  }));

  const callback = (signature: any, result: any) => {
    console.log("Signature ", signature);
    console.log("result ", result);
    if (signature.err === null) {
      notify(NOTIFICATION_TYPE.SUCCESS, " Mua NFT thành công");
    }
  };

  const onBuyNft = async () => {
    const buyNftUrl = "https://api.shyft.to/sol/v1/marketplace/buy";
    const network = "devnet";

    const buyNftData = {
      network: "devnet",
      marketplace_address: MARKETPLACE_ADDRESS,
      nft_address: data.nft_address,
      price: data.price,
      seller_address: data.seller_address,
      buyer_wallet: accountInfo.publicKey,
    };

    await axios
      .post(buyNftUrl, buyNftData, {
        headers: {
          "x-api-key": X_API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log(response);
        const transaction = response.data.result.encoded_transaction;
        await signAndConfirmTransactionFe(network, transaction, callback);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(buyNftData);
  };

  return (
    <div>
      <p>{data.nft.name}</p>
      <button onClick={onBuyNft}>buy</button>
    </div>
  );
};
