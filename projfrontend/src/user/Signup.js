import React, {useState} from 'react';
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper"; // automatically picks index file

/* Creating signup component here. */

const Signup = () => {

    // template for signup
    const [values, setValues] = useState ({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    })

    //extracting values from
    //destructuring
    const {name, email, password, error, success} = values;

    //making a higher order function, they are not easy to grab
    // multiple inputs, can change their value

    const handleChange = name => 
    event => {
        setValues({...values, error: false, [name]: event.target.value})
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false})
        signup({name,email, password})
        .then(data => {
            console.log("DATA", data);
            //not good for this
            if(data.email === email) {
                //resetting the fields to blank
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                })
            } else {
                setValues({
                    ...values,
                    error: true,
                    success: false
                })
            }
        })
        .catch(e => console.log(e)) // if you receive an error print that error

    }

    const successMessage = () => {
        return (
            <div className = "row">
                <div className= "col-md-6 offset-sm-3 text-left">
                    <div
                    className = "alert alert-success"
                    style = {{display: success ? "" : "none"}} // will be conditionally rendered
                    >
                        
                        New account created successfully. Please Login<Link to ="/signin">login now.</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className = "row">
                <div className= "col-md-6 offset-sm-3 text-left">
                    <div
                    className = "alert alert-danger"
                    style = {{display: error ? "" : "none"}} // will be conditionally rendered
                    >
                        Check all fields again!
                    </div>
                </div>
            </div>
        )
    }


    const signUpForm = () => {
        return(
            <div className ="row">
                <div className ="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className = "form-group">
                            <label className ="text-light">Name</label>
                            <input
                                className ="form-control"
                                value = {name}
                                onChange = {handleChange("name")}
                                type ="text"
                            />
                        </div>
                        <div className = "form-group">
                            <label className ="text-light">Email</label>
                            <input
                                className ="form-control"
                                value = {email}
                                onChange = {handleChange("email")}
                                type ="text"
                            />
                        </div>
                        <div className = "form-group">
                            <label className ="text-light">password</label>
                            <input
                                className ="form-control"
                                value = {password}
                                onChange = {handleChange("password")}
                                type ="password"
                            />
                        </div>
                        <button 
                        onClick = {onSubmit}
                        className = "btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        
        )
    }

    return (
        <Base title = "Sign Up Page" description ="A signup for LCO user!">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className = "text-white text-center">
           {JSON.stringify(values) }
            </p>
        </Base>
    );
};

export default Signup;