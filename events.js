
let outputTarget = document.getElementById("output-target");
let section = document.getElementsByClassName("article-section");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
function allClicked() {
  outputTarget.innerHTML = `You clicked on the ${event.currentTarget.innerText} section`;
}

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", allClicked);
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
let title = document.getElementById("page-title");
title.addEventListener("mouseover", function() {
  outputTarget.innerHTML = "You moved your mouse over the header";
})

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
title.addEventListener("mouseleave", function() {
  outputTarget.innerHTML = "You left me!!";
})

// When you type characters into the input field, the output element should mirror the text in the input field.
let keyInput = document.getElementById("keypress-input");
keyInput.addEventListener("keypress", function() {
  outputTarget.innerHTML = keyInput.value;
})

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
let colorBtn = document.getElementById("add-color");
let gPig = document.getElementById("guinea-pig");
colorBtn.addEventListener("click", function() {
  gPig.classList.toggle("blue");
})

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
let hulkBtn = document.getElementById("make-large");
hulkBtn.addEventListener("click", function() {
  gPig.classList.toggle("hulk");
})

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
let capBtn = document.getElementById("add-border");
capBtn.addEventListener("click", function() {
  gPig.classList.toggle("borderz");
})

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
let roundBtn = document.getElementById("add-rounding");
roundBtn.addEventListener("click", function() {
  gPig.classList.toggle("roundBorder");
})

// The first section's text should be bold.


// The last section's text should be bold and italicized.


// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

