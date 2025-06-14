let timeleft = 15;
const countDown = document.getElementById("countDown");
let para = document.getElementById("para");
const timer = setInterval(() => {
    timeleft--;
    countDown.innerHTML= timeleft;
    if(timeleft < 0) {
        clearInterval(timer);
        para.innerHTML = `<a href="index.html" id="resend">Resend OTP</a>`;
    }
}, 1000);