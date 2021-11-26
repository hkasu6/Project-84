canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed<=122) ||  (keyPressed >=65 && keyPressed<=90))
    {
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an Alphabet Key";
        console.log("alphabet key");
    }

    if(keyPressed >=48 && keyPressed<=57)
    {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a Number Key";
        console.log("number key");
    }

    if(keyPressed >=37 && keyPressed<=40)
    {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed a Arrow Key";
        console.log("arrow key");
    }

    if(keyPressed ==17 && keyPressed ==18 && keyPressed ==27)
    {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed a Special Key";
        console.log("special key");
    }

    if(keyPressed ==10 && keyPressed ==14 && keyPressed ==127)
    {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed a Other Key";
        console.log("other key");
    }
}

function alphabetkey()
{
    img_image="alphabet.png";
    img_imageTag = new Image();
    img_imageTag.src = img_image;
    img_imageTag.onload = ctx.drawImage(img_imageTag, 0, 0, canvas.width, canvas.height);
}
function add(e) {
    img_imageTag = new Image();
    img_imageTag.src = e;
    img_imageTag.onload = ctx.drawImage(img_imageTag, 0, 0, canvas.width, canvas.height);
}



