// Timing Events Exercise

// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;  
    div1.append(p1);
  }, 1000);

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;  
    div2.append(p2);
    setTimeout(() => {
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;  
      div2.append(p3);
    }, 1000);
}, 2000);

// 3a
const counter = setInterval(() => {
    let time = 1
    setInterval(() => {})
    console.log(time);
    time++;
 }, 1000);
 
// 3b
 const stop = document.querySelector(`button`);
 stop.addEventListener(`click`, () => {
     clearInterval(counter);
 });

// BONUS
// 4
const d = new Date();
let minutes = d.getMinutes();
const countdown = setInterval(() => {
    if (minutes >= 0) {
        const div3 = document.querySelector(`#countdown`);
        const p4 = document.createElement(`p`);
        p4.innerText = minutes;  
        div3.append(p4);;
    } else {
        clearInterval(countdown);
        // p4.innerText = `Hi`;  
        // div3.append(p4);
    }
    minutes--;
}, 1000);