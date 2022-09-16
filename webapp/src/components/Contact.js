import logo from "../images/hopsandbeer.jpg";

export default function Contact(){
    return(
        <div className={"contact"}>
            <div className={"headerContent"}>
                <h1>Contact</h1>
                <img src={logo} alt='Hops and Beer' />
            </div>

            <div className="container-fluid mainContent">
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <br />
                            Come down and visit or give us a call:
                            <p>123 Coding Drive<br />
                                Anywhere, WV<br />
                                304-555-5555
                            </p>
                            </div>
                    </div>
                    <hr />
                    <form>
                        <p>Enter your name and either phone or email and we will connect with you!</p>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="Name">Name</label>
                                <input type="text" className="form-control" id="contactForm" placeholder="Name" required ></input>
                                <div className="col-md-4 mb-3">
                                    <label for="Contact">Contact Info</label>
                                    <input type="text" className="form-control" id="contactForm" placeholder="Phone or Email" required ></input>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}