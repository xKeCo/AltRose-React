import React from "react";
// import { Link } from "react-router-dom";
import "./styles/Home.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <React.Fragment>
      <section className="hero-container position-relative text-light">
        <div className="hero-background"></div>
        <div className="hero-content container h-100">
          <div className="row no-gutters vh-80 d-flex">
            <div className="hero-text col-md-6 align-self-center">
              <h1 className="display-1 font-weight-bold mb-4">Alternative Rose™</h1>
              <p className="lead mb-5">How's it going?</p>
              <a href="https://altrose.juandagarcia.com/" className="btn btn-danger">
                Shop now
              </a>
            </div>
            <div className="col-md-6 img-container align-self-center h-100">
              {/* <img
                src="imagenes/BucketHat_Prueba.png"
                id="hero-img"
                className="position-absolute"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
