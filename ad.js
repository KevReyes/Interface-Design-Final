

window.onload = rotate;
var thePic = 0;
var arrMyPix = new Array("ady.png", "ad2.png");

function rotate(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("ads").src = arrMyPix[thePic];
setTimeout(rotate, 2 * 1000);
return false;
}

function processFrom(){

}

