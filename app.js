$(document).ready(() => {
	const open = $(".js-hamburger-open");
	const close = $(".js-hamburger-close");
	const hamburger = $(".hamburger");

	const htmlBody = $("html, body");
	const channel = $(".channel");
	const services = $(".services");
	const welcomeContent = $(".welcome-content");
	const arrowDownChannel = $(".js-to-channel");
	const arrowDownServices = $(".js-to-services");
	const homepage = $(".home-page");
	const projects = $(".projects");
	const contactUs = $(".contact-us");

	hamburger.click(() => {
		open.toggleClass("d-none");
		close.toggleClass("d-none");
	});

	arrowDownChannel.click(() => {
		htmlBody.animate(
			{
				scrollTop: channel.offset().top - 110,
			},
			800
		);
	});

	arrowDownServices.click(() => {
		htmlBody.animate(
			{
				scrollTop: services.offset().top - 110,
			},
			800
		);
	});

	homepage.click(() => {
		htmlBody.animate(
			{
				scrollTop: 0,
			},
			800
		);
	});

	projects.click(() => {
		htmlBody.animate(
			{
				scrollTop: channel.offset().top - 110,
			},
			800
		);
	});

	contactUs.click(() => {
		htmlBody.animate(
			{
				scrollTop: welcomeContent.offset().top - 110,
			},
			800
		);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$("header").addClass("header-scroll");
		} else {
			$("header").removeClass("header-scroll");
		}
	});
});
