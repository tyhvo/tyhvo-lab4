document.addEventListener('DOMContentLoaded', () => {
    const timeHM = document.querySelector('.time-hm');
    const ampmElement = document.querySelector('.ampm');
    const secondsElement = document.querySelector('.seconds');
    const dateElement = document.querySelector('.date');

    function updateTime() {
        const now = new Date();

        // Format time
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Determine AM or PM
        if (hours >= 12) {
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        // Convert to 12-hour format
        hours = hours % 12 || 12;

        // Add leading zeroes if needed
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the DOM
        timeHM.textContent = `${hours}:${minutes}`;
        ampmElement.textContent = ampm;
        secondsElement.textContent = seconds;

        // Format and update the date
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();

        dateElement.textContent = `${month} ${day}, ${year}`;
    }

    // Update every second
    setInterval(updateTime, 1000);

    updateTime();
});
