document.addEventListener('DOMContentLoaded', function () {
    // Force desktop mode on mobile devices
    function forceDesktopMode() {
        if (window.innerWidth < 1024) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1024');
        }
    }

    forceDesktopMode();
    window.addEventListener('resize', forceDesktopMode);

    // Handle button click
    const button = document.querySelector('.button');
    button.addEventListener('click', function () {
        alert('Thank you for downloading our app!');
    });

    // Matrix background animation
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).join('1').split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        letters.forEach((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            const x = index * fontSize;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 1e4) {
                letters[index] = 0;
            } else {
                letters[index] = y + fontSize;
            }
        });
    }

    setInterval(draw, 50);
});
