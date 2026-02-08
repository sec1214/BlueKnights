import roster from "./roster.json";
import style from "./styles.css";
import olgcLogo from "./assets/images/blueKnightBasketballPlayer.jpg";

const logo = document.getElementById("logo");
logo.src = olgcLogo;

const coachesContainer = document.getElementById("coaches-container");
const playerContainer = document.getElementById("player-container");

const img = document.createElement("img");

img.classList.add("coach-photo"); // This "hooks" the CSS we just wrote

roster.coaches.forEach((coach) => {
  const card = document.createElement("div");
  card.classList.add("coach-card");

  // 1. Determine the correct image source
  const imgSrc = coach.image
    ? `./assets/images/${coach.image}`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(coach.name)}&background=6699CC&color=fff`;

  // 2. Build the card structure
  // We use the imgSrc variable we just created inside the <img> tag
  card.innerHTML = `
    <img src="${imgSrc}" alt="${coach.name}" class="coach-photo">    
    <h3>${coach.name}</h3>
    <p>${coach.position}</p>
  `;

  coachesContainer.appendChild(card);
});


for (const player of roster.players) {
  const card = document.createElement("div");
  card.classList.add("player-card");

  // 1. Create and handle the Image
  const playerImage = document.createElement("img");
  // If no image, use a placeholder that fits our blue/white theme
  playerImage.src = player.image 
    ? `./assets/images/${player.image}` 
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=002144&color=fff&size=256`;
  playerImage.alt = player.name;

  // 2. Create the Text Elements
  const nameDisplay = document.createElement("h2");
  nameDisplay.textContent = player.name;

  const numberDisplay = document.createElement("p");
  numberDisplay.classList.add("player-number");
  numberDisplay.textContent = `#${player.number}`;

  const playerPosition = document.createElement("p");
  playerPosition.classList.add("player-pos");
  playerPosition.textContent = player.position;

  // 3. Append in "Trading Card" order (Image on top!)
  card.appendChild(playerImage);
  card.appendChild(nameDisplay);
  card.appendChild(numberDisplay);
  card.appendChild(playerPosition);

  playerContainer.appendChild(card);
}
