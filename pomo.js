$(document).ready(function() {
	$("#start").click(function() {
		var secs = 3;
		var mins = 0;
		var iT = secs + mins*60; //65
		// console.log(iT);
		var int = setInterval(tick, 1000);
		$("#stop").click(function() {
			clearInterval(int);
		});


		function tick() {
			if (mins == 0 && secs == 0) { //0:0
				console.log('buzz');
				$('#work').toggle();
				$('#rest').toggle();
				var color = $('#circle').css('background-color')
				console.log(color);
				console.log(color=='rgb(255, 0, 0)')
				if (color=='rgb(255, 0, 0)') {
					$('#circle').css('background-color','green');
					console.log($('#circle').css('background-color'))
				}
				else {
					$('#circle').css('background-color','red');
				}
				secs =  3;
				mins = 0;
			}
			else if (mins !== 0 && secs == 0) { //1:00
				mins=mins-1;
				secs=59;
			}
			else if ((mins !== 0||mins==0) && secs !== 0) { //1:01
				secs=secs-1;
			}
			if (secs<10){
				$('#timer-display').text(mins + ":0" + secs);

			}
			else {
				$('#timer-display').text(mins + ":" + secs);
			}
			var cT = secs + mins*60;
			var frac = cT/iT;
			// console.log(frac);
			$('#cover').css("height",frac*20 + "em");
		}

	});

});
