import React, {useEffect} from 'react'
import './main.css'
import Data from './data.json'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Main = () => {
     // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
    <section className="main container section" id='Main'>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                West Java destinations
            </h3>
        </div>

        <div className="secContent grid">

            {
                Data.map(({id, imgSrc, destTitle, location, tag, fees, loc, description}) => {
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="tag">
                                        <span>{tag}</span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <a href={loc}>
                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className='icon'/>
                                    </button>
                                </a>
                            </div>
                        </div>
                        )
                })
            }

        </div>

    </section>
    )
}

export default Main