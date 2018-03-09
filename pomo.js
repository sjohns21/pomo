$(document).ready(function() {
		$("#start").click(function() {
			var secs = eval($('#work-input').val().split(":")[1]);
			var mins = eval($('#work-input').val().split(":")[0]);
			// secs = eval($('#rest-input').val().split(":")[1]);
			// mins = eval($('#rest-input').val().split(":")[0]);
			var iT = eval( mins*60 + secs);
			var int = setInterval(tick, 1000);
			$("#stop").click(function() {
				clearInterval(int);
			});

	//switch from rest - work
		function tick() {
			if (mins == 0 && secs == 0) { //0:0
				$('#work').toggle();
				$('#rest').toggle();
				var color = $('#circle').css('background-color')
//if color red, switch work to rest
				if (color=='rgb(255, 0, 0)') {
					$('#circle').css('background-color','green');
					 secs = eval($('#rest-input').val().split(":")[1]);
					 mins = eval($('#rest-input').val().split(":")[0]);
					 iT = eval( mins*60 + secs)
				}
	//if color green, switch rest to work
				else {
					$('#circle').css('background-color','red');
					secs = eval($('#work-input').val().split(":")[1]);
					mins = eval($('#work-input').val().split(":")[0]);
					iT = eval( mins*60 + secs)
				}

//decrement timer values
			}
			else if (mins !== 0 && secs == 0) { //1:00
				mins=mins-1;
				secs=59;
			}
			else if ((mins !== 0||mins==0) && secs !== 0) { //1:01
				secs=secs-1;
			}
//correct timer display
			if (secs<10){
				$('#timer-display').text(mins + ":0" + secs);

			}
			else {
				$('#timer-display').text(mins + ":" + secs);
			}
//math for adjustment in cover
			var cT = secs + mins*60;
			var frac = cT / iT;
			//move cover every cyccle
			$('#cover').css("height",frac*20 + "em");
		}

	});

});
