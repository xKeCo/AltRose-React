import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
import Avatar from "../components/Avatar";
import { onAuthStateChanged } from "../firebase/client";
import { Dropdown } from "react-bootstrap";
import { LogOut } from "../firebase/client";
// import { Redirect } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  // if (!user) {
  //   return <Redirect to="/Login" />;
  // }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand text-light font-weight-bold">
          AltRose™
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item mr-2">
              <Link to="/" className="nav-link text-light active">
                New Arrivals
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/" className="nav-link text-light" href="#">
                Shop
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/" className="nav-link text-light" href="#">
                About
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/Contacto" className="nav-link text-light" href="#">
                Contact
              </Link>
            </li>
            {user === null && (
              <li className="nav-item mr-3 ">
                <Link to="/Login" className="nav-link  text-light" href="#">
                  Login
                </Link>
              </li>
            )}

            {user && user.avatar && (
              <div>
                <Dropdown className=" ">
                  <Dropdown.Toggle className="menu-usuario">
                    <Avatar src={user.avatar} alt={"Avatar"} text={user.username} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown">
                      <Link to="/" className="nav-item text-decoration-none items-dropdown">
                        Inicio
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown">
                      <Link to="/Contacto" className="nav-item text-decoration-none items-dropdown">
                        Other thing
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={LogOut} className="dropdown text-danger">
                      Cerrar sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
