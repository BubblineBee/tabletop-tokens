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

function redraw() {
	canvas.width = width
	canvas.height = height
}
