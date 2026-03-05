const canvas = document.getElementById('dualWaves');
const ctx = canvas.getContext('2d');

// Настройка размеров для четкости линий
function resize() {
    const width = window.innerWidth;
    const height = 100;
    
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Устанавливаем реальные размеры canvas для четкости линий
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    
    // Масштабируем контекст
    ctx.scale(devicePixelRatio, devicePixelRatio);
}

resize();
window.addEventListener('resize', resize);

let time = 0;

function drawWaves() {
    // Полностью очищаем canvas (прозрачный фон)
    ctx.clearRect(0, 0, window.innerWidth, 100);
    
    const width = window.innerWidth;
    const height = 50;
    const centerY = height / 2;
    
    // === ПЕРВАЯ ВОЛНА (розовая, движется слева направо) ===
    ctx.beginPath();
    ctx.strokeStyle = '#B424FC';
    ctx.lineWidth = 1;
    ctx.shadowColor = '#B424FC';
    ctx.shadowBlur = 2;
    
    for (let x = 0; x < width; x += 2) {
        const y = centerY + Math.sin(x * 0.01 + time) * 20;
        
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // === ВТОРАЯ ВОЛНА (голубая, движется справа налево) ===
    ctx.beginPath();
    ctx.strokeStyle = '#FC45C8';
    ctx.lineWidth = 1;
    ctx.shadowColor = '#FC45C8';
    ctx.shadowBlur = 2;
    
    for (let x = 0; x < width; x += 2) {
        const y = centerY + Math.cos(x * 0.015 - time) * 20 + 20;
        
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    time += 0.03;
    requestAnimationFrame(drawWaves);
}

drawWaves();