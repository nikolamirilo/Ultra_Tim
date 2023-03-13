import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Dna } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div
      className="loader"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#001f3f",
        zIndex: "1000",
      }}
    >
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
export default Loader;
