import React from "react";
import Navbar from "./nav_bar/navbar";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
    <div>

            <Link to="/" className="header-link">
                <div className="header-logo"></div>
            </Link>



        <Navbar />

        <h2>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </h2>


        <h3>Welcome to your professional community</h3>
    </div>
);

export default App;