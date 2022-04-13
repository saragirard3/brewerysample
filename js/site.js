// let content;
let header;
let body;

window.onload = function (){
    header = document.getElementById('contentHeader');
    body = document.getElementById('contentBody');

    header.innerHTML = "<h1>Girard Brewery</h1>";
    body.innerHTML = "body test";
    
    document.getElementById('beer').addEventListener('click',beer);
    document.getElementById('taproom').addEventListener('click',taproom);
    document.getElementById('story').addEventListener('click',story);
    document.getElementById('shop').addEventListener('click',shop);
    document.getElementById('events').addEventListener('click',events);
    document.getElementById('contact').addEventListener('click', contact);
    document.getElementById('beerFinder').addEventListener('click',beerFinder);
}

function beer(e){
    header.innerHTML = "<h1>Beer</h1>";
    // body.innerHTML= `<div id='beerHtml'>${'./html/beer.html'}</div>`;
    // $('#contentBody').append('#beerHtml');
}

function taproom(e){
    header.innerHTML = "<h1>Taproom</h1>";
    body.innerHTML = "";
}

function story(e){
    header.innerHTML = "<h1>Story</h1>";
    body.innerHTML = "";

}

function shop(e){
    header.innerHTML = "<h1>Shop</h1>";
    body.innerHTML = "";

}

function events(e){
    header.innerHTML = "<h1>Events</h1>";
    body.innerHTML = "";

}

function contact(e){
    header.innerHTML = "<h1>Contact</h1>";
    body.innerHTML = "";

}

function beerFinder(e){
    header.innerHTML = "<h1>BeerFinder</h1>";
    body.innerHTML = "";

}


