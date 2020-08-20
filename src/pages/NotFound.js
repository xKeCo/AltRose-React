import React from "react";
import { Link } from "react-router-dom";
import "./styles/PageNotFound.css";
import "bootstrap/dist/css/bootstrap.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <section className="Container_not-Found">
        <div>
          <h1 className="h1-404">404</h1>
          <br />
          <h1 className="h1-404-details">Page Not Found</h1>

          <Link to="/" className="btn btn-danger">
            Volver al inicio
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
