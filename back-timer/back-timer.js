let backTimer = () => {
	let config = {
		maxDays: 0,
		maxHours: 0,
		maxMinutes: 1,
		maxSeconds: 5
	}

	let currentDays = config.maxDays;
	let currentHours = config.maxHours;
	let currentMinutes = config.maxMinutes;
	let currentSeconds = config.maxSeconds;

	let displayTimeRremains = () => {
		console.clear();
		let timeRremains = currentDays + 'days ' + currentHours + ' : ' + currentMinutes + ' : ' + currentSeconds;
		console.log(timeRremains);
	}

	let reduceSeconds = () => {
		if(currentDays == 0 && currentHours == 0 && currentMinutes == 0 && currentSeconds == 0) {
			currentSeconds = 0;
			clearInterval(setInterval_reduceSeconds);
			console.log('Time left');
		} else {
			currentSeconds--;
			if(currentSeconds == -1) {
				currentSeconds = 59;
				reduceMinutes();
			}
			displayTimeRremains();
		}
	}
	let reduceMinutes = () => {
		currentMinutes--;
		if(currentMinutes == -1) {
			currentMinutes = 59;
			reduceHours();
		}
	}
	let reduceHours = () => {
		currentHours--;
		if(currentHours == -1) {
			currentHours = 23;
			reduceDays();
		}
	}
	let reduceDays = () => {
		currentDays--;
		if(currentDays == -1)
			currentDays = 364;
			//currentDays = 0;
	}

    let setInterval_reduceSeconds = setInterval(reduceSeconds, 1000);
}
backTimer();
