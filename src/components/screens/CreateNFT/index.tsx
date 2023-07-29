import React from "react";
import { CreateForm } from "./components/CreateForm";

export const CreateNFTScreen = () => {
  return (
    <div className="mt-12 md:mt-0 md:py-24 md:px-12 lg:px-16 xl:px-28">
      <p className="flex items-center justify-center font-bold text-xl">Create NFT</p>
      <CreateForm />
    </div>
  );
};
