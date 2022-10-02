const navBtn = document.querySelector('nav').querySelectorAll('a');
let activeBtn;

navBtn.forEach(btn => {
	if (btn.classList.contains('active')) {
		activeBtn = btn;
	}
	btn.addEventListener('click', () => {
		activeBtn.classList.remove('active');
		btn.classList.add('active');
		activeBtn = btn;
	});
});