const navBtn = document.querySelector(".sidebar").querySelectorAll("a");
let activeBtn;

navBtn.forEach(btn => {
	if (btn.classList.contains("sidebar__item_active")) activeBtn = btn;
	btn.addEventListener("click", () => {
		activeBtn.classList.remove("sidebar__item_active");
		btn.classList.add("sidebar__item_active");
		activeBtn = btn;
	});
});