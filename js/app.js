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


//Get the nav bar
const navbar = document.getElementById("navbar__list")
//Build the nav list
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

//add the scroll function
window.onscroll = function() {
    // Add class 'active' to section when near top of viewport
    const sections = document.getElementsByClassName("section");
    const distances = [];
    for (let section of sections) {
        const distance = Math.abs(section.getBoundingClientRect().top);
       distances.push([section, distance]);
  }
// Set sections as active
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

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.onload = function() {
    this.addElement();
};

// Build menu bar
const sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add CSS style for menu
const LiStyle = document.querySelector(".navbar__menu ul");
LiStyle.style.cssText = "padding-left: 10px";

const navStyle = document.querySelector(".navbar__menu");
navStyle.style.cssText = "background-color: white"

// Create section4
const container = document.querySelector("main");

// Clone the existed contents
const contents = document.querySelector(".section");
const newSection = contents.cloneNode(true);

container.appendChild(newSection);

// Change the attribute's names
newSection.className = "section";
newSection.setAttribute("data-nav", "section 4"); 
newSection.setAttribute("id", "section4"); 

// Change the heading in section4
var newHeading = newSection.querySelector("h2");
newHeading.textContent = "Section 4"