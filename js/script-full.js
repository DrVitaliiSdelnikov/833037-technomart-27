var link = document.querySelector(".open-popup");
var linkMap = document.querySelector(".contacts-map");

var popup = document.querySelector(".popup-feedback");
var popupMap = document.querySelector(".popup-map");

var close = popup.querySelector(".close-button");
var closeMap = popupMap.querySelector(".close-button");

var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=mail]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";
const justUselessConst = 1;
const model = {};

try {
storage = localStorage.getItem("fullname");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-feedback-map-show");
  fullname.focus();

if (storage) {
  fullname.value = storage;
  email.focus();
} else {
  fullname.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("popup-feedback-map-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!fullname.value || !email.value || !text.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("popup-feedback-map-show")) {
    popup.classList.remove("popup-feedback-map-show");
  }

  if (popupMap.classList.contains("modal-map-show")) {
    popupMap.classList.remove("modal-map-show");
  }
}
});



linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-feedback-map-show");

});

closeMap.addEventListener("click", function (evt) {
evt.preventDefault();
popupMap.classList.remove("popup-feedback-map-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popupMap.classList.contains("popup-feedback-map-show")) {
    popupMap.classList.remove("popup-feedback-map-show");
  }
}
});
