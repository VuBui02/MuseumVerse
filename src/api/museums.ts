import axiosClient from ".";
import { MuseumInput } from "../model/api";

export type Museum = {
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
  put: (publicKey: string, data: any) => {
      const url= `/museums?publicKey=${publicKey}`
      return axiosClient.put(url, data)
  }
}

export default museums;
