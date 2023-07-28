import { memo } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PublicKey, Transaction } from "@solana/web3.js";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

const getProvider = (): PhantomProvider | undefined => {
  if ("solana" in window) {
    // @ts-ignore
    const provider = window.solana as any;
    if (provider.isPhantom) return provider as PhantomProvider;
  } else {
    console.log("install phantom please");
  }
};

const ConnectWallet = () => {
  const { t } = useTranslation(["common"]);

  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );

  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;
    console.log(solana);

    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
        console.log(response.publicKey.toString());
      } catch (err) {
        console.log(err);

        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);
  return (
    <div
      onClick={connectWallet}
      className="bg-black rounded-xl text-white font-semibold px-4 py-2 text-sm cursor-pointer hover:bg-white border hover:border-black hover:text-black transition-all delay-75"
    >
      {t("connectWallet")}
    </div>
  );
};

export default memo(ConnectWallet);
