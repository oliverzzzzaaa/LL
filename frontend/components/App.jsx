import React from "react";
import Navbar from "./nav_bar/navbar";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash';
import Feed from './feed/feed';
import Connections from './connections/connections'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NotFound from "../../public/notfound";


const App = () => (
    <div>
        {/* <div className="headerspace"><br/></div> */}
        <Link to="/" className="header-link">
            <div className="header-logo"></div>
            {/* <Navbar /> */}
        </Link>



        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path='/feed' component={Feed} />
            <ProtectedRoute exact path='/connections' component={Connections} />
            <AuthRoute component={NotFound} />
            <ProtectedRoute component={NotFound} />

        </Switch>

    </div>
);

export default App;