import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div >

        {/* <img src={PageNotFound} style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} /> */}
        <h1 className="notfound-content">
            <center><Link to="/">Return to Home Page</Link></center>
            <br/>
            <br/>
             404 Page Not Found

            

        </h1>

    </div>
);
export default NotFound;