import React, {useEffect, useState} from 'react'
import './home.css'
import video from '../../Assets/video3.mp4'
import { GrLocation } from "react-icons/gr"
import { FaSearch } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = ({ setFilter }) => {
    // Hook scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    // State untuk menyimpan nilai input dari form
    const [search, setSearch] = useState('');
    const [selectedTag, setSelectedTag] = useState('Semua Kategori');
    const [selectedPrice, setSelectedPrice] = useState('Semua Harga');

    // Fungsi untuk menangani perubahan input dari form dan mengirimkan nilai filter ke komponen Main
    const handleSearch = () => {
        const filter = {
            location: search,
            tag: selectedTag !== 'Semua Kategori' ? selectedTag : '',
            fees: selectedPrice !== 'Semua Harga' ? selectedPrice : ''
        };
        setFilter(filter);
    };



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
                        <label htmlFor="city">Cari Lokasi Destinasi Anda:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Cth: Bandung' value={search} onChange={(e) => setSearch(e.target.value)}/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>
                    <div className="tagInput">
                        <label htmlFor="tag">Cari Berdasarkan Kategori:</label>
                        <div className="input flex">
                            <select className="tagForm" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                                <option selected>Semua Kategori</option>
                                <option value="Wisata Alam">Wisata Alam</option>
                                <option value="Kebun Binatang">Kebun Binatang</option>
                                <option value="Kebun Botani">Kebun Botani</option>
                            </select>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total">
                            <label htmlFor="price">Cari Berdasarkan Harga:</label>
                            <div className="input flex">
                                <select className="tagForm" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                                    <option selected>Semua Harga</option>
                                    <option value="Rp 0 - Rp 50.000">Rp 0 - Rp 50.000</option>
                                    <option value="Rp 50.000 - Rp 100.000">Rp 50.000 - Rp 100.000</option>
                                    <option value="Rp 100.000 - Rp 200.000">Rp 100.000 - Rp 200.000</option>
                                    <option value="Rp 200.000 - Rp 500.000">Rp 200.000 - Rp 500.000</option>
                                </select>
                            </div>

                        </div>
                        
                    </div>

                    <a href="#Main">
                        <div className="searchOptions flex" onClick={handleSearch}>
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