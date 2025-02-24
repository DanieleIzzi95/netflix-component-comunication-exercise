import AccountImg from "./components/accountImg"
import Logo from "./components/logo"
export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg pt-md-2 px-1 px-md-3 fixed-top">
                <div className="container-fluid">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <i className="bi bi-list navbar-toggler-icon d-flex justify-content-center align-items-center fs-2"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100 mx-auto">
                            <a className="nav-link c-text-white small-body" aria-current="page" href="#">Home</a>
                            <a className="nav-link c-text-white small-body" href="#">Serie TV</a>
                            <a className="nav-link c-text-white small-body" href="#">Film</a>
                            <a className="nav-link c-text-white small-body" >Nuovi e popolari</a>
                            <a className="nav-link c-text-white small-body" >La mia lista</a>
                            <a className="nav-link c-text-white small-body" >Sfoglia per lingua</a>
                        </div>
                        <AccountImg />
                    </div>
                </div>
            </nav>
        </>
    )
}