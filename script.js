let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Task 1.0 Select and cache the <main> element in a variable named mainEl

let mainEl = document.querySelector("main")

// Task 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

let root = document.querySelector(":root")
let rootStyles = getComputedStyle(root)
mainEl.style.backgroundColor = rootStyles.getPropertyValue("--main-bg")

// Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>

mainEl.insideHTML("h1", "SEI Rocks!")

// Task 1.3 Add a class of flex-ctr to mainEl

mainEl.classList.add("flex-ctr")

// Task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl



// Task 2.1 Set the height topMenuEl element to be 100%



// Task 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property



// Task 2.3 Add a class of flex-around to topMenuEl



// Task 3.0 Copy the following data structure to the top of script.js



// Task 3.1 Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object

// Set the new element's content to the value of the text property of the "link" object

// Append the new element to the topMenuEl element