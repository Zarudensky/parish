$(document).ready(function(){
	// scroll up
	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
		} 
		else {
		$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// mobile menu
	$('#btn_om').click(function() {
		$('.header__block_menu').addClass('active');
		$('.menu__back').addClass('active');
		$('.header__block_menu').removeClass('closed');
		$('body').addClass('fixed');
	});
	$('.menu__btn_back, .header__block_menu, .menu__back').click(function() {
		if ($(window).width() < 1220) {
			$('.header__block_menu').removeClass('active');
			$('.menu__back').removeClass('active');
			$('.header__block_menu').addClass('closed');
			$('body').removeClass('fixed');
		}
	});

	// modal form
	$('#learnMore').click(function() {
		$('.modal').addClass('active');
	  	$('body').addClass('overflow');
	});
	$('.close, .modal__back').click(function() {
	  	$('.modal').removeClass('active');
		$('body').removeClass('overflow');
	});
});