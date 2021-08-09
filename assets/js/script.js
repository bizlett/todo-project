// get date for header
const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
const todayDate = new Date().toLocaleDateString('en-us', options);

document.getElementById('today-date').innerHTML = todayDate;