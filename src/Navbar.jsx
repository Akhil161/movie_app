import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    let navItem = document.querySelectorAll(".nav-link");
    
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click",function(e){

            for (let j = 0; j < navItem.length; j++) {
                navItem[j].classList.remove("active");
                //console.log(navItem[j]);
                
            }
            e.target.classList.add("active");
        });
        
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MovieRentals</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customer">Customer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rental">Rentals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
