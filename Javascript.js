window.onload = rotate;
var thePic = 0;
var arrMyPix = new Array("Drink_Display.png", "Green_Display.png", "Pink_Display.png", "Purple_Display.png");

function rotate(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("drinks").src = arrMyPix[thePic];
setTimeout(rotate, 2 * 1000);
return false;
}