import Avvvatars from 'avvvatars-react'
import { useBoundStore } from '../../../../zustand';

const AvatarBlock = () => {
    let account = localStorage.getItem("zustand.museum_nft");
    console.log("public key");
    console.log(account);
    console.log(typeof account);

    const { accountInfo, removeAccountInfo } = useBoundStore((store) => ({
        accountInfo: store.accountInfo,
        removeAccountInfo: store.removeAccountInfo,
      }));

      console.log("public key");
    console.log(accountInfo);
    console.log(typeof accountInfo);

  return (
    <div className="flex">
        <div className="">
            <Avvvatars value="best_user@gmail.com" 
                size={80} />
            <div className="">
                <div className="">{accountInfo.publicKey}</div>
            </div>
        </div>
    </div>
  )
}

export default AvatarBlock