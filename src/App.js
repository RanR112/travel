import React, {useState, useEffect} from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import useLocalStorage from 'use-local-storage';

import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {
    // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    // Menentukan tema default
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // State untuk menetapkan tema
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    
    const toggleTheme = newTheme => {
        setTheme(newTheme);
    };


    const [filter, setFilter] = useState({
        location: '',
        tag: '',
        fees: ''
    });

    return (
        <div className="App" data-theme={theme}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Home setFilter={setFilter} theme={theme}/>
            <Main filter={filter} theme={theme}/>
            <Footer theme={theme}/>
        </div>
    )
}

export default App