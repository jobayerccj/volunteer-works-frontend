import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../App";
import RegisteredEvent from "../RegisteredEvent/RegisteredEvent";

const RegisteredEvents = () => {
    //let url = "http://localhost:5000/";
    let url = "https://volunteer2020j2.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);
    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch(url + 'registeredevents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'email': loggedInUser.email
                //authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegisteredEvents(data));
    },[]);

    return (
        <div className="container">
            <div className="row">
                {
                    registeredEvents.map(event => {
                        return <RegisteredEvent event={event} key={event._id}/>
                        //return <li key={event._id}>{ event.eventName }</li>
                    })
                }
            </div>
        </div>
    );
};

export default RegisteredEvents;
