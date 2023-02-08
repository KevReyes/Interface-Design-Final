window.onload = rotate;
var thePic = 0;
var arrMyPix = new Array("Drink_Red.png", "Drink_Green.png", "Drink_Pink.png", "Drink_Purple.png");

function rotate(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("drinks").src = arrMyPix[thePic];
setTimeout(rotate, 2 * 1000);
return false;
}