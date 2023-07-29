import axios from "axios";
import { Card } from "./components/Card";
import { useBoundStore } from "../../../zustand";
import { X_API_KEY } from "../../../config/variable";
import { useEffect, useState } from "react";
import { signAndConfirmTransactionFe } from "../../../utils/utilityfunc";
import { NOTIFICATION_TYPE, notify } from "../../../utils/notify";
import CustomButton from "../../common/CustomButton";
import ConnectWallet from "../../common/ConnectWallet";

export const MuseumCollectionScreen = () => {
  const { accountInfo, setWebAccountInfo } = useBoundStore((store) => ({
    accountInfo: store.accountInfo,
    setWebAccountInfo: store.saveWebAccountInfo,
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
      notify(NOTIFICATION_TYPE.SUCCESS, "Create market place successfully!");
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
        console.log("response: ", response.data.result);
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
      {!accountInfo.publicKey ? (
        <div className="mt-24 w-[20%] px-8 py-6 border-2 border-black rounded-lg m-auto">
          <p className="text-center mb-2">Please connect your wallet</p>
          <ConnectWallet />
        </div>
      ) : dataFetched && dataFetched.length ? (
        <div className="grid grid-cols-4 justify-center">
          {dataFetched
            ? dataFetched.map((element, index) => (
                <Card
                  data={element}
                  accountInfo={accountInfo}
                  setWebAccountInfo={setWebAccountInfo}
                />
              ))
            : null}
        </div>
      ) : (
        <div className="m-auto border-2 border-black w-1/3">
          <CustomButton label="Create marketplace" />
        </div>
      )}
    </div>
  );
};
