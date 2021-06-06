img="";
status="";
function preload() {
    img=loadImage('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocosd',modelLoaded);
    
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is loaded :)");
    status=true;
    objectDetector.detect(img,gotResult);
    
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
} 

function draw() {
    image(img,0,0,640,420);
    fill('#FF0000');
   text("dog",45,70);
    noFill();
    stroke('#FF0000');
    rect(5,20,300,300);

    fill('#FF0000');
    text('cat',310,90);
    noFill();
    stroke('#FF0000')
    rect(300,80,300,300);
    
}