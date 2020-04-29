var h3 = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var colorAngle = document.querySelector(".angle")

h3.textContent = "linear-gradient(" 
	+ colorAngle.value
	+ "deg, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

function updateColor(){
	body.style.background = "linear-gradient(" 
	+ colorAngle.value
	+ "deg, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	h3.textContent = body.style.background + ";";
}

function isInputValid(){
	if(Number(colorAngle.value) >= -360 && Number(colorAngle.value) <= 360){
		return true;
	}else{
		return false;
	}
}

function updateAngle(event) {
	if (colorAngle.value.length > 0 && event.keyCode === 13 ) {
		
	console.log(colorAngle.value);
		if(isInputValid()){
			updateColor();
		}else{
			alert("Invalid Input!");
		}
	}
}

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
colorAngle.addEventListener("keypress", updateAngle);