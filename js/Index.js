var content;

window.onload = function (){
    content = document.getElementById('content');
    content.innerHTML = "<h1>Welcome to the Brewery!</h1>";
    
    document.getElementById('beer').addEventListener('click',beer);
    document.getElementById('taproom').addEventListener('click',taproom);
    document.getElementById('story').addEventListener('click',story);
    document.getElementById('shop').addEventListener('click',shop);
    document.getElementById('events').addEventListener('click',events);
    document.getElementById('contact').addEventListener('click', contact);
    document.getElementById('beerFinder').addEventListener('click',beerFinder);
}

function beer(e){
    content.innerHTML = "this is another test - selected beer";
}

function taproom(e){
    content.innerHTML = "taproom test";
}

function story(e){
    content.innerHTML = "story";
}

function shop(e){
    content.innerHTML = "shop";
}

function events(e){
    content.innerHTML = "events page";
}

function contact(e){
    content.innerHTML = "contact us";
}

function beerFinder(e){
    content.innerHTML = "beerFINDer page";
}


