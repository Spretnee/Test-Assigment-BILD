import React from "react";
import notValid from "../../../../utils/notValidatedICon.svg";
export default function NotValid() {
  return (
    <img
      className="denied-icon"
      style={{ width: "18px" }}
      src={notValid}
      alt="check"
    />
  );
}
