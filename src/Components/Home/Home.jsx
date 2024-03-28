import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video3.mp4'
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])



    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">Rp 5.000.000</h3>
                            <div className="input flex">
                                <input type="range" max="5000" min="1000"/>
                            </div>

                        </div>
                        
                    </div>

                    <div className="searchOptions flex">
                    <HiFilter className='icon'/>
                    <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon'/>
                        <FiInstagram className='icon'/>
                    </div>
                    <div className="leftIcons">
                        <FaListUl className='icon'/>
                        <TbApps className='icon'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home