const profiles = [
  {
    id: 1,
    name: "Christopher Campbell",
    img: "./img/christopher-campbell.jpg",
    job: "Front-end Developer",
    note:
      "O S.O.L.I.D é um acrônimo que representa cinco princípios da programação orientada a objetos e design de código teorizados pelo nosso querido Uncle Bob (Robert C. Martin) por volta do ano 2000.",
  },
  {
    id: 2,
    name: "Luis Villasmil",
    job: "Front-end Developer",
    img: "./img/luis-villasmil.jpg",
    note:
      "Princípio da Responsabilidade Única (SRP): Esse primeiro princípio diz que uma classe deve ter apenas um motivo para mudar, ou seja, deve ter uma única responsabilidade",
  },
  {
    id: 3,
    name: "Ian Kiragu",
    job: "Back-end Developer",
    img: "./img/ian-kiragu.jpg",
    note:
      "Princípio do Aberto/Fechado (OCP): Diz que as entidades de software (classes, módulos, funções etc.) devem ser abertas para ampliação, mas fechadas para modificação.",
  },
  {
    id: 4,
    name: "Sung Wang",
    job: "Back-end Developer",
    img: "./img/sung-wang.jpg",
    note:
      "Princípio da Substituição de Liskov (LSP): Diz que Os subtipos devem ser substituíveis pelos seus tipos base, e que as classes/tipos base podem ser substituídas por qualquer uma das suas subclasses.",
  },
  {
    id: 5,
    name: "Kelly Sikkema",
    job: "Designer",
    img: "./img/kelly-sikkema.jpg",
    note:
      "Princípio da Segregação de Interfaces (ISP): Diz que muitas interfaces específicas são melhores do que uma interface geral.",
  },
  {
    id: 6,
    name: "Raj Rana",
    job: "The Boss",
    img: "./img/raj-rana.jpg",
    note:
      "Princípio da Inversão de Dependências (DIP): Diz que devemos depender de abstrações e não de classes concretas.",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const profileID = document.getElementById("profile-id");
  const profileName = document.getElementById("profile-name");
  const profileJob = document.getElementById("profile-job");
  const profileNote = document.getElementById("profile-note");
  const profileImg = document.getElementById("profile-img");

  const buttonNext = document.querySelector(".button-next");
  const buttonPrev = document.querySelector(".button-prev");
  const buttonRandom = document.querySelector(".button-random");

  let currentProfile = 0;
  showProfile();

  buttonNext.addEventListener("click", function () {
    currentProfile++;
    if (currentProfile == 6) {
      currentProfile = 0;
    }
    showProfile();
  });

  buttonPrev.addEventListener("click", function () {
    currentProfile--;
    if (currentProfile == -1) {
      currentProfile = 5;
    }
    showProfile();
  });

  buttonRandom.addEventListener("click", function () {
    currentProfile = Math.floor(Math.random() * 6 );
    showProfile();
  });

  function showProfile() {
    profileID.textContent = profiles[currentProfile].id;
    profileName.textContent = profiles[currentProfile].name;
    profileJob.textContent = profiles[currentProfile].job;
    profileNote.textContent = profiles[currentProfile].note;
    profileImg.src = profiles[currentProfile].img;
  }
});
