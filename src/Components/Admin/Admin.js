import React, {useEffect, useState} from 'react';
import RegisteredItem from "../RegisteredItem/RegisteredItem";
import {Link} from "react-router-dom";

const Admin = () => {
    //let url = "http://localhost:5000/";
    let url = "https://volunteer2020j2.herokuapp.com/";
    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch(url + 'admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                //authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegisteredEvents(data));
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li><Link to="/admin">Volunteer register list</Link></li>
                        <li><Link to="/addevent">Add Event</Link> </li>
                    </ul>
                </div>

                <div className="col-md-9">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registrating Date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registeredEvents.map(event => <RegisteredItem key={event._id} event={event}/>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Admin;
