import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Video3.mp4'
import { GrLocation } from "react-icons/gr"
import { FaSearch } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])



    return (
        <section className="home" id='Home'>
            <div className="layer"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Services
                    </span>
                    
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search by destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Search by tag:</label>
                        <div className="input flex">
                            <select className="tagForm">
                                <option selected>All Tags</option>
                                <option value="Wisata Alam">Wisata Alam</option>
                                <option value="Kebun Binatang">Kebun Binatang</option>
                                <option value="Kebun Botani">Kebun Botani</option>
                            </select>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total">
                            <label htmlFor="price">Search by price:</label>
                            <div className="input flex">
                                <select className="tagForm">
                                    <option selected>All Prices</option>
                                    <option value="Rp 0 - Rp 50.000">Rp 0 - Rp 50.000</option>
                                    <option value="Rp 50.000 - Rp 100.000">Rp 50.000 - Rp 100.000</option>
                                    <option value="Rp 100.000 - Rp 200.000">Rp 100.000 - Rp 200.000</option>
                                    <option value="Rp 200.000 - Rp 500.000">Rp 200.000 - Rp 500.000</option>
                                </select>
                            </div>

                        </div>
                        
                    </div>

                    <a href="#Main">
                        <div className="searchOptions flex">
                                <FaSearch className='icon'/>
                                <span>SEARCH</span>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Home