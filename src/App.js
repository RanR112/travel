import React, {useState} from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {

    const [filter, setFilter] = useState({
        location: '',
        tag: '',
        fees: ''
    });

    return (
        <>
        <Navbar/>
        <Home setFilter={setFilter}/>
        <Main filter={filter}/>
        <Footer/>
        </>
    )
}

export default App