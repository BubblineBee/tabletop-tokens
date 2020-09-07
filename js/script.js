var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var userimage = document.getElementById("userimage");;
var dpi = document.getElementById("dpi");;
var width = document.getElementById("width");;
var height = document.getElementById("height");;
var x = document.getElementById("xoffset");;
var y = document.getElementById("yoffset");;

userimage.addEventListener("change", redraw);
dpi.addEventListener("change", redraw);
width.addEventListener("change", redraw);
height.addEventListener("change", redraw);
x.addEventListener("change", redraw);
y.addEventListener("change", redraw);

redraw()

function redraw() {
	canvas.width = (width.value * 0.03937008 * 70)
	canvas.height = (height.value * 0.03937008 * 70)
	
	context.beginPath();
	context.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, Math.PI * 2)
	context.stroke();
}
