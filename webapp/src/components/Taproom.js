import logo from "../images/tapcloseup.jpg";
import images from "../images/pour.jpg";

export default function Taproom(){
    return(
        <div className={"taproom"}>
            <div className={"headerContent"}>
                <h1 id='taproomHead'>Taproom</h1>
                <img src={logo} alt='Tap Close Up' />
            </div>

            <div className="container-fluid mainContent">
                <div className="container-fluid"> 
                <div className="row"><div className="col"> 
                    <h2>Visit our Taproom</h2> 
                    </div></div> 
                <div className="row"> 
                    <div className="col-7"> 
                        <p>Please follow current CDC guidelines for COVID-19 protections while visiting our taproom.</p> 
                          <p>Located near downtown Anywhere overlooking the valleys of WV, Girard Brewery Taproom features our original flavors and a rotating releases.
                            Stop in for a pint or flight today. Hangout on our dog friendly patio and enjoy the sight!</p>
                        </div> 
                    <div className="col-2"> 
                        <h4>Location</h4> 
                        <p>123 Coding Drive<br /> 
                            Anywhere, WV<br />
                                304-555-5555</p>
                        </div> 
                    <div className="col-3"> 
                        <h4>Hours</h4> 
                        <p>Sunday-Thursday 12:00pm - 9:00pm<br /> 
                            Friday-Saturday 12:00pm - 11:00pm</p>
                        </div> 
                    </div> 
                </div> 
                <hr /> 
                <div className="row"><div className="col-6"> 
                    <img src={images} alt="Pour" /></div>
                    <div className="col-6"> 
                        <h2>On Tap</h2><br /> 
                            <p><h4>Now pouring:</h4></p> 
                            <ul> 
                                <li>Logerit</li> 
                                <li>Pale devAle-ope-r (MN Fav!)</li> 
                                <li>Java Stout</li> 
                                <li>Query Porter</li> 
                                <li>Extra Pale devAle</li> 
                                <li>Sprint IPA</li> 
                                <li>Scrum Lager</li> 
                                <li>Agile Helles</li> 
                                <li>DROP TABLE; IPA</li></ul> 
                            </div></div><hr /> 
                    <div className="row"><div className="col-6"> 
                        <h2>Food</h2> 
                        <p>We don't serve food. However, we have pretzels and chips available for purchase. Feel free
                            to bring in your own food from one of Anywhere's local restaurants.</p>
                        </div> 
                        <div className="col-6"> 
                            <h2>Loyalty Program</h2> 
                            <p>Join our loyalty program and start earning rewards! Unlock $5 for 100 points and get a welcome of 25 bonus points when you sign up.</p> 
                            </div>
                    </div>
            </div>
        </div>
    );
}