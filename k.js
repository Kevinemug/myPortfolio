// document.getElementById('GetText').addEventListener('click', (e)=>{
//     ShowData()
// });
   

// const ShowData =()=>{

// //  fetch('JSON/sample.txt')
// //  .then(function(res){
// //     return res.text();
// //  })
// //  .then(function(show){
// //     console.log(show);
// //  })

// //  allow function

// fetch('JSON/sample.txt')
// .then((results) => results.text())
// // .then((ShowRes) => console.log(ShowRes))
// .then((ShowRes) => {
//     console.log(ShowRes);
//     document.getElementById('output').innerText = ShowRes;
// })
// }

// console.log("Fetc img");
// fetch('/image/Star_Wars_Logo.svg')
// .then((res) => res.blob())
// .then((blob) => {
//     console.log(blob)
//     document.getElementById('imgCheck').src = URL.createObjectURL(blob);

// })
// FetchImagez()
// .catch(error => {
//     console.log("!error handling");
//     console.error(error);
// })
// async function FetchImagez(){
//     console.log("hello")
//     const res = await fetch('/image/1179c2e5-c457-404a-a8df-3dd4a4650725.jpg')
//     const ShowImg  = await res.blob()
//     document.getElementById('imgCheck').src = URL.createObjectURL(ShowImg);

// }

// const StarCarDs = document.querySelector(".starCards");
// async function jsomtry(){
//   console.log("hello")
//   const res = await fetch('/JSON/datz.json');
//   const Showjson = await res.json();
//   console.log(Showjson);
// }
// jsomtry()
// .catch(error =>{
//   console.log("! Error Reporting");
//   console.error(error);
// })

// const card = document.createElement("div");
// card.classList.add('card');
// const cardProfile = document.createElement("div");
// cardProfile.classList.add('cardProfile')
// const h3 = document.createElement("h3")
// h3.innerHTML =` SEx: ${}`;
// console.log(h3);

// StarCarDs.appendChild(card);
// card.appendChild(cardProfile);
// card.appendChild(h3);




const starCards = document.querySelector(".starCards");
const modalContainer = document.getElementById("modal-container");

async function getCharacters() {
  let characters = [];
  let nextUrl = "https://swapi.dev/api/people/";
  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    characters = characters.concat(data.results);
    nextUrl = data.next;
  }
  return characters;
}

getCharacters().catch(error => {
  console.log("error");
  console.error(error);
}); 

async function showCharacterDetails(characterUrl) {
  const response = await fetch(characterUrl);
  const data = await response.json();
  console.log(data);
  // display the character details in the page
}

async function main() {
  const characters = await getCharacters();
  characters.forEach((character) => {
    // create a list item for each character
    // const starCards = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add('card');

    const p = document.createElement("p");
      p.innerText = `Birth Year: ${character.birth_year}`;

    // create an image element
    const cardProfile = document.createElement("div");
    cardProfile.classList.add('cardProfile');
    const image = document.createElement("img");
   image.src = `https://ui-avatars.com/api/?name=${character.name}`;
    // image.url=`https://unsplash.com/photos/ILip77SbmOE`;

    // create a link element
    const h3 = document.createElement("h3");
    h3.innerText = character.name;
    h3.addEventListener("click", (event) => {
      event.preventDefault();
      showCharacterDetails(character.url);
      showModal(character);
    });
    starCards.appendChild(card);
    card.appendChild(cardProfile);
    cardProfile.appendChild(image);
    card.appendChild(h3);
    card.appendChild(p);

    // characterList.appendChild(starCards);
  });
}

main();

function showModal(character) {
  // create the modal elements
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const title = document.createElement("h2");
  title.innerText = character.name;

  const description = document.createElement("p");
  description.innerText = `Birth Year: ${character.birth_year} 
                           Created: ${character.created} 
                           Eye color: ${character.eye_color} 
                           Gender: ${character.gender} 
                           Hair color: ${character.hair_color} 
                           Height: ${character.height} 
                           Homeworld: ${character.homeworld}  
                           mass: ${character.mass} 
                           Skin color: ${character.skin_color} 
                           Species: ${character.species} 
                           Starships: ${character.starships} 
                           Url: ${character.url} 
                           Vehicles: ${character.vehicles} `;

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("visible");
    modalContainer.innerHTML = "";
  });

  modal.appendChild(title);
  modal.appendChild(description);
  modal.appendChild(closeButton);

  modalContainer.appendChild(modal);

  modalContainer.classList.add("visible");
}


