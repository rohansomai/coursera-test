setInterval(() => {
    let d = new Date()
    currentHour = d.getHours();
    currentMinute = d.getMinutes();
    currentSecond = d.getSeconds();

    hourRotation = 30 * currentHour + currentMinute / 2;
    minuteRotation = 6 * currentMinute;
    secondRotation = 6 * currentSecond;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;

    function n(n){
        return n > 9 ? "" + n: "0" + n;
    }
    
    hourDigital.innerHTML = n(d.getHours());
    minuteDigital.innerHTML = n(d.getMinutes());
    secondDigital.innerHTML = n(d.getSeconds());

}, 1000);