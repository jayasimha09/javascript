
setInterval(getTime, 1000);
function getTime() {
    let date = new Date();
    document.getElementById('time').innerHTML = formatTime();

    formatTime();

    function formatTime() {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let AmorPm = hours > 12 ? "PM" : "AM";
        
        hours = (hours % 12) || 12;

        hours = formatSingleDigits(hours);
        minutes = formatSingleDigits(minutes);
        seconds = formatSingleDigits(seconds);

        return `${hours}:${minutes}:${seconds} ${AmorPm}`
    }

    function formatSingleDigits(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}