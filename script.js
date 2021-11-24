"use strict";

window.addEventListener('DOMContentLoaded', ()=> {
    let deadline;
    const wave11 = {
        wave11NotDorm: {
            lvl1: '2021-11-04',
            lvl2: '2022-01-04',
            lvl3: '2022-03-04',
            lvl4: '2022-06-04',
            lvl5: '2022-10-04',
            lvl6: '2022-12-04',
            lvl7: '2023-02-04',
            lvl10: '2023-08-04',
            lvl14: '2024-02-04',
            lvl18: '2024-11-04',
            lvl20: '2025-02-04',
            lvl21: '2025-08-04',
        },
        wave11Dorm: {
            lvl1: '2021-10-24',
            lvl2: '2021-12-08',
            lvl3: '2022-01-22',
            lvl4: '2022-04-07',
            lvl5: '2022-07-06',
            lvl6: '2022-08-20',
            lvl7: '2022-10-04',
            lvl10: '2023-02-01',
            lvl14: '2024-02-04',
            lvl18: '2024-11-04',
            lvl20: '2025-02-04',
            lvl21: '2025-08-04',
        }
    }
	const yes = document.getElementById('yes'),
        no  = document.getElementById('no'),
        dorm = document.querySelector('.dorm'),
        container = document.querySelector('.container'),
        deadDate = document.querySelector('.dead-date'),
        hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', ()=> {
        console.log('ham');
    })

    yes.addEventListener('click', (e) => {
        if (e.target && e.target.id == 'yes')
        {
            deadline = '2021-12-08';
            deadDate.innerHTML = '08.12.2021';

        }
        isChecked();
    });
    no.addEventListener('click', (e) => {
        if (e.target && e.target.id == 'no')
        {
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
            minutes = Math.floor(( t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num < 10 && num >=0) {
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
})
