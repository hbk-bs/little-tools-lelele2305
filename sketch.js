const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
sizeSlider = document.querySelector("#size-slider"),
colorBtns = document.querySelectorAll(".colors .option"),
colorPicker = document.querySelector("#color-picker"),
clearCanvas = document.querySelector(".clear-canvas"), 
saveImg = document.querySelector(".save"),
ctx = canvas.getContext("2d");  //returns a drawing context on the canvas

let isDrawing = false;
selectedTool = "brush",
brushWidth = 5,
selectedColor = "#000";

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;
}

window.addEventListener("load", () => {
    //setting canvas width/height.. offfsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); //creating new path to draw
    ctx.lineWidth = brushWidth;  //brushsize for the line
    ctx.strokeStyle = selectedColor; 
}

const drawing = (e) => {
    if(!isDrawing) return; //if isDrawing is false return from here
    
    if(selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the mouse pointer
    ctx.stroke(); //drawing line with color
    }
    
}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {  //click event to tool options
        //removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); //passing slider value as brush size

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {  //click event for color buttons
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        //passing selected btn background color as selcetdColor value
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
    });
});

colorPicker.addEventListener("change", () => {
    //passing picked color value from color picker to last color btn background
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clearing canvas
    setCanvasBackground();
});

saveImg.addEventListener("click", () => {
   const link = document.createElement("a");
   link.download = `${Date.now()}.jpg`;
   link.href = canvas.toDataURL();
    link.click();
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);

