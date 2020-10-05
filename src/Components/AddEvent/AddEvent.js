import React from 'react';
import {Link, useHistory} from "react-router-dom";

const AddEvent = () => {
    const history = useHistory();
    const imageList = [
        'animalShelter.png',
        'babySit.png',
        'birdHouse.png',
        'childSupport.png',
        'cleanWater.png',
        'clearnPark.png',
        'clothSwap.png',
        'driveSafety.png',
        'extraVolunteer.png',
        'foodCharity.png',
        'goodEducation.png',
        'ITHelp.png',
        'libraryBooks.png',
        'musicLessons.png',
        'newBooks.png',
        'refuseShelter.png',
        'riverClean.png',
        'schoolSuffiles.png',
        'studyGroup.png',
        'stuffedAnimals.png',
        'voteRegister.png'
    ];

    const reditecToEventsList = (result) => {
        if(result){
            history.push('/');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const saveEvent = ()=>{
        //let url = "http://localhost:5000/";
        let url = "https://volunteer2020j2.herokuapp.com/";

        let imgNumber = Math.floor(Math.random() * 20);
        const data = {
            name:document.getElementById("title").value,
            description: document.getElementById("description").value,
            imgName:imageList[imgNumber],
            date:document.getElementById("date").value
        }

        fetch(url + 'addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => reditecToEventsList(data));

    };
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
                    <form>
                    <div className="col-md-6 float-left">
                        <div className="form-group">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" name="title" placeholder="Event Title" className="form-control" id="title" required/>
                        </div>
                    </div>

                    <div className="col-md-6 float-left">
                        <div className="form-group">
                            <label htmlFor="date">Event Date</label>
                            <input type="date" name="date" placeholder="Event Date" className="form-control" id="date" required/>
                        </div>
                    </div>

                    <div className="col-md-6 float-left">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description"></textarea>
                        </div>
                    </div>

                    <div className="col-md-6 float-left">
                        <div className="form-group">
                            <label htmlFor="banner">Banner</label>
                            <br/>
                            <input type="file" name="banner"/>
                        </div>
                    </div>

                    <div className="col-md-12 float-left">
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={() => saveEvent()}>Save</button>
                        </div>
                    </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddEvent;
