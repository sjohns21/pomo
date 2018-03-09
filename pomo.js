$(document).ready(function() {
	$("#start").click(function() {
		var secs = 5;
		var mins = 1;
		var iT = secs + mins*60; //65
		console.log(iT);
		var int = setInterval(tick, 1000);
		$("#stop").click(function() {
			clearInterval(int);
		});

		function tick() {
			if (mins == 0 && secs == 0) { //0:0
				alert ('buzz');
			}
			else if (mins !== 0 && secs == 0) { //1:00
				mins=mins-1;
				secs=59;
			}
			else if ((mins !== 0||mins==0) && secs !== 0) { //1:01
				secs=secs-1;
			}
			$('#timer-display').text(mins + ":" + secs);
			var cT = secs + mins*60;
			var frac = cT/iT;
			console.log(frac);
			$('#cover').css("height",frac*20 + "em");
			$('#status-display').text(frac);
		}

	});

});
