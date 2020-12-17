import './styles.css';

const refs = {
    days : document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins : document.querySelector('span[data-value="mins"]'),
    secs : document.querySelector('span[data-value="secs"]'),
}
// const targetDate = new Date('Jan 01, 2021');
let interval = null;

// const pad = (value) => {
//     return String(value).padStart(2, '0');
// }

// const count = () => {
//     const time = targetDate - Date.now();
//     refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
//     refs.hours.textContent = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     refs.mins.textContent = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     refs.secs.textContent = pad(Math.floor((time % (1000 * 60)) / (1000)));
// }
// setInterval(count, 1000)


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector
        this.targetDate = targetDate
    }
    
   pad(value) {
    return String(value).padStart(2, '0');
}
   count() {
    const time = this.targetDate - Date.now();
    refs.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    refs.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / (1000)));
   }
    
    start() {
        this.count();
        interval = setInterval(() => {
            this.count();
        }, 1000);
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
timer.start();

// визивати треба як функцію а не як колбек