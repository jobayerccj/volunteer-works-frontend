import React from 'react';

const RegisteredItem = (props) => {
    //let url = "http://localhost:5000/";
    let url = "https://volunteer2020j2.herokuapp.com/";

    const {_id, fullName, email,date, eventName} = props.event;
    const deleteItem = (id)=>{
        fetch(url + 'deleteregistration/'+id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.location.reload(false);
                }
            })
    };

    return (
        <tr>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{eventName}</td>
            <td><button onClick={() => deleteItem(_id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default RegisteredItem;
