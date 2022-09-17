import React, { useEffect } from "react";
import Spinner from "../../../../components/Spinner";

export default function ContactSent({ name }) {
  return (
    <div className="sent-from contact-form">
      <h2>Thank you for submiting, {name}</h2>
    </div>
  );
}
