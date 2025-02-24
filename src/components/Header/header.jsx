import ButtonInfo from "./components/Buttons/buttonInfo";
import ButtonPlay from "./components/Buttons/buttonPlay";
import LogoStrangerThings from "./components/LogoStrangerThings/logoStrangerThings";
import db from "../../utils/db";

export default function Header(){
    return(
        <>
        <header className="container-fluid position-relative header-vh header-bg d-flex align-items-end pb-5">
            <div className="row px-4 mb-3 pb-5">
                <div className="col-6 d-flex flex-column justify-content-end">
                    <LogoStrangerThings/>
                    <div className="d-flex mb-5 gap-3 mt-4">
                        <ButtonPlay/>
                        <ButtonInfo db= {db}/>
                    </div>
            </div>
                    <div className="row">
                        <div className="col-5 mb-5">
                            <h4 className="c-text-white small-title d-flex align-items-center">
                                <img className="top-ten me-2" src="src/assets/media/Icons/top10.png" alt="icona top 10" />
                                Top 10 tra le serieTV in italia</h4>
                            <p className="c-text-white regular-body">Un gruppo di bambini si imbarca in una ricerca misteriosa per scoprire la verità dietro la scomparsa di un loro amico, rivelando segreti soprannaturali.</p>
                        </div>
                    </div>
                    </div>
        </header>
        </>
    )
}