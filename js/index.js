const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navLinksMob = document.querySelectorAll('.nav__item-mob');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [80, 75, 70, 65, 55, 50];
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const listItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

toggle.addEventListener('click', () => nav.classList.toggle('active'));

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('active');
	});
});

window.addEventListener('scroll', () => {
	mainFn();
});

const mainFn = () => {
	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 10) {
			navLinksMob.forEach((navE) => {
				navE.classList.remove('active');
			});
			navLinksMob[i].classList.add('active');
		}
	});

	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll('.progress-percent').forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent =
				progressBarPercents[i];
		});
	}
};

mainFn();
