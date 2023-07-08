const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const closeIcon = document.querySelector(".close-icon");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closeIcon.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const controls = document.querySelectorAll(".controls li");
const imageContainer = document.querySelectorAll(".image-container .image");

console.log(controls, imageContainer);

const filterCards = (e) => {
  document.querySelector("active").tagName.remove("active");
  e.target.tagName.add("active");
};

controls.forEach((li) => li.addEventListener("click", filterCards));

//items data
let items = [
  {
    src: "image/cake2.jpg",
    category: "cake",
  },
  {
    src: "image/cake1.jpg",
    category: "cake",
  },
  {
    src: "image/cake3.jpg",
    category: "cake",
  },
  {
    src: "image/cake5.jpg",
    category: "cake",
  },
  {
    src: "image/doughnut.jpg",
    category: "doughnut",
  },
  {
    src: "image/doughnut1.jpg",
    category: "doughnut",
  },
  {
    src: "image/doughnut2.jpg",
    category: "doughnut",
  },
  {
    src: "image/doughnut3.jpg",
    category: "doughnut",
  },
  {
    src: "image/ice-cream.jpg",
    category: "ice-cream",
  },

  {
    src: "image/íce-cream2.jpg",
    category: "ice-cream",
  },
  {
    src: "image/burgger.jpg",
    category: "hamburger",
  },
  {
    src: "image/burgger2.jpg",
    category: "hamburger",
  },
  {
    src: "image/pie.jpg",
    category: "pie",
  },
  {
    src: "image/pie2.jpg",
    category: "pie",
  },
];


let html = items.map((item) => {
  return `<a href=${item.src} class="image ${item.category}">
     <img class="img" src=${item.src} alt=${item.category} loading="lazy">
  </a>`;
});
document.querySelector("#items").innerHTML = html;

//filter functionality
const filterItems = (value) => {
  const filteredItems = items.filter((item) => {
    if (value) {
      return item.category === value;
    } else {
      return item.category;
    }
  });
  const html = filteredItems.map(
    (item) => `<a href=${item.src} class="image ${item.category}">
  <img class="img" src=${item.src} alt=${item.category} loading="lazy">
</a>`
  );
  document.querySelector("#items").innerHTML = html;
};
