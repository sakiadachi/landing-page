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
        const anchor = document.createElement("a");
        anchor.href = "#" + section.id;
        anchor.textContent = section.dataset.nav;
        navli.appendChild(anchor);
        navbar.appendChild(navli);
    }
}


window.onscroll = function() {myFunction()};


var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
(function (){
    "use strict";
    let target = document.querySelectorAll('a[href^="#"]');
    let i = 0;
    for (i = 0; i < target.length; i++){
        e.preventDefault();
        target[i].onclick = function (e){
        let hash = this.getAttribute("href");
        let elem = document.getElementById(hash.replace ("#",""));
        //history.pushState (null, null, hush);
        elem.scrollIntoView({ behavior: 'smooth'});
      }
}
}) ();




/**
 * End Main Functions
 * Begin Events
 * 
*/
window.onload = function() {
    this.addElement()
}

// Build menu 

// Scroll to section on link click

// Set sections as active


