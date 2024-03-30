import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video.mp4'
import { FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import logo from "../../Assets/logoo.png"

import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {
     // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
    <section className="footer">
        <div className="layer"></div>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>

        <div className="secContent container">
            <div className="contactDiv flex" id='Contact'>
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Send us a feedback</h2>
                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder='Enter feedback here...' />
                    <button data-aos="fade-up" className="btn flex" type='submit'>
                        SEND <FiSend className='icon'/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex" id='About'>
                    <div className="logoDiv">
                        <img data-aos="fade-up" src={logo} alt="logo" className='icon'/>
                        <h4 data-aos="fade-up" className='logo flex'>West Java Tour</h4>
                    </div>

                    <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus illo at atque accusantium similique, eaque deserunt. Alias eum voluptate maiores necessitatibus minus pariatur dignissimos assumenda ut odit, molestiae blanditiis.
                    </div>

                    <div data-aos="fade-up" className="footerSocials">
                        <FaInstagram className='icon'/>
                        <FaFacebookSquare className='icon'/>
                        <FaXTwitter className='icon'/>
                        <AiOutlineYoutube className='icon'/>
                    </div>
                </div>

                <div className="footerLinks grid">
                    {/* Group 1 */}
                    <div data-aos="fade-up" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Services
                        </li>
                        
                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Insurance
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Agency
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Tourism
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Payment
                        </li>

                    </div>
                    {/* Group 2 */}
                    <div data-aos="fade-up" className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Bookings
                        </li>
                        
                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Rentcars
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Reddoorz
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Traveloka
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Agoda
                        </li>

                    </div>
                    
                </div>

                <div className="footerDiv flex">
                    <small>&copy; 2024 West Java Tour. All Right Reserved.</small>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer