import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import disPic from "../../../../../public/images/upload-file.jpg";
import { signAndConfirmTransactionFe } from "../../../../utils/utilityfunc";

interface FormValues {
  network: string;
  wallet: string;
  name: string;
  symbol: string;
  description: string;
  roy: string;
  maxSup: string;
}

const validationSchema = yup.object({
  network: yup.string(),
  wallet: yup.string(),
  name: yup.string().required("Enter NFT's name"),
  symbol: yup.string().required("Enter NFT's symbol"),
  description: yup.string().required("Add a small story to this NFT"),
});

const xApiKey = "5BcDThNzqMdHpv-C";
export const CreateForm = () => {
  const [displayPic, setDisplayPic] = useState(disPic);
  const [file, setFile] = useState<File>();

  const callback = (signature: any, result: any) => {
    console.log("Signature ", signature);
    console.log("result ", result);
    if (signature.err === null) {
      alert("fail");
    }
  };

  const onCreateNFT = async (values: FormValues) => {
    console.log("values...", values);

    let formData = new FormData();

    formData.append("network", values.network);
    formData.append("wallet", values.wallet);
    formData.append("name", values.name);
    formData.append("symbol", values.symbol);
    formData.append("description", values.description);
    formData.append(
      "attributes",
      JSON.stringify([{ trait_type: "edification", value: "100" }])
    );
    formData.append("external_url", "");
    formData.append("royalty", values.roy);
    formData.append("max_supply", values.maxSup);
    formData.append("file", file as File);

    await axios({
      url: "https://api.shyft.to/sol/v1/nft/create_detach",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": xApiKey,
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      data: formData,
    })
      .then(async (response) => {
        const transaction = response.data.result.encoded_transaction;
        const ret_result = await signAndConfirmTransactionFe(
          values.network,
          transaction,
          callback
        );
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <Formik
      initialValues={{
        network: "devnet",
        wallet: "",
        name: "",
        symbol: "",
        description: "",
        maxSup: "0",
        roy: "5",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues) => {
        onCreateNFT(values);
      }}
    >
      <Form>
        <div>
          <div className="img-container text-center mt-5">
            <div
              className="uploaded-img"
              style={{
                height: "200px",
                width: "200px",
                backgroundColor: "grey",
                margin: "0 auto",
                borderRadius: "10px",
              }}
            >
              <img
                src={displayPic}
                alt="To be uploaded"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="mt-3"></div>
            <button className="button-24 text-light rounded-pill m-2">
              Select File
            </button>
            <br></br>
            <input
              type="file"
              style={{
                position: "absolute",
                zIndex: "3",
                marginTop: "-50px",
                marginLeft: "-70px",
                width: "150px",
                height: "40px",
                opacity: "0",
              }}
              onChange={(e) => {
                if (e.target.files) {
                  const [file_selected] = e.target.files;

                  setFile(e.target.files[0]);
                  setDisplayPic(URL.createObjectURL(file_selected));
                }
              }}
            />
            <div className="mb-3"></div>
          </div>
          <div className="flex flex-col gap-2">
            <Field name="network" />
            <Field name="wallet" placeholder="public key" />
            <Field name="name" placeholder="NFT name" />
            <Field name="symbol" placeholder="NFT symbol" />
            <Field name="description" placeholder="NFT description" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
