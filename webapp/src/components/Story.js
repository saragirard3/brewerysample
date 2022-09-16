import logo from "../images/barrels.jpg";

export default function Story(){
    return(
        <div className={"story"}>
            <div className={"headerContent"}>
                <h1>Story</h1>
                <img src={logo} alt='Barrels' />
            </div>

            <div className="container-fluid mainContent">
                <div className="container-fluid">
                <div className="row"><div className="col">
                    <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col"> 
                        <p>We started in a small town way up in the Northwoods. Now we have travelled across the lands to the Appalachian Mountains.</p> 
                        <p>Originally just for the love of the brew, we made recipes from home starting with our Mead. We continued on the brew path towards dandelion wine and other fruit wines.<br />
                            Now we have since found our joy in brewing the best beers on this part of the mountain side!</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}