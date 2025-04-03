// You can use JavaScript to add interactive elements to the dashboard.
// Example: Showing a welcome message based on the time of day.

document.addEventListener('DOMContentLoaded', function () {
    let greeting = document.createElement('p');
    let currentHour = new Date().getHours();

    if (currentHour < 12) {
        greeting.textContent = "Good Morning, John!";
    } else if (currentHour < 18) {
        greeting.textContent = "Good Afternoon, John!";
    } else {
        greeting.textContent = "Good Evening, John!";
    }

    // Add greeting to the dashboard
    const sidebar = document.querySelector('.sidebar');
    sidebar.insertBefore(greeting, sidebar.firstChild);
});
