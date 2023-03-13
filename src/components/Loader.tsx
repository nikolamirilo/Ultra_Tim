import React from "react";
import { Triangle } from "react-loader-spinner";

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
        background: "#4169e1",
        zIndex: "1000",
      }}
    >
      <Triangle
        visible={true}
        height="120"
        width="120"
        ariaLabel="triangle-loading"
        color="#f88b06"
      />
    </div>
  );
};
export default Loader;
