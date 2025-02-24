import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import db from "../../../../../utils/db.js";
import Modal from "../../Modal.jsx";

export function MultipleItems() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // modale del film selezionato
    const openMovieModal = (movie) => {
        setSelectedMovie(movie);
    };

    // settings dello slider react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };

    // slider
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {db.map((movie) => (
                        <div className="px-2"
                            key={movie.id}
                            onClick={() => openMovieModal(movie)}
                        >
                            <img
                                className="img-fluid c-card rounded-3"
                                src={movie.url}
                                alt={movie.title}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* funzione per chiudere la modale */}
            {selectedMovie && (
                <Modal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </>
    );
}

export default MultipleItems;
