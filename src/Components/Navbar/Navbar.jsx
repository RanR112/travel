import React, {useState} from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import logo from "../../Assets/Logo.png"

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // Function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    // Function to remove navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
    <section className='navBarSection'>
        <header className="header flex">

            <div className="logoDiv">
                <span className="logo flex">
                    <img src={logo} alt="logo" className='icon'/><h1> WJ Tour</h1>
                </span>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#Home" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#Main" className="navLink">Tour</a>
                    </li>

                    <li className="navItem">
                        <a href="#Contact" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#About" className="navLink">Contact</a>
                    </li>

                    <li className="navItem">
                        <span className="dark">Dark</span>
                    </li>

                    <div className="mode">
                        <label className="switch">-
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        
                    </div>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
            </div>

        </header>
    </section>
    )
}

export default Navbar
