import logo from "../images/beersign.jpg";

export default function Main(){
    return(
        <div className={"main"}>
            <div className={"headerContent"}>
                <h1>Girard Brewery</h1>
                <img src={logo} alt='Beer Sign' />
            </div>

            <div className="container-fluid mainContent">
                <div className="row">
                    <div className="col">
                        <h2>Welcome!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Check out the site, then come down and enjoy a beer with us.</p>
                        <hr />
                        <p />
                    </div>
                </div>
            </div>
        </div>
    );
}