import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/PageNotFound.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Alt Rose™ - Contact";
  }, []);

  return (
    <React.Fragment>
      <section className="Container_not-Found">
        <div>
          <h1 className="h1-404">Our Apologies!</h1>
          <br />
          <h1 className="h1-404-details">This site is under construction.</h1>

          <Link to="/" className="btn btn-danger">
            Back to the main page
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
