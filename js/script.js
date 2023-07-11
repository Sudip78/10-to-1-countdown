


timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};
setTimeout(countdown, 1000);



