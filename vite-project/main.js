import './style.css'


// NAVIGATION

const mobileNavBtn = document.querySelector('#mobileNavBtn');
const mobileNav = document.querySelector('#mobileNav');
const navLinks = document.querySelectorAll(".nav--link");
const closeBtn = document.querySelector("#closeBtn");
const navBkg = document.querySelector(".nav--bkg");

const handleMobileNavClick = (e) => {
  const isOpen = JSON.parse(e.target.getAttribute("aria-expanded"));
	e.target.setAttribute("aria-expanded", !isOpen);
	toggleOpenAttribute([mobileNav, navBkg]);
	toggleTabIndexes([...navLinks, closeBtn]);
};

const closeMobileNav = () => {
	mobileNavBtn.setAttribute("aria-expanded", "false");
	toggleOpenAttribute([mobileNav, navBkg]);
	toggleTabIndexes([...navLinks, closeBtn]);
};

// EVENT LISTENERS 

mobileNavBtn.addEventListener('click', handleMobileNavClick);