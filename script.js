let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. 
  // Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  let changeTitle = document.querySelector("#main-title")
  changeTitle.textContent = "A Page about DOM"

  // Part 2
  // Select the body and change the background-color to a new color of your choice.

  let bodyPaint = document.querySelector("body")
  bodyPaint.style.backgroundColor = "red"

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.

  const changeList = document.querySelectorAll("#favorite-things li")
  changeList[5].remove()

  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. 
  // Remember you might have to iterate through the list of elements

  const quotesList = document.querySelectorAll(".special-title")
  quotesList.forEach((quote) => {
    quote.style.fontSize = "2rem"
  })

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  const changeAnotherList = document.querySelectorAll("#past-races li")
  changeAnotherList[3].remove()

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change 
  // the new <li> text to the name of a city, and append it to the Past Races list.

  const li = document.createElement("li")
  li.textContent = "Cuba"
  document.getElementById("past-races").appendChild(li)

  // Part 7
  /* Create a new .blog-post corresponding to the new city added in Part 6. You 
  will have to create a new <div> with class of .blog-post, a new <h2> with text, and a 
  new <p> with some text. Think about what order you want to create the elements, and what 
  order you want to append them in. */

  const divEl = document.createElement("div")
  divEl.classList.add("blog-post", "purple")
  const h1El = document.createElement("h1")
  h1El.textContent = "Cuba"
  const pEl = document.createElement("p")
  pEl.textContent = "I WON A RACE DRIVING A BEAT UP BEETLE!"
  document.querySelector(".main").appendChild(divEl)
  divEl.appendChild(h1El)
  divEl.appendChild(pEl)

  // Part 8
  // Query select the #quote-title ID element and add a click event handler. That event 
  // handler should use the function randomQuote whenever #quote-title is clicked.
  
  const newQuote = document.querySelector("#quote-title")
  newQuote.addEventListener("click", randomQuote)

  // Part 9
  // Select all .blog-post class elements. Iterate through the list of .blog-post class 
  // elements and apply two event handlers to each node. The first event handler should 
  // be listening for mouseout events while the second handler should be listening for 
  // mouseenter events.
  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red

  const customizeScreen = document.getElementsByClassName("blog-post")
  console.log(customizeScreen)
  for (let i=0; i < customizeScreen.length; i++) {
    customizeScreen[i].addEventListener("mouseout", function(evt1) {
      customizeScreen[i].classList.toggle("purple")
    })
    customizeScreen[i].addEventListener("mouseenter", function(evt2) {
      customizeScreen[i].classList.toggle("red")
    })
  }
});
