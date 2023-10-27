const planetBtn = document.querySelector("#planet-btn");
const buttonContainerEle = document.querySelector("#button-container");
const planetDetailEle = document.querySelector("#planet-details");

const planets = [
  { name: "Mercury", description: "Mercury is the closest planet to the Sun." },
  {
    name: "Venus",
    description: "Venus is known for its thick and toxic atmosphere.",
  },
  { name: "Earth", description: "Earth is the only known planet with life." },
];

function createButtons() {
  planets.forEach((planet) => {
    const buttons = document.createElement("button");
    buttons.textContent = planet.name;
    buttons.addEventListener("click", () => showDetails(planet));
    buttonContainerEle.appendChild(buttons);
  });
}

function showDetails(planet) {
  planetDetailEle.innerHTML = `
      <h2>${planet.name}</h2>
      <p>${planet.description}</p>
      `;
}

planetBtn.addEventListener("click", () => {
  createButtons();
});
