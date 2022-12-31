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


// back to top button with progress bar
let calcScrollValue = () =>{
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById('progress-value');
	let pos = document.documentElement.scrollTop;
	let calcHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if(pos > 100){
		scrollProgress.style.display = 'grid';
	}
	else{
		scrollProgress.style.display = 'none';
	}
scrollProgress.addEventListener('click', function(){
	document.documentElement.scrollTop = 0;
});
scrollProgress.style.background = `conic-gradient(var(--main-color) ${scrollValue}%, #d7d7d7 ${scrollValue + 2}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



