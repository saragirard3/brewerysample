import logo from "../images/beercooler.jpg";

export default function Beer(){
    return(
        <div className={"beer"}>
            <div className={"headerContent"}>
                <h1>Beer</h1>
                <img src={logo} alt='Beer Cooler' />
            </div>

            <div className="container-fluid mainContent">
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2>Come and Grab a Beer</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Come on down and enjoy a beer with us. We offer a variety of flavors to please even the pickiest of beer drinkers.</p>
                        <hr />
                        <p />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Logerit</h4>
                        <p>
                            <i>ABV: 5.5%</i>
                            <br />
                            Logerit is a beer for everyone; anywhere, anytime. Golden in color, it has a soft malty aroma, a slightly sweet, creamy texture, and a balanced bitterness.
                            This is a refreshing, light beer that finishes smooth and clean.
                        </p>
                        </div>
                    <div className="col-4">
                        <h4>Pale devAle-ope-r</h4>
                        <p>
                            <i>ABV: 5.8%</i>
                            <br />
                            It’s an American Pale Ale with intense aromas of grapefruit, orange, and citrus while possessing enough biscuit backbone to keep it honest. It is,
                            by far, our crew’s favorite beer and the go-to at the end of the day.
                        </p>
                        </div>
                    <div className="col-4">
                        <h4>DROP TABLE; IPA</h4>
                        <p><i>ABV: 6.9%</i><br />
                            DROP TABLE; IPA is a New England IPA with aromas of bright pineapple, mango, passionfruit, and orange.
                            In the spectrum of Hazy IPAs, this beer is full-bodied, soft, and juicy with a light bitterness. The finish is balanced and gently mouthwatering.</p>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Java Stout</h4>
                        <p><i>ABV: 8.0%</i><br />
                            Java Stout is a full-bodied American Stout with robust flavors and aromas of chocolate, coffee, molasses, and tobacco.
                            We brewed it in honor of our favorite drink and developer language.
                            Enjoy this Stout year-round, but especially during the winter months when the wind chill sets in.</p>
                        </div>
                    <div className="col-4">
                        <h4>Extra Pale devAle</h4>
                        <p><i>ABV: 4.8%</i><br />
                            Extra Pale devAle is gold in color, has a nice bitterness, and dry hopped with a New Zealand variety called Rakau. Get your taste buds away from the other national brands, choose local.</p>
                        </div>
                    <div className="col-4">
                        <h4>Query Porter</h4>
                        <p><i>ABV: 7.5%</i><br />
                            Our Query Porter is a rich, crisp, and warming lager for the winter. It is very dark with a chocolate and roasted coffee aroma.
                            This beer is somewhat sweet with a very full body and higher than usual abv at 7.5%. The lager fermentation keeps this beer tasting crisp and clean without too much ester or fruitiness.
                            Query Porter could lend itself well to an extra barrel-aging. In the meantime, it will make a great pairing to frigid winters and holiday feasts.</p>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Scrum Lager</h4>
                        <p><i>ABV: 5.3%</i><br />
                            Scrum Lager is a crushable lager with a brilliant amber color. It’s a balanced beer with flavors of caramel, toasted bread, and spicy Noble hops.
                            This beer’s namesake, the Scrum Master, is the inspiration for its refreshing and warming characteristics.
                            Scrum Lager will rejuvenate you and make you feel at home.</p>
                        </div>
                    <div className="col-4">
                        <h4>Sprint IPA</h4>
                        <p><i>ABV: 5.6%</i><br />
                            Sprint IPA is a beer with a purpose; to help reinstate get the team moving on the project. This IPA flaunts a robust aroma of bright citrus,
                            tropical fruit, and pine with just enough bitterness to keep it balanced. The mellow golden malt character and effervescence carry the towering hop
                            flavors as high as an uncoordinated planning session.
                            Proceeds from this beer go directly to STEM education for future generations.</p>
                        </div>
                    <div className="col-4">
                        <h4>Agile Helles</h4>
                        <p><i>ABV: 4.9%</i><br />
                            Agile Helles lager is a traditional German beer variety, often associated with Munich. Hell is German for light (in color).
                            Helles lagers are easy drinking and light in color while maintaining a rich body and maltiness. There are moderate noble hop aromas but this style is typically less bitter than a pilsner.
                            Our Helles includes an addition of 25% smoked malts lending a distinctive but not overpowering smokiness to the beer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}