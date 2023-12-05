function createCountDown(endDate) {
    // Set the date we're counting down to
    var countDownDate = new Date(endDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        var countdownElement = document.getElementById('demo');
        if (countdownElement) {
            countdownElement.innerHTML =
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
        }

        // If the count down is finished, create a new countdown
        if (distance < 0) {
            clearInterval(x);
            // Set a new end date (you can customize this date)
            var newEndDate = new Date('March 23, 2024 15:00:00').getTime();
            createCountDown(newEndDate);
        }
    }, 1000);
}

createCountDown('Dec 15, 2023 15:30:00');
