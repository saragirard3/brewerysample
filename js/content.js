// BEER
let beerContent = document.createElement("beerInfo");
beerContent.innerHTML =
    '<div class="container-fluid">' +
    '<div class="row"><div class="col">' +
    '<h2>Come and Grab a Beer</h2>' +
    '</div></div>' +
    '<div class="row">' +
    '<div class="col">' +
    '<p>Come on down and enjoy a beer with us. We offer a variety of flavors to please even the pickest of beer drinkers.</p>' +
    '<hr>' +
    '<p></p>' +
    '</div></div>'+
    '<div class="row">' +
        '<div class="col-4">' +
            '<h4>Logerit</h4>' +
            '<p><i>ABV: 5.5%</i><br>'+
            'Logerit is a beer for everyone; anywhere, anytime. Golden in color, it has a soft malty aroma, a slightly sweet, creamy texture, and a balanced bitterness. ' +
            'This is a refreshing, light beer that finishes smooth and clean.</p>'+
        '</div>' +
        '<div class="col-4">' +
            '<h4>Pale devAle-ope-r</h4>' +
            '<p><i>ABV: 5.8%</i><br>'+
            'It’s an American Pale Ale with intense aromas of grapefruit, orange, and citrus while possessing enough biscuit backbone to keep it honest. It is,' +
            ' by far, our crew’s favorite beer and the go-to at the end of the day.</p>'+
         '</div>' +
        '<div class="col-4">' +
            '<h4>DROP TABLE; IPA</h4>' +
            '<p><i>ABV: 6.9%</i><br>'+
            'DROP TABLE; IPA is a New England IPA with aromas of bright pineapple, mango, passionfruit, and orange. ' +
            'In the spectrum of Hazy IPAs, this beer is full-bodied, soft, and juicy with a light bitterness. The finish is balanced and gently mouthwatering.</p>'+
        '</div>' +
    '</div>'+
    '<div class="row">' +
        '<div class="col-4">' +
            '<h4>Java Stout</h4>' +
            '<p><i>ABV: 8.0%</i><br>'+
            'Java Stout is a full-bodied American Stout with robust flavors and aromas of chocolate, coffee, molasses, and tobacco. ' +
            'We brewed it in honor of our favorite drink and developer language. ' +
            'Enjoy this Stout year-round, but especially during the winter months when the wind chill sets in.</p>'+
        '</div>' +
        '<div class="col-4">' +
            '<h4>Extra Pale devAle</h4>' +
            '<p><i>ABV: 4.8%</i><br>'+
            'Extra Pale devAle is gold in color, has a nice bitterness, and dry hopped with a New Zealand variety called Rakau. Get your taste buds away from the other national brands, choose local.</p>'+
        '</div>' +
        '<div class="col-4">' +
            '<h4>Query Porter</h4>' +
            '<p><i>ABV: 7.5%</i><br>'+
            'Our Query Porter is a rich, crisp, and warming lager for the winter. It is very dark with a chocolate and roasted coffee aroma.  ' +
            'This beer is somewhat sweet with a very full body and higher than usual abv at 7.5%. The lager fermentation keeps this beer tasting crisp and clean without too much ester or fruitiness. ' +
            'Query Porter could lend itself well to an extra barrel-aging. In the meantime, it will make a great pairing to frigid winters and holiday feasts.</p>'+
        '</div>' +
    '</div>'+
    '<div class="row">' +
        '<div class="col-4">' +
            '<h4>Scrum Lager</h4>' +
            '<p><i>ABV: 5.3%</i><br>'+
            'Scrum Lager is a crushable lager with a brilliant amber color. It’s a balanced beer with flavors of caramel, toasted bread, and spicy Noble hops. ' +
            'This beer’s namesake, the Scrum Master, is the inspiration for its refreshing and warming characteristics. ' +
            'Scrum Lager will rejuvenate you and make you feel at home.</p>'+
        '</div>' +
        '<div class="col-4">' +
            '<h4>Sprint IPA</h4>' +
            '<p><i>ABV: 5.6%</i><br>'+
            'Sprint IPA is a beer with a purpose; to help reinstate get the team moving on the project. This IPA flaunts a robust aroma of bright citrus, ' +
            'tropical fruit, and pine with just enough bitterness to keep it balanced. The mellow golden malt character and effervescence carry the towering hop ' +
            'flavors as high as an uncoordinated planning session. ' +
            'Proceeds from this beer go directly to STEM education for future generations.</p>'+
        '</div>' +
        '<div class="col-4">' +
            '<h4>Agile Helles</h4>' +
            '<p><i>ABV: 4.9%</i><br>'+
            'Agile Helles lager is a traditional German beer variety, often associated with Munich. Hell is German for light (in color). ' +
            'Helles lagers are easy drinking and light in color while maintaining a rich body and maltiness. There are moderate noble hop aromas but this style is typically less bitter than a pilsner. ' +
            'Our Helles includes an addition of 25% smoked malts lending a distinctive but not overpowering smokiness to the beer.</p>'+
        '</div>' +
    '</div>';

//----end beer

// TAPROOM
let taproomContent = document.createElement("taproomInfo");
taproomContent.innerHTML =
    '<div class="container-fluid">' +
    '<div class="row"><div class="col">' +
    '<h2>Visit our Taproom</h2>' +
    '</div></div>' +
    '<div class="row">' +
    '<div class="col-7">' +
    '<p>Please follow current CDC guidelines for COVID-19 protections while visiting our taproom.</p>' +
    '   <p>Located near downtown Anywhere overlooking the valleys of WV, Girard Brewery Taproom features our original flavors and a rotating releases. ' +
    'Stop in for a pint or flight today. Hangout on our dog friendly patio and enjoy the sight!</p>' +
    '</div>' +
    '<div class="col-2">' +
    '<h4>Location</h4>' +
    '<p>123 Coding Drive<br>' +
    'Anywhere, WV<br>' +
    '304-555-5555</p>' +
    '</div>' +
    '<div class="col-3">' +
    '<h4>Hours</h4>' +
    '<p>Sunday-Thursday 12:00pm - 9:00pm<br>' +
    'Friday-Saturday 12:00pm - 11:00pm</p>'+
    '</div>' +
    '</div>' +
    '</div>' +
    '<hr>' +
    '<div class="row"><div class="col-6">' +
    '<img src="./images/pour.jpg" alt="Pour"></div>' +
    '<div class="col-6">' +
    '<h2>On Tap</h2><br>' +
    '<p><h4>Now pouring:</h4></p>' +
    '<ul>' +
    '<li>Logerit</li>' +
    '<li>Pale devAle-ope-r (MN Fav!)</li>' +
    '<li>Java Stout</li>' +
    '<li>Query Porter</li>' +
    '<li>Extra Pale devAle</li>' +
    '<li>Sprint IPA</li>' +
    '<li>Scrum Lager</li>' +
    '<li>Agile Helles</li>' +
    '<li>DROP TABLE; IPA</li></ul>' +
    '</div></div><hr>' +
    '<div class="row"><div class="col-6">' +
    '<h2>Food</h2>' +
    '<p>We don\'t serve food. However, we have pretzels and chips available for purchase. Feel free ' +
    'to bring in your own food from one of Anywhere\'s local restuarants.</p>' +
    '</div>' +
    '<div class="col-6">' +
    '<h2>Loyalty Program</h2>' +
    '<p>Join our loyalty program and start earning rewards! Unlock $5 for 100 points and get a welcome of 25 bonus points when you sign up.</p>' +
    '</div></div>';

//---- end taproom

// STORY
let storyContent = document.createElement("storyInfo");
storyContent.innerHTML =
    '<div class="container-fluid">' +
    '<div class="row"><div class="col">' +
    '<h2>Our Story</h2>' +
    '</div></div>' +
    '<div class="row">' +
    '<div class="col">' +
    '<p>We started in a small town way up in the Northwoods. Now we have travelled across the lands to the Appalachian Mountains.</p>' +
    '<p>Originally just for the love of the brew, we made recipes from home starting with our Mead. We continued on the brew path towards dandelion wine and other fruit wines.<br>' +
    'Now we have since found our joy in brewing the best beers on this part of the mountain side!</p>' +
    '</div>';

//---- end story

// EVENTS
let eventsContent = document.createElement("eventsInfo");
eventsContent.innerHTML =
    '<div class="container-fluid">' +
    '<div class="row"><div class="col">' +
    '<h2>Events</h2><hr>' +
    '</div></div>' +
    '<div class="row">' +
        '<div class="col-4">' +
            '<h4>Wednesdays</h4>' +
            '<p>Bargo is back! Bring your friends and enjoy weekly Bargo! Buy in is $2 per card and prizes range from free beer to cash prizes.</p>'+
        '</div>'+
        '<div class="col-4">' +
            '<h4>Fridays</h4>' +
            '<p>Food Truck Friday! Vendors swarm the Taproom and open their doors to the crowd!</p>'+
        '</div>'+
        '<div class="col-4">' +
            '<h4>Saturdays</h4>' +
            '<p>Variety of local performers and artists play live. Check out our facebook site for more details. Cover is $5 per person.</p>'+
        '</div>';

//---- end events

// CONTACT
let contactContent = document.createElement("contactInfo");
contactContent.innerHTML =
    '<div class="container-fluid">' +
    '<div class="row"><div class="col">' +
    '<h2>Contact</h2>' +
    '</div></div>' +
    '<div class="row">' +
    '<div class="col-2">'+
    '<br>Come down and visit or give us a call:'+
    '<p>123 Coding Drive<br>' +
    'Anywhere, WV<br>' +
    '304-555-5555</p>' +
    '</div></div>' +
    '<hr>'+
    '<form>' +
        '<p>Enter your name and either phone or email and we will connect with you!</p>'+
        '<div class="form-row">' +
            '<div class="col-md-4 mb-3">' +
                '<label for="Name">Name</label> ' +
                '<input type="text" class="form-control" id="contactForm" placeholder="Name" required>' +
            '<div class="col-md-4 mb-3">' +
                '<label for="Contact">Contact Info</label>' +
                '<input type="text" class="form-control" id="contactForm" placeholder="Phone or Email" required> ' +
                '<div class="valid-feedback">Looks good!</div></div> ' +
        '</div> ' +
    '<button class="btn btn-primary" type="submit">Submit form</button> ' +
    '</form>'+
    '</div>';

//---- end contact

