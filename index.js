const welcome = document.querySelector('#welcome-section');
let navBar = document.getElementById('navbar');

const options = { threshold: 0.1 };

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			navBar.style.display = 'flex';
		} else {
			navBar.style.display = 'none';
		}
	});
}, options);

observer.observe(welcome);

const project = document.querySelector('#projects');
const img = document.querySelectorAll('img');

const options2 = { threshold: 0.5 };

const observer2 = new IntersectionObserver(function (entries, observer2) {
	entries.forEach(entry => {
		if (entry && entry.isIntersecting) {
			img.forEach(img => {
				img.src = img.getAttribute('data-src');
				img.style.animationPlayState = 'running';
			});
		}
	});
}, options2);

observer2.observe(project);
