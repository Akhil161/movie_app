import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    let navItem = document.querySelectorAll(".nav-link");
    console.log(document.querySelectorAll(".nav-link"));
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click",function(e){

            for (let j = 0; j < navItem.length; j++) {
                navItem[j].classList.remove("active");
                
            }
            e.currentTarget.classList.add("active");
        });
        
    }
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">MovieRentals</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Movies</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/customer">Customer</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/rental">Rentals</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
