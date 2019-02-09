var contain = document.querySelector('.containWatch'),
    centerX = contain.offsetLeft + contain.offsetWidth / 2,
    centerY = contain.offsetTop + contain.offsetHeight / 2,
    diWatch = document.createElement("div"),
    radius = 120,
    radiusForDigitalWatch = 70,
    cornerValue = 0,
    rotateDegree = 30,
    time = new Date(),
    arrowHours = document.createElement("div"),
    arrowMinutes = document.createElement("div"),
    arrowSec = document.createElement("div"),
    hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()),
    minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()),
    secondsDeg = 6 * time.getSeconds() - 6,
    numbers = 12;

for (var i = 1; i <= numbers; i++) {
    var numberHours = document.createElement("div"),
        corner,
        numberHoursCenterX,
        numberHoursCenterY;

    cornerValue += rotateDegree;
    corner = cornerValue / 180 * Math.PI;

    numberHours = contain.appendChild(numberHours);
    numberHours.classList.add('circle');
    numberHours.innerHTML = i;

    numberHoursCenterX = centerX + radius * Math.sin(corner);
    numberHoursCenterY = centerY - radius * Math.cos(corner);

    numberHours.style.left = Math.round(numberHoursCenterX - numberHours.offsetWidth/2) + "px";
    numberHours.style.top = Math.round(numberHoursCenterY - numberHours.offsetHeight/2) + "px";
}


diWatch = contain.appendChild(diWatch);
arrowHours = contain.appendChild(arrowHours);
arrowMinutes = contain.appendChild(arrowMinutes);
arrowSec = contain.appendChild(arrowSec),

diWatch.classList.add("digWatch");
arrowHours.classList.add("arrowHours");
arrowMinutes.classList.add("arrowMinutes");
arrowSec.classList.add("arrowSec");


diWatch.style.left = centerX - diWatch.offsetWidth/2 + "px";
diWatch.style.top = centerY - radiusForDigitalWatch + "px";

arrowHours.style.top = centerY - arrowHours.offsetHeight+10 + "px";
arrowHours.style.left = centerX - arrowHours.offsetWidth/2 + "px";

arrowMinutes.style.top = centerY - arrowMinutes.offsetHeight+10 + "px";
arrowMinutes.style.left = centerX - arrowMinutes.offsetWidth/2 + "px";

arrowSec.style.top = centerY - arrowSec.offsetHeight+10 + "px";
arrowSec.style.left = centerX - arrowSec.offsetWidth/2 + "px";




function arrows() {

    var time = new Date();
    diWatch.innerHTML = time.toLocaleTimeString();

    secondsDeg += 6;
    arrowSec.style.transform = "rotate(" + secondsDeg + "deg)";

    minutesDeg += 6 * (1/60);
    arrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";

    hoursDeg += 6 * (1/360);
    arrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
}


arrows();
setInterval(arrows, 1000);