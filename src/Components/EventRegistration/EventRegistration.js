import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {UserContext} from "../../App";

const EventRegistration = () => {
    const [loggedInUser] = useContext(UserContext);
    let { eventname } = useParams();
    const history = useHistory();

    const reditecToRegisteredEventsList = (result) => {
        if(result){
            history.push('/registeredevents');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const eventRegister = () => {
            //let url = "http://localhost:5000/";
            let url = "https://volunteer2020j2.herokuapp.com/";

            let fullName = document.getElementById("fullName").value;
            let email = document.getElementById("email").value;
            let date = document.getElementById("date").value;
            let description = document.getElementById("description").value;
            let eventName = document.getElementById("eventName").value;

            const data = {
                "fullName": fullName,
                "email": email,
                "date": date,
                "description": description,
                "eventName": eventName
            };

            fetch(url+'addEventRegistration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => reditecToRegisteredEventsList(data));

    }

    return (
        <div className="offset-4 col-sm-4 text-center">
            <div className="card">
                <div className="card-body">
                    <p><b>Register as a Volunteer</b></p>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name" id="fullName" value={loggedInUser.name} readOnly/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username or Email" id="email" value={loggedInUser.email} readOnly/>
                        </div>

                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Date" id="date"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Description" id="description"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Event Name" value={eventname} id="eventName" readOnly/>
                        </div>

                        <button type="button" className="btn btn-primary btn-block" onClick={() => eventRegister()}>Registration</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EventRegistration;
