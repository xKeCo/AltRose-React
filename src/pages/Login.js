import React, { useState, useEffect } from "react";
import "./styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";
import GithubButton from "../components/buttons/GithubButton";
import GithubIcon from "../components/buttons/icons/GithubIcon";
import { loginWithGithub, onAuthStateChanged } from "../firebase/client";
import Avatar from "../components/Avatar";

export default function Login() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub()
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
              <label className="sr-only" htmlFor="inputEmail">
                Email address
              </label>
              <input
                type="email"
                className="form-control Login-input"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputPassWord">
                PassWord
              </label>
              <input type="password" className="form-control Login-input" placeholder="PassWord" />
            </div>
            <button type="submit" className="btn btn-danger mb-3">
              Submit
            </button>
          </form>

          <div>
            {user === null && (
              <GithubButton onClick={handleClick}>
                <GithubIcon width={28} height={28}></GithubIcon>
                Login with GitHub
              </GithubButton>
            )}

            {user && user.avatar && (
              <div>
                <Avatar src={user.avatar} alt={user.username} text={user.username} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
