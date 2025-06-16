const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

const colors = [
    'rgba(79,140,255,0.22)',
    'rgba(0,242,254,0.18)',
    'rgba(255,110,196,0.16)',
    'rgba(127,156,245,0.18)',
    'rgba(255,200,40,0.13)'
];

function drawWaves() {
    ctx.clearRect(0, 0, width, height);
    for (let c = 0; c < colors.length; c++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
            let y = height/2 + Math.sin((x/width * 4 + c) + (Date.now()/2000 + c)) * (60 + c*10);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = colors[c];
        ctx.lineWidth = 12 - c*2;
        ctx.lineCap = "round";
        ctx.stroke();
    }
    requestAnimationFrame(drawWaves);
}
drawWaves();
