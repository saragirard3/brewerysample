export default function Footer(){
    return(
        <div>
            <footer className="navbar fixed-bottom navbar-light">
                <div className="container-fluid" id="footerCSS">
                    <a className="navbar-brand" id="bizTitle" href={`/brewerysample/`}>Girard Brewery by Girard Techie</a>
                    <div className="nav justify-content-center">&copy; 2022</div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item refContr" id="reference">
                                <a className="nav-link" href={`/brewerysample/RefAndComp`}>References & Contributions</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <a href="https://g.dev/girardtechie" target="_blank" className="me-3 text-reset">
                            <i className="fa-brands fa-google"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sara3girard/" target="_blank" className="me-3 text-reset">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/saragirard3" target="_blank" className="me-3 text-reset">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}