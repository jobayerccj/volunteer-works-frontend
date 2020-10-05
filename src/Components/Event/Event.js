import React from 'react';
import {Link} from "react-router-dom";
import './Event.css';

const Event = (props) => {
    const { name, imgName } = props.event;
    return (
        <div className="col-md-3">
            <div className="card mb-3 shadow-sm" id="card1">
                <Link  to={`/eventregistration/${name}`}>
                    <div className="card-body">
                        <img src={`./images/other/${ imgName }`} alt="card1" style={{width: "100%"}}/>
                        <button className="btn btn-warning btn-block text-white">{ name }</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Event;
