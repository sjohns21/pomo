$(document).ready(function() {
	var secs = $('input').val().split(":")[1];
	var mins = $('input').val().split(":")[0];
	console.log(mins +":"+ secs)
	// var iT = secs + mins*60; //65
	secs = eval(secs)
	var iT = eval( mins*60 +secs)
	console.log(iT);

		$("#start").click(function() {
			var int = setInterval(tick, 1000);
			$("#stop").click(function() {
				clearInterval(int);
		});

		function tick() {
			if (mins == 0 && secs == 0) { //0:0
				$('#work').toggle();
				$('#rest').toggle();
				var color = $('#circle').css('background-color')
				if (color=='rgb(255, 0, 0)') {
					$('#circle').css('background-color','green');
				}
				else {
					$('#circle').css('background-color','red');
				}
				// secs =  3;
				// mins = 0;

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
