import logo from "../images/barrels.jpg";

export default function Story(){
    return(
        <div className={"story"}>
            <div className={"headerContent"}>
                <h1>Story</h1>
                <img src={logo} alt='Barrels' />
            </div>

            <div className="container-fluid mainContent">

            </div>
        </div>
    );
}