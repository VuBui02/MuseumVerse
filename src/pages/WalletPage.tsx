import MainLayout from '../components/layouts/MainLayout'
import WalletPageScreen from '../components/screens/WalletPage'
import NotConnectWalletScreen from '../components/screens/WalletPage/components/NotConnectWalletScreen';

const WalletPage = () => {
    let id = localStorage.getItem("id");
    if (id) {
        return (
            <MainLayout>
              <WalletPageScreen />
            </MainLayout>
          );
    } else {
        return (
            <MainLayout>
              <NotConnectWalletScreen />
            </MainLayout>
          )
    }
  
}

export default WalletPage