const body = document.body;

for (let i = 0; i < 500; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    body.appendChild(heart);
}