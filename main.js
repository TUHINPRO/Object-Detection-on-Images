img="";

function preload() {
    img=loadImage('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill('#FF0000');
   text("dog",45,70);
    noFill();
    stroke('#FF0000');
    rect(5,20,300,300);
    
}