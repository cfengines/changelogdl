const date = Date()
setInterval(() => {
    const clock = document.querySelector('#clock');
    now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let mean;
    hrs >= 12 ? mean = 'PM' : mean = 'AM';
    let thetime = `The time is ${hrs}:${min}:${sec} ${mean}`;
    clock.textContent = thetime;
}, 10);

const log = document.querySelector('#log');

log.textContent = `You logged here at ${date}`;
