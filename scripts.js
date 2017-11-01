$( document ).ready(function() {

	insertConfetti();

	$(window).scroll(function() {
		if($("#steps-desktop").css("display") === "none") { 
			return; }
		var browserTop = $("#screens").offset().top;

		var screen1Top = $("#step1").offset().top;
		var screen2Top = $("#step2").offset().top;
		var screen3Top = $("#step3").offset().top;
		var screen4Top = $("#step4").offset().top;
		var margin = 80;

		// default settings
		$("#browser").css("opacity", 1);
		$(".screen").css("opacity", 0);
		$("#screen4").css("opacity", 0);
		$("#confetti").removeClass("pop");

		if(browserTop <= screen2Top - margin) {
			$("#screen1").css("opacity", 1);
		} else if (browserTop <= screen3Top - margin) {
			$("#screen2").css("opacity", 1);
		} else if (browserTop <= screen4Top - margin * 3) {
			$("#screen3").css("opacity", 1);
		} else {
			$("#browser").css("opacity", 0);
			$("#screen4").css("opacity", 1);
			$("#confetti").addClass("pop");
		}
	});


	var step = 0;


	$("#nextStepMobile").click(function() {
		step = (step + 1) % 4;
		changeMobileStep(step);
	});

	$("#prevStepMobile").click(function() {
		if(step === 0) step = 3;
		else step = (step - 1) % 4;
		changeMobileStep(step);
	});

});

function goToByScroll(selector) {
	var offset = 50;
  $('html,body').animate({scrollTop: $(selector).offset().top + offset},'slow');
  return false;
}

function insertConfetti() {
	var confettiDiv = $("#confetti");
	var mobileConfettiDiv = $("#steps-mobile#confetti");
	for(var i = 0; i < 12; i++) {
		confettiDiv.append($("<i></i>"));
		mobileConfettiDiv.append($("<i></i>"));
	}
}

function changeMobileStep(step) {
	// revert to default states
		$("#steps-mobile").find("#browser").css("display", "block");
		$("#steps-mobile").find("#screen4").css("display", "none");
		$("#steps-mobile").find("#confetti").removeClass("pop");
		$("#steps-mobile").find(".screen").css("opacity", 0);

		$("#steps-slider").css("transform", "translate(-" + (25 * step % 100) + "%)");
		if(step + 1 == 4) {
			$("#steps-mobile").find("#browser").css("display", "none");
			$("#steps-mobile").find("#screen4").css("display", "block");
			$("#steps-mobile").find("#confetti").addClass("pop");
		} else {
			$("#steps-mobile").find("#screen" + (step + 1)).css("opacity", 1);
		}
}
