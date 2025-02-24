import React from "react";

export default function Modal({ movie, onClose }) {
    return (
        <div className="modal fade show d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content c-bg-black">
                    <div className="p-0 m-0">
                        <img className="img-fluid modal-img" src={movie.url} alt={movie.title} />
                        <button className="bg-transparent border-0 button-close pe-3 pt-2" onClick={onClose}><i className="bi bi-x-circle c-text-lightGrey fs-5"></i></button>
                        <div className="ps-3 mb-2 mt-4">
                            <h3 className="c-text-white">{movie.title}</h3>
                        </div>

                        <div className="container-fluid p-3 d-flex">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-12 d-flex gap-3">
                                        <p className="caption c-text-lighterGrey">{movie.release_year}</p>
                                        <p className="caption c-text-lighterGrey">{movie.seasons} Stagioni</p>
                                        <p className="caption c-text-lighterGrey">{movie.genre}</p>
                                        <p className="caption c-text-lighterGrey">{movie.rating}</p>
                                    </div>
                                    <div className="row">
                                        <p className="regular-body c-text-lighterGrey">{movie.summary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12 d-flex">
                                        <p className="caption c-text-lightGrey me-3">Cast:</p>
                                        <p className="caption c-text-lighterGrey">{movie.cast.join(" , ")}</p>
                                    </div>
                                    <div className="col-12 d-flex">
                                        <p className="caption c-text-lightGrey me-3">Producer</p>
                                        <p className="caption c-text-lighterGrey">{movie.producer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
