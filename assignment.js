async function fetchMarvelData(characterName) {
    const response = await fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f57e7641fc5724286ba9dae90b8b6b78&hash=9dbb74cd1640d9530f04639993b455f0"
    );
    const marvelData = await response.json();
    const characterInfoElement = document.getElementById("marvel-info");

    characterInfoElement.innerHTML = "<h2>CLICK HERE</h2>";
    
    const characters = marvelData.data.results;

    characters.forEach((character) => {
        const characterNameElement = document.createElement("p");
        characterNameElement.textContent = character.name;
        console.log(character.name);

        const characterImageElement = document.createElement("img");
        characterImageElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        characterImageElement.alt = character.name;
        characterImageElement.style.width = "100px";

        characterInfoElement.appendChild(characterNameElement);
        characterInfoElement.appendChild(characterImageElement);
    });
}

document
    .querySelector("#marvel-info h2")
    .addEventListener("click", fetchMarvelData);
    updatseData();
    setInterval(updateData, 10000);





