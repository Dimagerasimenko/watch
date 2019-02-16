var canv = document.getElementById('contain');
var ctx = canv.getContext('2d');
var radius = 200,
    centerX = 200,
    centerY = 200,
    halfPi = Math.PI / 2,
    angle;




function toRadiant(angle){
    return angle * (Math.PI / 180);
}



function drawClock() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(canv.width/2, canv.height/2, radius, 0, Math.PI * 2, false);
    ctx.fill();

    for (var i = 0; i <= 11; i++) {

        angle = i * 30;
        var x = radius * Math.cos(toRadiant(angle)) + centerX;

        var y = radius * Math.sin(toRadiant(angle)) + centerY;
        var x2 = (radius - 20) * Math.cos(toRadiant(angle)) + centerX;
        var y2 = (radius - 20) * Math.sin(toRadiant(angle)) + centerY;

        ctx.strokeStyle = 'purple';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 3;
        ctx.closePath();
        ctx.stroke();
    }

}


function arrowMovie() {

    ctx.fillStyle = 'green';
    ctx.fillRect(0,0, canv.width, canv.height);
    drawClock();
    //seconds
    var d = new Date();
    var valueDat = d.toLocaleTimeString();
    var arrSec = 6 * d.getSeconds();
    var posSecX = centerX + (radius-20) * Math.cos(halfPi - toRadiant(arrSec));
    var posSecY = centerY - (radius-20) * Math.sin(halfPi - toRadiant(arrSec));
    //minutes
    var arrMin = 6 * (d.getMinutes() + 1/60 * d.getSeconds());
    var posMinX = centerX + (radius - 80) * Math.cos(halfPi - toRadiant(arrMin));
    var posMinY = centerY - (radius - 80) * Math.sin(halfPi - toRadiant(arrMin));
    //hours
    var arrHour = 30 * (d.getHours() + 1/60 * d.getMinutes());
    var posHourX = centerX + (radius - 120) * Math.cos(halfPi - toRadiant(arrHour));
    var posHourY = centerY - (radius - 120) * Math.sin(halfPi - toRadiant(arrHour));

    ctx.beginPath();
    ctx.strokeStyle = "#3d3db5";
    ctx.lineWidth = 2;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(posSecX, posSecY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#f9f509";
    ctx.lineWidth = 4;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(posMinX, posMinY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(posHourX, posHourY);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'red';
    ctx.font = 'italic 30pt Arial';
    ctx.fillText(valueDat, 130, 80);

}


setInterval(arrowMovie,1000);
