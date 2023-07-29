import React from "react";
import HomePage from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateNFTPage from "./pages/create-nft";
import CollectionsPage from "./pages/CollectionsPage";
import WalletPage from "./pages/WalletPage";
import NotConnectWalletScreen from "./components/screens/WalletPage/components/NotConnectWalletScreen";
import MuseumCollectionPage from "./pages/museum-collection";
import LoginPage from "./pages/Login";
import CollectionDetailPage from "./pages/CollectionDetail";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/create-nft",
      element: <CreateNFTPage />,
    },
    {
      path: "/collections",
      element: <CollectionsPage />,
    },
    {
      path: "/wallet",
      element: <WalletPage />,
    },
    {
      path: "/wallet/loans",
      element: <NotConnectWalletScreen />,
    },
    {
      path: "museum-collection",
      element: <MuseumCollectionPage />,
    },
    {
      path: "museum/login",
      element: <LoginPage />,
    },
    {
      path: "/collections/detail",
      element: <CollectionDetailPage />,
    }
  ]);

  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
