// Selecting body
let body = document.querySelector("body");

// Create <span> for timer on top of viewport
let span = document.createElement("span");
// Set attribute for span
span.setAttribute("id", "timer");
// Appending <span> to body
body.appendChild(span);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// ---> Creating login form
// Create <div> tag
let loginBox = document.createElement("div");
// Set class for loginBox
loginBox.classList.add("loginBox");
// Appending loginBox to body
body.appendChild(loginBox);

// Create <h2> for title
let h2 = document.createElement("h2");
// Set text for title
h2.innerText = "IQ TEST";
// Appendig <h2> tag to loginBox
loginBox.appendChild(h2);

// Craeting <form> tag
let form = document.createElement("form");
// Set attribute for form
form.setAttribute("action", "#");
// Appending form to loginBox
loginBox.appendChild(form);

// Create <div> tag for user information
let userBox = document.createElement("div");
// Set class for userBox
userBox.classList.add("userBox");
// Appending userBox to form
form.appendChild(userBox);

// Creating <input> tag
let input = document.createElement("input");
// Set class for input
input.classList.add('userName');
// Set attribute for input
input.setAttribute("type", "text");
// Appending input to userBox
userBox.appendChild(input);

// Creating label for input
let label = document.createElement("label");
// Set text for label
label.innerText = "Name";
// Appending label to userBox
userBox.appendChild(label);

// Craeting <a> tag for submit button animation
let a = document.createElement("a");
// Craeting 4 spans for animation with loop
for (let x = 0; x < 4; x++) {
  let span = document.createElement("span");
  // Appending span to a
  a.appendChild(span);
}

// Creating submit button
let submit = document.createElement("input");
// Set attribute for submit button
submit.setAttribute("type", "submit");
// Appending submit button to a
a.appendChild(submit);

// Appending a to form
form.appendChild(a);

// Creating <p> tag
let p = document.createElement("p");
// Set text for p
p.innerText = "* IQ test will start after submitting name *";
// Appending p to loginBox
loginBox.appendChild(p);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Geting login form input value
let userName = document.querySelectorAll('.userName').value;

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Create <section> tag for test
let testSection = document.createElement("section");
// Adding testSection to body
body.appendChild(testSection);
// Create loop to create 30 container page
for (let i = 1; i <= 30; i++) {
  // Create <div> tag for container
  let testContainer = document.createElement("div");
  // Set class for All testContainer
  testContainer.classList.add("testContainer");
  // Set class for testContainer one by one
  testContainer.classList.add("container" + [i]);

  // Appending testContainer to testSection
  testSection.appendChild(testContainer);

  // Create <div> tag for counter pages
  let pageCounter = document.createElement("div");
  // Set class for pageCounter
  pageCounter.classList.add("pageCounter");

  // Appending pageCounter to testContainer
  testContainer.appendChild(pageCounter);

  // Create span for pageCounter
  let pageCounterSpan = document.createElement("span");
  // Appending pageCounterSpan to pageCounter
  pageCounter.appendChild(pageCounterSpan);
  // Append span counter
  pageCounterSpan.append(i + "/30");

  // Create <div> tag for question test
  let questionTest = document.createElement("div");
  // Set class for All questionTest
  questionTest.classList.add("questionTest");
  // Set class for questionTest one by one
  questionTest.classList.add("test" + i);
  // Appending questionTest to testContainer
  testContainer.appendChild(questionTest);

  // Create <img> for test question
  let testImg = document.createElement("img");
  // Set attributes for one by one of <img> tag
  testImg.setAttribute("src", "Images/" + [i] + "/test" + [i] + ".png");
  // Appending testImg to questionTest
  questionTest.appendChild(testImg);

  // Create <div> tag for answer box
  let answerBox = document.createElement("div");
  // Set class for answer box
  answerBox.classList.add("answerBox");
  // Appending answerBox to testContainer
  testContainer.appendChild(answerBox);

  // Create conditional command for test answer
  if (i <= 12) {
    // loop for question one to twelve
    for (let j = 1; j <= 6; j++) {
      // Creating <img> tag for test answer
      let option = document.createElement("img");
      option.classList.add("option");
      option.setAttribute(
        "src",
        "Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      answerBox.appendChild(option);
    }
  } else {
    for (let j = 1; j <= 8; j++) {
      let option = document.createElement("img");
      option.classList.add("option");
      option.setAttribute(
        "src",
        "Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      answerBox.appendChild(option);
    }
  }
}

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// ---> Events
a.addEventListener("click", questionPage);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// selecting answer image
let testAnswer = document.querySelectorAll(".answerBox img");
// loop for next container
for (let x = 0; x < testAnswer.length; x++) {
  // addEventListener to when click at answer goes to next page
  testAnswer[x].addEventListener("click", nextContainer);
  // Function to 'display: none' previous page and 'display: flex' next page
  function nextContainer() {
    // Varibale for selecting test answer parent element
    let container = testAnswer[x].parentElement;
    // 'display: none' previous page
    container.parentElement.style.display = "none";
    // Varibale for selecting next element of container
    let nextContainer = container.parentElement.nextElementSibling;
    // 'display: flex' next page
    nextContainer.style.display = "flex";
  }
}

// Function for when form is submitted change display!
function questionPage(e) {
  e.preventDefault();
  document.querySelector(".loginBox").style.display = "none";
  document.querySelector(".container1").style.display = "flex";

  // Create timer for page
  // Selecting time according to secend
  let sec = 500;
  let time = setInterval(myTimer, 1000);

  function myTimer() {
    let timer = document.getElementById("timer");
    timer.innerHTML = "Time left : " + sec + "sec";
    sec--;
  }
}
