const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [80, 75, 70, 65, 55, 50];
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));

// navToggle.addEventListener('click', () => {
// 	document.body.classList.toggle('nav-open');
// });

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		// document.body.classList.remove('nav-open');
		nav.classList.remove('active');
	});
});

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
