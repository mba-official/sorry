document.getElementById('forgive-btn').addEventListener('click', function() {
    // Hide the apology card
    document.getElementById('apology-card').style.display = 'none';

    // Show the thank-you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Confetti effect
    var end = Date.now() + 2 * 1000; // Confetti for 2 seconds

    (function frame() {
        // Create the confetti
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        // Repeat until time runs out
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Show the "Do You Love Me?" button after confetti ends
    setTimeout(function() {
        document.getElementById('love-btn').style.display = 'block';
    }, 2000);  // Delay to show the button after confetti ends
});

document.getElementById('love-btn').addEventListener('click', function() {
    // Hide the thank-you message
    document.getElementById('thank-you-message').style.display = 'none';

    // Show the "I Love You A LOT" message
    document.getElementById('love-message').style.display = 'block';  // Assuming you have an element for this message
});
