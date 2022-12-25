const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


//typed animation control
var typed = new Typed(".auto-input",{
    strings: ["UI/UX Designer", "Web Developer"],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true,
    backDelay: 1000
})


//time for copyright
let copyrightTime = document.querySelector('time');
copyrightTime.textContent = new Date().getFullYear();
