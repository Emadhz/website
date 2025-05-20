const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function drawHeart() {
    ctx.beginPath();
    ctx.moveTo(250, 150);
    ctx.bezierCurveTo(150, 50, 50, 200, 250, 400);
    ctx.bezierCurveTo(450, 200, 350, 50, 250, 150);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function writeText() {
    ctx.fillStyle = "black";
    ctx.font = "20px 'Great Vibes', cursive";
    ctx.textAlign = "center";
    ctx.fillText("Liebe Mathilda,", 250, 220);
    ctx.fillText("Das vergangene Jahr mit dir", 250, 260);
    ctx.fillText("war das schönste meines Lebens.", 250, 300);
    ctx.fillText("Ich liebe dich von ganzem Herzen,", 250, 340);
    ctx.fillText("Dein Prinzessinnen Bub", 250, 380);
}

window.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeart();
    writeText();
};
