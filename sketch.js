function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  
}

function mouseDragged(){
    circle(mouseX, mouseY, 10);  //Kreise
    line(pmouseX, pmouseY, mouseX, mouseY);  //Linien
    for(let i = 0; i < 100; i++) { //Spraypainteffekt
        point(
            mouseX + random(-10, 10), mouseY + random(-10, 10)
        )
    }
}

function keyPressed() {
    if(key === 's'){
        save('image.png')
    }

}