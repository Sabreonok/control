import React from 'react'
import './header.scss'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import { Cards, Create, Info } from "../../pages"

export default function Header(props) {
    return (
        <Router>
            <header>
                <div className='header_container'>
                    <div className="container flex-wrapper">
                        <div className="logo-wrapper">
                            <a className="logo" href="#">Page</a>
                            <p className="slogan">Hello</p>
                        </div>
                        <nav>
                            <ul>
                                <li><NavLink to="/cards">Cards</NavLink></li>
                                <li><NavLink to="/create">Create</NavLink></li>
                                <li><NavLink to="/info">Info</NavLink></li>

                            </ul>
                        </nav>
                    </div>
                </div>
                <Routes>
                    <Route path='/cards' element={<Cards arr={props.arr}/>} />
                    <Route path='/create' element={<Create addPost={props.addPost}/>} />
                    <Route path='/info' element={<Info arr={props.arr}/>} />

                </Routes>
                
            </header>
            </Router>
        
    )
}
