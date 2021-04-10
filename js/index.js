const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [80, 75, 70, 65, 55, 50];

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

// const navbar = document.querySelector('.navbar');
// const navbarOffsetTop = navbar.offsetTop;
// const sections = document.querySelectorAll('section');
// const navbarLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
	mainFn();
});

const mainFn = () => {
	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll('.progress-percent').forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent =
				progressBarPercents[i];
		});
	}
};

mainFn();

window.addEventListener('resize', () => {
	window.location.reload();
});
