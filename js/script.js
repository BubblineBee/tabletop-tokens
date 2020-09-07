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
	var cw = (width.value * 0.03937008 * dpi.value);
	var ch = (height.value * 0.03937008 * dpi.value);
	
	if (userimage.value) {
		var fr = new FileReader();
		var imgurl = fr.readAsDataURL(userimage.files[0]);
		var img = new Image();
		img.src = imgurl
		
		context.drawImage(img, x.value, y.value)
	}
	
	canvas.width = cw;
	canvas.height = ch;
	
	context.beginPath();
	context.ellipse(cw / 2, ch / 2, cw / 2 - 1, ch / 2 - 1, 0, 0, Math.PI * 2);
	context.stroke();
}
