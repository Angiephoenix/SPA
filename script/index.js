const heroNames = document.querySelectorAll("a");
const heroDisplay = document.querySelector(".display");
const heroDetails = document.querySelector(".details");
const left = document.querySelector(".left");

const heroImages = [
  "style/images/lukeSkywalker.jpg",
  "style/images/c3po.jpg",
  "style/images/Sphero-R2-D2.jpg",
  "style/images/DarthVader.jpg",
  "style/images/Leia Organa.jpg",
  "style/images/Owen Lars.jpg",
  "style/images/Beru Whitesun.jpeg",
  "style/images/R5-D4.jpg",
  "style/images/Biggs Darklighter.jpeg",
  "style/images/Obi-Wan Kenobi.jpg",
];

heroNames.forEach((hero, index) => {
  console.log(index);
  hero.addEventListener("click", function main() {
    heroDisplay.src = heroImages[index];
    heroDisplay.style.display = "block";
    left.style.display = "flex";
    heroDetails.textContent = "A moment, please...";
    fetch("https://swapi.dev/api/people/?format=json")
      .then((response) => response.json())
      .then((data) => {
        var names = data.results[index].name;
        var gender = data.results[index].gender;
        var height = data.results[index].height;
        heroDetails.innerHTML = `
        <p>Name: ${data.results[index].name} </p> <p>Gender: ${data.results[index].gender} </p> <p>Height: ${data.results[index].height}cm</p>
      `;

        var arrays = [
          "gender: " + gender,
          "Height: " + height,
          "Name: " + names,
        ];
        var container = document.createElement("strong");
        var close = document.createElement("button");
        var textButton = document.createTextNode("Close");
        close.id = "clickOut";
        close.className = "close";

        close.appendChild(textButton);
        container.appendChild(close);
        left.appendChild(container);

        var closeOut = document.getElementById("clickOut");
        closeOut.addEventListener("click", (x) => {
          container.remove();
          left.style.display = "none";
        });
      })
      .catch((err) => console.log(err));
  });
});

module.exports = { main };
