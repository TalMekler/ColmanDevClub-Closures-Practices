const btn = document.querySelector("#btn");
const usernameInput = document.querySelector("#username-input");
const emailInput = document.querySelector("#email-input");
const ageInput = document.querySelector("#age-input");
const img = document.querySelector("img");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  popupCreator(usernameInput.value, emailInput.value, ageInput.value);
});

const popupCreator = (username, email, age) => {
  if (username === "" || email === "" || age === "") {
    alert("One or more fields are empty\nTry again. . .");
    return;
  }

  const xIcon = document.createElement("i");
  xIcon.classList.add("fa-regular");
  xIcon.classList.add("fa-circle-xmark");
  xIcon.setAttribute("onclick", "popupRemove()");

  const popupDiv = document.createElement("div");
  popupDiv.setAttribute("id", "popup");

  popupDiv.appendChild(xIcon);

  const usernameP = document.createElement("p");
  usernameP.innerText = `${username}`;
  popupDiv.appendChild(usernameP);

  const emailP = document.createElement("p");
  emailP.innerText = `${email}`;
  popupDiv.appendChild(emailP);

  const ageP = document.createElement("p");
  ageP.innerText = `${age}`;
  popupDiv.appendChild(ageP);

  const img = document.createElement("img");
  img.setAttribute("src", `https://github.com/${username}.png`);
  img.setAttribute("alt", `'${username}' Git Image`);
  popupDiv.appendChild(img);

  body.appendChild(popupDiv);

  body.classList.add("popup-shown");
  const blackBG = document.createElement("div");
  blackBG.classList.add("popup-bg");
  blackBG.setAttribute("onclick", "popupRemove(this)");

  body.appendChild(blackBG);
};

const popupRemove = () => {
  console.log(`bg clicked`);
  body.removeChild(document.querySelector(".popup-bg"));
  body.removeChild(document.querySelector("#popup"));
};
