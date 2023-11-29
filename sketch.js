const saveButton = document.querySelector('button#save'); //interaktivität, button ausgewählt mit id save
const colorInput = document.querySelector('input#color');
console.log(colorInput);

let paintColor = '#96d35f';  //Farbe bestimmen
colorInput.value = paintColor;  //als Anfangsfarbe setzen


function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(255);
  saveButton.addEventListener("click", () => {
     console.log('clicked');
     save('image.png');
  })
  colorInput.addEventListener("input", () => {    //horcht auf input und setzt paintcolor gleich des values 
    console.log(colorInput.value); //variable paintcolor
    paintColor = colorInput.value;
  })
}

function draw(){
  
}

function mouseDragged(){ //wenn wir mit maus gedrückt über canvas ziehen
    fill(paintColor);  //paintcolor wird gefüllt
    circle(mouseX, mouseY, 10);  //Kreise
    line(pmouseX, pmouseY, mouseX, mouseY);  //Linien
    for(let i = 0; i < 100; i++) { //Spraypainteffekt
        point(
            mouseX + random(-10, 10), mouseY + random(-10, 10)
        );
    }
}

function buttonHandler() {
}

function keyPressed() {
    if(key === 's'){
        save('image.png')
    }

}