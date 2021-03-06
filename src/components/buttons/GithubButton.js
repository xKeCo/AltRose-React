import React from "react";
import "./styles/button.css";
import "bootstrap/dist/css/bootstrap.css";

export default function GithubButton({ children, onClick }) {
  return (
    <>
      <button className="btn btn-Github mb-3" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
