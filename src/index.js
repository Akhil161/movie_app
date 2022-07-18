import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Custmor from './Custmor';
import Navbar from './Navbar';
import Rental from './Rental';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Navbar/>
       <Switch>

       <Route path="/customer">
            <Custmor />
        </Route>

        <Route path="/rental">
            <Rental />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/">
            <App />
        </Route>

        
        </Switch>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
