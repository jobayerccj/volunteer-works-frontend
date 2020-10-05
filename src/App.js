import React, {createContext, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EventRegistration from "./Components/EventRegistration/EventRegistration";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import RegisteredEvents from "./Components/RegisteredEvents/RegisteredEvents";
import Admin from "./Components/Admin/Admin";
import AddEvent from "./Components/AddEvent/AddEvent";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    //const [events, setEvents] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/events', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             //authorization: `Bearer ${sessionStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setEvents(data));
    // },[])

  return (

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Header/>

              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route path="/login">
                      <Login />
                  </Route>

                  <Route path="/admin">
                      <Admin />
                  </Route>

                  <Route path="/addevent">
                      <AddEvent />
                  </Route>

                  <PrivateRoute path="/eventregistration/:eventname">
                      <EventRegistration/>
                  </PrivateRoute>

                  <PrivateRoute path="/registeredevents">
                      <RegisteredEvents/>
                  </PrivateRoute>

              </Switch>

              {/*<p>Volunteer Works :: Under Construction</p>*/}

              {/*      {*/}
              {/*          events.map((event) => {*/}
              {/*             return <li key={event._id}>{ event.name }</li>*/}
              {/*          })*/}
              {/*      }*/}
          </Router>

      </UserContext.Provider>

  );
}

export default App;
