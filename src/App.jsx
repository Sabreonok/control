import { useState } from 'react'
import Header from './Components/Header/Header';
import what from './what.json'
import Post from './Components/Post/Post';

import './style/App.scss'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import { Cards, Create, Info } from "./pages"

function App() {
  const [arr, setArr] = useState(what)
  const addPost = (userId, title, body) => {
    setArr([...arr, { userId, title, body}])
  };

  return (
    <>
    
     <Header addPost={addPost} arr={arr}></Header>

     
     
    </>
  )
}

export default App
