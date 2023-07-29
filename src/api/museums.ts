import axiosClient from ".";
import { MuseumInput } from "../model/api";

type Museum = {
  id: string;
  name: string;
  publicKey: string;
  marketPlaceAddress: string;
  createAt: Date;
};

type GetMuseumResponse = {
  data: Museum[];
};

const museums = {
  get: (museumInput: MuseumInput) => {
    const url = `/museums?publicKey=${museumInput.publicKey}`;
    console.log(url);
    return axiosClient.get<GetMuseumResponse>(url);
  },
};

export default museums;
