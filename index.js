// the first thing is to get the DOM element(s) that we want to trigger
// start by declaring a variable that'll hold the value of this DOM element.

let featureNavItem = document.querySelector(".featuresDrop-down");
let featuresModal = document.querySelector(".feature-drop-answer");

// now that we have initialized the variables that holds the
// element we need in the DOM tree. Let's add an event listener
// that takes in a callback function.
// let's start with the callback function first, then we'll move down to event listener.

function displayFeaturesModal() {
  // 'featureModal' is a global variable,
  // so we can actually use it in this callback function.
  // but I need to check if the modal or dropdown itself contains
  // a specific class, by running through a conditional statement

  if (!featuresModal.classList.contains("show")) {
    console.log("show class added");
    featuresModal.classList.add("show");
  } else {
    console.log("show class removed");
    featuresModal.classList.remove("show");
  }

  console.log(featuresModal);
}

featureNavItem.addEventListener(
  "click",
  // remeber how we talked about callback functions previously?
  // Now pass the callback function as an argument here
  displayFeaturesModal
);
