const WEEK = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THUESDAY", "FRIDAY", "SATURDAY"];

function updateTime() {
    const now = new Date();

    document.getElementById("time").innerText = 
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];
}
function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}
updateTime();
setInterval(updateTime, 1000);