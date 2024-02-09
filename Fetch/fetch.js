//Fetch func...

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Couldn't fetch resources")
//     }
//     return response.json();
// })//promise based
// .then(data=>console.log(data.id))
// .catch(error=>console.error(error));
async function  fetchData(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();

        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("couldnot fetch resource");

        }
        const data=await response.json();
        console.log(data);
        const pokemonSprite=data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
        imgElement.style.display="block";

    }

    catch(error){
  console.error(error);
    }
}