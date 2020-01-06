/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav"

//Get the nav bar
var navbar = document.getElementById("navbar__list")

function addElement (){
    const sections = document.getElementsByClassName("section")
    for (let section of sections) {
        const navli = document.createElement("li");
        navli.className = "menu__link";
        const anchor = document.createElement("a");
        anchor.href = "#" + section.id;
        anchor.textContent = section.dataset.nav;
        navli.dataset.sectionId = section.id;
        navli.appendChild(anchor);
        navbar.appendChild(navli);


    }
}

window.onscroll = function() {
  
  const sections = document.getElementsByClassName("section");
  const distances = [];
  for (let section of sections) {
    const distance = Math.abs(section.getBoundingClientRect().top);
    distances.push([section, distance]);
  }
  distances.sort(function(a, b) {return a[1] - b[1]})
  const closestSection = distances[0][0];
  const navlis = document.getElementsByClassName("menu__link");
  for (let navli of navlis) {
     if (navli.dataset.sectionId === closestSection.id) {
       navli.classList.add("active");
     } else {
      navli.classList.remove("active");
     }
  }
};




// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.onload = function() {
    this.addElement();
};

// Build menu 
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

// add CSS style for menu
var LiStyle = document.querySelector(".navbar__menu ul");
LiStyle.style.cssText = "padding-left: 10px";

var navStyle = document.querySelector(".navbar__menu");
navStyle.style.cssText = "background-color: grey;"

// Set sections as active
