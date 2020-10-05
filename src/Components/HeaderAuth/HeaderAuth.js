import React from 'react';
import {Link} from "react-router-dom";

const HeaderAuth = () => {
    return (
        <div className="container text-center">
            <div className="col-md-12">

                <Link to="/">
                    <img className="my-0 mr-md-auto" src={"./images/logos/logo.png"} alt="volunteer works" style={{width: "15%"}}/>
                </Link>
                <br/><br/><br/>

            </div>


        </div>
    );
};

export default HeaderAuth;
