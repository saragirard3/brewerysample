import logo from "../images/cheers.jpg";

export default function Events(){
    return(
        <div className={"events"}>
            <div className={"headerContent"}>
                <h1>Events</h1>
                <img src={logo} alt='Cheers' />
            </div>

            <div className="container-fluid mainContent">
                <div className="container-fluid"> 
                <div className="row"><div className="col"> 
                    <h2>Events</h2><hr />
                        </div></div> 
                <div className="row"> 
                    <div className="col-4"> 
                        <h4>Wednesdays</h4> 
                        <p>Bargo is back! Bring your friends and enjoy weekly Bargo! Buy in is $2 per card and prizes range from free beer to cash prizes.</p>
                        </div>
                    <div className="col-4"> 
                        <h4>Fridays</h4> 
                        <p>Food Truck Friday! Vendors swarm the Taproom and open their doors to the crowd!</p>
                        </div>
                    <div className="col-4"> 
                        <h4>Saturdays</h4> 
                        <p>Variety of local performers and artists play live. Check out our facebook site for more details. Cover is $5 per person.</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}