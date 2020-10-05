import React, { useContext } from 'react';
import './Login.css';
import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase/app";
import {UserContext} from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
import "firebase/auth";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                handleResponse(res, true);
            })
            .catch(error => {

            })
    }

    const handleResponse = (res, redirect) =>{
        const {displayName, email} = res.user;

        const userInfo = {
            isSignedIn: true,
            name: displayName,
            email: email
        };
        setLoggedInUser(userInfo);

        if(redirect){
            history.replace(from);
        }

    }

    return (
        <div className="offset-4 col-sm-4 text-center">
            <div className="card">
                <div className="card-body">
                    <h4>Login with</h4>
                    <button className="social-login-btn" onClick={() => googleLogin() }>
                        Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;
