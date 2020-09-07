var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var userimage = document.getElementById("userimage");;
var dpi = document.getElementById("dpi");;
var width = document.getElementById("width");;
var height = document.getElementById("height");;
var x = document.getElementById("xoffset");;
var y = document.getElementById("yoffset");;
var fr = new FileReader();
var img = new Image();
var bord = new Image();

bord.src = "img/border_black.svg";

userimage.addEventListener("change", imageLoad);
dpi.addEventListener("change", redraw);
width.addEventListener("change", redraw);
height.addEventListener("change", redraw);
x.addEventListener("change", redraw);
y.addEventListener("change", redraw);
fr.addEventListener("load", redraw)

redraw()

function redraw() {
	var cw = (width.value * 0.03937008 * dpi.value);
	var ch = (height.value * 0.03937008 * dpi.value);
	
	canvas.width = cw;
	canvas.height = ch;
	
	context.beginPath();
	context.fillStyle = "#FFFFFF";
	context.ellipse((cw / 2) - 2, (ch / 2) - 2, cw / 2 - 1, ch / 2 - 1, 0, 0, Math.PI * 2);
	context.fill();
	
	context.globalCompositeOperation = "source-atop";
		
	if (fr.readyState == 2) {
		img.src = fr.result;
		
		context.drawImage(img, parseInt(x.value), parseInt(y.value));
	}
	
	context.globalCompositeOperation = "source-over";
	
	context.drawImage(bord, 0, 0, cw - 1, ch - 1);
	return;
}

function imageLoad() {
	if (userimage.value) {
		fr.readAsDataURL(userimage.files[0]);
	}
}
