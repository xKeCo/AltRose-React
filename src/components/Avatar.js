import React from "react";
import "./styles/styles.css";

export default function Avatar({ alt, src, text }) {
  return (
    <div className="avatar-Container">
      <img className="Avatar" src={src} alt={alt} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  );
}
