	var h2 = document.getElementsByTagName('time2')[0],
	h1 = document.getElementsByTagName('time1')[0],
    startr = document.getElementById('startr'),
    stopr = document.getElementById('stopr'),
    clearr = document.getElementById('clearr'),
    secondsr, minutesr, hoursr, daysr,
    tr, y = '', sec, input,
    seconds = 0, minutes = 0, hours = 0, days = 0,
    t;
	
othername.onclick = function()
{
    input = document.getElementById("userInput").value;
	if(input == '')
	{
		alert("Feild is empty");
		}
	else if(isNaN(input))
	{
		alert("Please enter a number");
		}
	else{
	y = parseInt(input);
	sec = parseInt(input);
	secondsr = input%60;
	input = Math.floor(input/60);
	minutesr = input%60;
	input = Math.floor(input/60);
	hoursr = input%24;
	input = Math.floor(input/24);
	daysr = input;
	document.getElementById("clearr").style.display = "block";	
    seconds = 0, minutes = 0, hours = 0, days = 0;
    h1.textContent = "00:00:00:00";
    h2.textContent = (daysr ? (daysr > 9 ? daysr : "0" + daysr) : "00") + ":" + (hoursr ? (hoursr > 9 ? hoursr : "0" + hoursr) : "00") + ":" + (minutesr ? (minutesr > 9 ? minutesr : "0" + minutesr) : "00") + ":" + (secondsr > 9 ? secondsr : "0" + secondsr);
    clearTimeout(tr);
document.getElementById("stopr").style.display = "block";	
document.getElementById("startr").style.display = "block";	
	}
	}

function addr() {
	if(sec > 0)
	{
		sec--;
    	secondsr--;
    if (secondsr < 00) {
        secondsr = 59;
        minutesr--;
        if (minutesr < 00) {
            minutesr = 59;
            hoursr--;
            if (hoursr < 00) {
                hoursr = 23;
                daysr--;
                }
        }
    }
	
    h2.textContent = (daysr ? (daysr > 9 ? daysr : "0" + daysr) : "00") + ":" + (hoursr ? (hoursr > 9 ? hoursr : "0" + hoursr) : "00") + ":" + (minutesr ? (minutesr > 9 ? minutesr : "0" + minutesr) : "00") + ":" + (secondsr > 9 ? secondsr : "0" + secondsr);

	if(sec > -1)
	{
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
                days++;
                }
			}
		}
		}
    h1.textContent = (days ? (days > 9 ? days : "0" + days) : "00") + ":" + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timerr();
}
else
{
	alt();
document.getElementById("stopr").style.display = "none";	
document.getElementById("startr").style.display = "none";	
	}
}
function alt()
{
	alert("Time Out");
	}
function timerr() {
    tr = setTimeout(addr, 1000);
}


startr.onclick = function()
{
	if(y == '')
	{
		alert("Enter a number and then click Set Value");
		}
	else{
	document.getElementById("clearr").style.display = "block";	
	timerr();
	}
	}

stopr.onclick = function() {
	if(y == '')
	{
		alert("Enter a number and then click Set Value");
		}
	else{
    clearTimeout(tr);
	}
}

clearr.onclick = function() {
	var z = y;
    h1.textContent = "00:00:00:00";
    seconds = 00; minutes = 00; hours = 00;
	sec = parseInt(z);
	secondsr = z%60;
	z = Math.floor(z/60);
	minutesr = z%60;
	z = Math.floor(z/60);
	hoursr = z%24;
	z = Math.floor(z/24);
	daysr = z;
document.getElementById("stopr").style.display = "block";	
document.getElementById("startr").style.display = "block";	
    h2.textContent = (daysr ? (daysr > 9 ? daysr : "0" + daysr) : "00") + ":" + (hoursr ? (hoursr > 9 ? hoursr : "0" + hoursr) : "00") + ":" + (minutesr ? (minutesr > 9 ? minutesr : "0" + minutesr) : "00") + ":" + (secondsr > 9 ? secondsr : "0" + secondsr);
}