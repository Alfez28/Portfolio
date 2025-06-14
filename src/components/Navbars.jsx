import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbars() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mx-5 px-5" to="/"><img className='logo' src="./assets/img/aklogo-resize.png" alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-5 d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 gap-5 " >
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/myskills">My-Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                
                    </div>
                </div>
            </nav>

            
        </>
    )
}
