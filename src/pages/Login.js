import React, { useState, useEffect } from "react";
import "./styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";
import GithubButton from "../components/buttons/GithubButton";
import FacebookButton from "../components/buttons/FacebookButton";
import GoogleButton from "../components/buttons/GoogleButton";
import GithubIcon from "../components/buttons/icons/GithubIcon";
import FacebookIcon from "../components/buttons/icons/FacebookIcon";
import GoogleIcon from "../components/buttons/icons/GoogleIcon";
import {
  LogOut,
  loginWithFacebook,
  loginWithGoogle,
  loginWithGithub,
  onAuthStateChanged,
} from "../firebase/client";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

export default function Login() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
    document.title = "Alt Rose™ - Log In";
  }, []);

  const handleClickGithub = () => {
    loginWithGithub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickFacebook = () => {
    loginWithFacebook()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickGoogle = () => {
    loginWithGoogle()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="text-center">
        <div className="container-Login">
          <h2 className="Login-Welcome">What's Up?</h2>
          <form className="form-signin">
            <div className="form-group">
              {user === null && (
                <label className="sr-only" htmlFor="inputEmail">
                  Email address
                </label>
              )}
              {user === null && (
                <input
                  type="email"
                  className="form-control Login-input"
                  placeholder="Email address"
                />
              )}
            </div>
            <div className="form-group">
              {user === null && (
                <label className="sr-only" htmlFor="inputPassWord">
                  PassWord
                </label>
              )}
              {user === null && (
                <input
                  type="password"
                  className="form-control Login-input"
                  placeholder="PassWord"
                />
              )}
            </div>
            {user === null && (
              <button type="submit" className="btn btn-danger mb-3">
                Submit
              </button>
            )}
          </form>

          {user === null && <h6> o </h6>}
          <div className="Buttons-Container">
            {user === null && (
              <GithubButton onClick={handleClickGithub}>
                <GithubIcon width={36} height={36}></GithubIcon>
              </GithubButton>
            )}

            {user === null && (
              <FacebookButton onClick={handleClickFacebook}>
                <FacebookIcon fill="#fff" width={36} height={36}></FacebookIcon>
              </FacebookButton>
            )}

            {user === null && (
              <GoogleButton onClick={handleClickGoogle}>
                <GoogleIcon width={36} height={36}></GoogleIcon>
              </GoogleButton>
            )}
            {user && user.avatar && (
              <div>
                <Avatar src={user.avatar} alt={"Avatar"} text={user.username} />
                <Link to="/" className="btn-colorWhite btn btn-sm mr-4">
                  Volver al inicio
                </Link>
                <button className=" btn-sm mt-5" onClick={LogOut}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
