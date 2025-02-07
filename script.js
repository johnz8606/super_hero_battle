let heroImg1 = document.getElementById('hero-img-1');
let heroName1 = document.getElementById("hero-name-1");
let img1 =document.createElement('img');

let heroImg2 = document.getElementById('hero-img-2');
let heroName2 = document.getElementById("hero-name-2");
let img2 =document.createElement('img');

let powerMatch = document.getElementsByClassName("card-text");


async function getData() {
    const url = `https://akabab.github.io/superhero-api/api/all.json`
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        testGame(json);   
    } catch (error) {
        console.error(error.message);
    }
    
}




function testGame(json) {
    let randHero1 = Math.floor(Math.random() * 99);
    let randHero2 = Math.floor(Math.random() * 99);
    while (randHero1 == randHero2) {
        randHero2 = Math.floor(Math.random() * 99);
    }

    let powers = selectPower(json[0].powerstats).replace(/^./, char => char.toUpperCase());


    let hero1 = json[randHero1];
    let hero2 = json[randHero2];

    img1.src = hero1.images.lg; 
    heroImg1.appendChild(img1);
    heroName1.textContent = hero1.name;
    
    img2.src = hero2.images.lg; 
    heroImg2.appendChild(img2);
    heroName2.textContent = hero2.name;

    for(let i = 0; i < powerMatch.length; i++) {
        powerMatch[i].textContent = powers;
    }
    

}

function selectPower(json) {

    let powerArray = Object.keys(json);
    let randPower = Math.floor(Math.random() * 5);
    return powerArray[randPower];
}

document.addEventListener('DOMContentLoaded', getData);