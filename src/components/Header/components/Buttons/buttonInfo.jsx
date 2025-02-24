import LogoStrangerThings from "../LogoStrangerThings/logoStrangerThings";
import ButtonRiproduci from "./buttonRiproduci";



export default function ButtonInfo() {
    return (
        <>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn-info  d-flex align-items-center"><i className="bi bi-info-circle fs-5 me-2"></i>Altre info</button>

            {/* modale */}
            {/* <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content c-bg-black"> */}

                        {/* modal body */}
                        {/* <div className="p-0 m-0">
                            <img className="img-fluid modal-img" src="src/assets/media/Header-img/stranger-things.jpg" alt="" />
                                <div className="w-75 mb-4 ps-3">
                                    <LogoStrangerThings />
                                </div>
                            <div className="ps-3 d-flex gap-3">
                                <ButtonRiproduci />
                                <i className="bi bi-plus-circle c-text-white fs-2"></i>
                                <i className="bi bi-hand-thumbs-up c-text-white fs-2"></i>
                            </div>
                            <div className="container-fluid p-3 d-flex">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-12 d-flex gap-3">
                                            <p className="caption c-text-lighterGrey">2022</p>
                                            <p className="caption c-text-lighterGrey">4 Stagioni</p>
                                            <p className="caption c-text-lighterGrey">Sci-fi,  Horror, Drama</p>
                                            <p className="caption c-text-lighterGrey">TV-14</p>
                                        </div>
                                        <div className="row">
                                            <p className="regular-body c-text-lighterGrey">Un gruppo di bambini si imbarca in una ricerca misteriosa per scoprire la verità dietro la scomparsa di un loro amico, rivelando segreti soprannaturali.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            <p className="caption c-text-lightGrey me-3">Cast:</p>
                                            <p className="caption c-text-lighterGrey">Winona Ryder, Millie Bobby Brown, David Harbour</p>
                                        </div>
                                        <div className="col-12 d-flex">
                                            <p className="caption c-text-lightGrey me-3">Producer</p>
                                            <p className="caption c-text-lighterGrey">The Duffer Brothers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    )
}