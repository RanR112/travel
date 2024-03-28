import React from 'react'
import './footer.css'
import video2 from '../../Assets/video.mp4'
import { FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";


const Footer = () => {
    return (
    <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type='video/mp4'></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input type="email" placeholder='Enter Email Address' />
                    <button className="btn flex" type='submit'>
                        SEND <FiSend className='icon'/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className='logo flex'>
                            Travel.
                        </a>
                    </div>

                    <div className="footerParagraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus illo at atque accusantium similique, eaque deserunt. Alias eum voluptate maiores necessitatibus minus pariatur dignissimos assumenda ut odit, molestiae blanditiis.
                    </div>

                    <div className="footerSocials">
                        <FaXTwitter className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaFacebookSquare className='icon'/>
                        <AiOutlineYoutube className='icon'/>
                    </div>
                </div>

                <div className="footerLinks grid">
                    {/* Group 1 */}
                    <div className="linkGroup">
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
                    <div className="linkGroup">
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
                    <small>BEST TRAVEL WEBSITE</small>
                    <small>COPYRIGHTS RESERVED - RANDY 2024</small>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer