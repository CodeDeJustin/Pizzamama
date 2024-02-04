let currentBackground = 1;

function changeBackground() {
    currentBackground = currentBackground < 3 ? currentBackground + 1 : 1; // Change to 3 for three images
    let backgrounds = document.querySelectorAll('.background');

    backgrounds.forEach((div, index) => {
        div.style.opacity = '0'; 
    });

    document.getElementById('bg' + currentBackground).style.opacity = '1';
}

setInterval(changeBackground, 6000);
