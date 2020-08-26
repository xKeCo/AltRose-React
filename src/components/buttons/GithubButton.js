import React from "react";
import "./styles/button.css";
import "bootstrap/dist/css/bootstrap.css";

export default function GithubButton({ children, onClick }) {
  return (
    <>
      <button className="btn btn-Github" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
