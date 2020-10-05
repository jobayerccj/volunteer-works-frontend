import React from 'react';
import {useHistory} from "react-router-dom";

const RegisteredEvent = (props) => {
    //let url = "http://localhost:5000/";
    let url = "https://volunteer2020j2.herokuapp.com/";

    const { _id, eventName, date } = props.event;
    const history = useHistory();

    const reditecToRegisteredEventsList = (result) => {
        if(result){
            history.push('/registeredevents');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const deleteRegistration = (id)=>{
        fetch(url + 'deleteregistration/'+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                reditecToRegisteredEventsList(result)
            }
        })
    }
    return (
        <div className="col-md-6 text-center">
            <h3>{eventName}</h3>
            <p>{ date }</p>
            <button className="btn btn-secondary" onClick={()=> deleteRegistration(_id)}>Cancel</button>
        </div>
    );
};

export default RegisteredEvent;
