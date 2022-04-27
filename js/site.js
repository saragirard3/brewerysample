let header;
let body;

window.onload = function (){
    header = document.getElementById('contentHeader');
    body = document.getElementById('contentBody');

    header.innerHTML = "<h1>Girard Brewery</h1>" +
        "<img src='./images/beersign.jpg' alt='Beer Sign'>";
    body.innerHTML =
        '<div class="container-fluid">' +
            '<div class="row"><div class="col">' +
                '<h2>Welcome!</h2>' +
            '</div></div>' +
            '<div class="row"><div class="col">' +
                '<p>Check out the site, then come down and enjoy a beer with us.</p>' +
                '<hr>' +
                '<p></p>' +
            '</div></div>';
    
    document.getElementById('beer').addEventListener('click',beer);
    document.getElementById('taproom').addEventListener('click',taproom);
    document.getElementById('story').addEventListener('click',story);
    document.getElementById('events').addEventListener('click',events);
    document.getElementById('contact').addEventListener('click', contact);
    document.getElementById('reference').addEventListener('click',refAndCont);
}

//-------------------------------EVENT LISTENERS---------------------------------------------------------------------
function beer(){
    header.innerHTML = "<h1>Beer</h1>" +
    "<img src='./images/beercooler.jpg' alt='Beer Cooler'>";
    body.innerHTML="";
    body.appendChild(beerContent)
}

function taproom(){
    header.innerHTML = "" +
        "<h1 id='taproomHead'>Taproom</h1>" +
        "<img src='./images/tapcloseup.jpg' alt='Tap Close Up'>";
    body.innerHTML="";
    body.appendChild(taproomContent);
}

function story(){
    header.innerHTML = "<h1>Story</h1>" +
        "<img src='./images/barrels.jpg' alt='Barrels'>";
    body.innerHTML="";
    body.appendChild(storyContent);

}

function events(){
    header.innerHTML = "<h1>Events</h1>" +
        "<img src='./images/cheers.jpg' alt='Cheers'>";
    body.innerHTML="";
    body.appendChild(eventsContent);

}

function contact(){
    header.innerHTML = "<h1>Contact</h1>" +
        "<img src='./images/hopsandbeer.jpg' alt='Hops and Beer'>";
    body.innerHTML="";
    body.appendChild(contactContent);
}

function refAndCont(){
    header.innerHTML = "<h1>References and Contributions</h1>";
    body.innerHTML="";
    body.appendChild(referenceContribution);
}

//--------------------------------------END EVENT LISTENERS---------------------------------------------------------
