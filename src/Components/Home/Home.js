import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Event from "../Event/Event";

const Home = () => {
    const [events, setEvents] = useState([]);
    //let url = "http://localhost:5000/";
    let url = "https://volunteer2020j2.herokuapp.com/";

    useEffect(() => {
        fetch(url+'events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                //authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setEvents(data));
    },[]);

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
                    <form className="form-inline justify-content-center">
                        <div className="form-group mb-2">

                            <input type="text" readOnly className="form-control-plaintext" placeholder="Search..."
                                   />
                        </div>

                        <button type="submit" className="btn btn-primary mb-2">Search</button>
                    </form>
                    <br/>
                </div>

            </div>

            <div className="card-deck mb-3 text-center">
                {
                    events.map(event => {
                        return <Event key={event._id} event={event}/>
                    })
                }
            </div>
        </div>
    );
};

export default Home;
