'use strict';

/* window.addEventListener('DOMContentLoaded', () => {
	let deadline;

	const yes = document.getElementById('yes'),
		no = document.getElementById('no'),
		dorm = document.querySelector('.dorm'),
		container = document.querySelector('.container'),
		deadDate = document.querySelector('.dead-date');
	yes.addEventListener('click', (e) => {
		if (e.target && e.target.id == 'yes') {
			deadline = '2021-12-08';
			deadDate.innerHTML = '08.12.2021';
		}
		isChecked();
	});
	no.addEventListener('click', (e) => {
		if (e.target && e.target.id == 'no') {
			deadline = '2022-01-04';
			deadDate.innerHTML = '04.01.2022';
		}
		isChecked();
	});
	function isChecked() {
		dorm.classList.add('animate__fadeOut');
		dorm.style.display = 'none';
		container.classList.add('animate__fadeIn');

		//date

		function getTimeRemaining(endtime) {
			const t = Date.parse(endtime) - Date.parse(new Date()),
				days = Math.floor(t / (1000 * 3600 * 24)),
				hours = Math.floor((t / (1000 * 3600)) % 24),
				minutes = Math.floor((t / 1000 / 60) % 60),
				seconds = Math.floor((t / 1000) % 60);
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			};
		}

		function getZero(num) {
			if (num < 10 && num >= 0) {
				return `0${num}`;
			} else {
				return num;
			}
		}

		function setclock(selector, endtime) {
			const timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);

			function updateClock() {
				const t = getTimeRemaining(endtime);

				days.innerHTML = getZero(t.days);
				hours.innerHTML = getZero(t.hours);
				minutes.innerHTML = getZero(t.minutes);
				seconds.innerHTML = getZero(t.seconds);

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			}
		}
		setclock('.timer', deadline);
	}
}); */

const inpRUB = document.querySelector('#rub');
const inpUSD = document.querySelector('#usd');

function CBR_XML_Daily_Ru(rates) {
	let USDrate = +rates.Valute.USD.Value.toFixed(4);
	inpRUB.addEventListener('input', () => {
		inpUSD.value = (+inpRUB.value / USDrate).toFixed(2);
	});
	inpUSD.addEventListener('input', () => {
		inpRUB.value = (+inpUSD.value * USDrate).toFixed(2);
	});
}
