import React, {useEffect, useState, useCallback} from 'react'
import './main.css'
import Data from './data.json'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import nodest from '../../Assets/nodata.png'



const Main = ({ filter }) => {
    // State untuk menyimpan destinasi yang telah difilter
    const [filtered, setFiltered] = useState([]);
    

    // Fungsi untuk menyaring destinasi berdasarkan filter
    const applyFilter = useCallback(() => {
        const filteredData = Data.filter(destination => {


            // Memeriksa apakah filter kosong
            if (Object.values(filter).every(value => value === '')) {
                return true; // Mengembalikan true jika tidak ada filter yang diterapkan
            }

            // Mencocokkan filter
            if (!filter.fees) {
                return (
                    (filter.location === '' || destination.location.toLowerCase().includes(filter.location.toLowerCase())) &&
                    (filter.tag === '' || destination.tag.toLowerCase() === filter.tag.toLowerCase())
                );
            }
            // Memisahkan range harga
            const priceRange = filter.fees.split(' - ');
            const lowerPrice = parseInt(priceRange[0].replace('Rp ', '').replace('.', ''));
            const upperPrice = parseInt(priceRange[1].replace('Rp ', '').replace('.', ''));

            // Mengubah harga destinasi menjadi angka
            const destinationPrice = parseInt(destination.fees.replace('Rp ', '').replace('.', ''));

            // Mengembalikan nilai filter
            return (
                (filter.location === '' || destination.location.toLowerCase().includes(filter.location.toLowerCase())) &&
                (filter.tag === '' || destination.tag.toLowerCase() === filter.tag.toLowerCase()) &&
                (filter.fees === '' || (destinationPrice >= lowerPrice && destinationPrice <= upperPrice))
            );
        });
        setFiltered(filteredData);
    }, [filter]);

    useEffect(() => {
        applyFilter();
    }, [applyFilter]);

    

    return (
    <section className="main container section" id='Main'>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Destinasi Wisata
            </h3>
        </div>

        <div className="secContent grid">

            {filtered.length > 0 ? (
                filtered.map(({ id, imgSrc, destTitle, location, tag, fees, loc, description }) => {
                    return(
                        <div key={id} data-aos="fade-up" data-aos-delay='100' className="singleDestination">
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
                                        DETAIL <LuClipboardCheck className='icon'/>
                                    </button>
                                </a>
                            </div>
                        </div>
                        )
                })
                ) : (
                    <div data-aos="fade-up" className="noData">
                        <img src={nodest} alt="no destinations"/>
                        <h3>Oops!! Destinasi Anda Tidak Tersedia</h3>
                    </div>
            )}

        </div>

    </section>
    )
}

export default Main