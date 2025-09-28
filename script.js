document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Target Date/Time Setup (The EXACT two-year anniversary moment: Sep 28, 2025 at 10:46 PM)
    const targetDate = new Date("September 28, 2025 22:46:00").getTime();
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    
    // 2. Countdown Logic
    function updateCounter() {
        const now = new Date().getTime();
        const distance = targetDate - now; 

        // Stop the countdown once the time has passed
        if (distance < 0) {
            document.getElementById("years").innerText = "2"; 
            document.getElementById("days").innerText = "0";
            document.getElementById("hours").innerText = "0";
            document.getElementById("minutes").innerText = "0";
            document.querySelector('.title').innerText = "Happy 2 Year Anniversary!";
            return;
        }

        // Calculate time parts (Total hours remaining)
        const totalHours = Math.floor(distance / hour);
        const minutes = Math.floor((distance % hour) / minute);
        
        // Display the results (locking Years and Days, counting Hours and Minutes)
        document.getElementById("years").innerText = "2"; 
        document.getElementById("days").innerText = "0"; 
        document.getElementById("hours").innerText = totalHours;
        document.getElementById("minutes").innerText = minutes;
    }

    // Update the counter every second
    setInterval(updateCounter, 1000); 
    updateCounter(); 

    // 3. Modal (Pop-up Message) Logic
    const modal = document.getElementById("message-modal");
    const btn = document.getElementById("gift-button");
    const span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
