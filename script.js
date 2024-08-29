const userInput = document.getElementById("search-input");
const submitBtn = document.getElementById("search-button");
const pokemonImage = document.getElementById("pokemon-image");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const searchPokedex = async () =>{
    if (userInput.value === ""){
        return;
    }
    try{
        const resolution = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput.value.toLowerCase()}`);
        const data = await resolution.json();
        console.log(data);
        const {id, height, name, weight, types, stats, sprites } = data;
    }

    catch{
        console.log("error");
    }
}


submitBtn.addEventListener("click", searchPokedex);
userInput.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        searchPokedex();
    }
})