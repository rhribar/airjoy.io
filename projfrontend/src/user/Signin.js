import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
import Navigation from '../core/Navigation';

/* Creating signin component here. */

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "", // test@test.com
    password: "", // test
    error: "",
    success: false,
    loading: false,
  });
  const {name, email, password, error, success, loading, didRedirect } =
    values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSumit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        /* console.log("DATA", data); */
        if (data.token) {
          //let sessionToken = data.token;
          authenticate(data, () => {
            console.log("TOKEN ADDED");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({
            ...values,
            loading: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="signin"> {/* className="row" */}
        <div className="signin__form">{/* className="col-md-6 offset-sm-3 text-left" */}
          <form className="form">
            <div className="form__group"> {/* className="form-group" */}
               {/* className="text-light" */}
              {/* className="form-control" */}
              {/* <input
                name="email"
                
                value={email}
                onChange={handleChange("email")}
                type="text"
              /> */}
              <input type="email" className="form__input" value={email} onChange={handleChange("email")} placeholder="Email address" id="email" required></input>
              <label for="email" className="form__label">Email Address</label>
            </div>
            <div className="form__group"> {/* className="form-group" */}
              <input name="password" type="password" className="form__input" value={password} onChange={handleChange("password")} placeholder="Password" id="email" required></input>
              <label for="password" className="form__label">Password</label>

              {/*<label>password</label>  { className="text-light" */}
              {/* className="form-control */}
              {/* <input
                name="password"
                
                value={password}
                onChange={handleChange("password")}
                type="password"
              /> */}
            </div>
            <div className="signin__form__button">
              <button
                onClick={onSumit}
                className="button navigation__buttons--blue button--page"
              >
              {/* className="btn btn-success btn-block" */}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navigation/>
      <Base title="Welcome to sign in page!" description="">
      {loadingMessage()}

      {signInForm()}
      {/* <p > {/* className="text-center" */}
       {/*  {JSON.stringify(values)} </p> */} 

    </Base>
    </div>
    
  );
};
//{performRedirect()}
export default Signin;
