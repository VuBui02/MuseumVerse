import axiosClient from ".";
import { MuseumInput } from "../model/api";

const museums = {
    get: (museumInput: MuseumInput) => {
        const url = `/museums?publicKey=${museumInput.publicKey}`
        console.log(url)
        return axiosClient.get(url)
    },
}

export default museums