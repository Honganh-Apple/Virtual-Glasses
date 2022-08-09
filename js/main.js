let dataGlasses = [
  {
    id: "G1",
    src: "../img/g1.jpg",
    virtualImg: "../img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "../img/g2.jpg",
    virtualImg: "../img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "../img/g3.jpg",
    virtualImg: "../img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "../img/g4.jpg",
    virtualImg: "../img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "../img/g5.jpg",
    virtualImg: "../img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "../img/g6.jpg",
    virtualImg: "../img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "../img/g7.jpg",
    virtualImg: "../img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "../img/g8.jpg",
    virtualImg: "../img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "../img/g9.jpg",
    virtualImg: "../img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

let listGlasseContent = "";
dataGlasses.forEach(
  (dataGlasses) =>
    (listGlasseContent += ` 
    <div class="col-3">
      <img class="w-100 h-100" onclick="whichGlasse('${dataGlasses.id}')"  src="${dataGlasses.src}"/>
    </div>
  `)
);

document.getElementById("vglassesList").innerHTML = listGlasseContent;
document.getElementById("avatar").style.display = "block";

let whichGlasse = (id) => {
  let quelGlasse = "";
  for (let index = 0; index < dataGlasses.length; index++) {
    if (id == dataGlasses[index].id) {
      quelGlasse = `<h3> ${dataGlasses[index].name} - ${dataGlasses[index].brand} (${dataGlasses[index].color})
      </h3>
      <span style="background-color: rgb(223, 38, 38); color:white"> $${dataGlasses[index].price} </span>
      <span style="color: green"> Stocking</span>
      <p>${dataGlasses[index].description}</p>`;
      document.getElementById("avatar").src = dataGlasses[index].virtualImg;
      document.getElementById("avatar").style.display = "block";
    }
  }
  //

  document.getElementById("glassesInfo").innerHTML = quelGlasse;
  document.getElementById("glassesInfo").style.display = "block";
};
window.whichGlasse = whichGlasse;
let removeGlasses = (g) => {
  if (g == true) {
    document.getElementById("avatar").style.display = "block";
  } else {
    document.getElementById("avatar").style.display = "none";
  }
};

window.removeGlasses = removeGlasses;
