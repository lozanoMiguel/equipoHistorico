const form = document.getElementById("formaciones");
const cancha = document.querySelector(".cancha");
const tabla = document.querySelector(".tabla");
let idJugador;
/*creacion e ingreso de casillas de los jugadores al container(cancha)*/
function armadoFormacion(){
	resetCancha();
	let frag = document.createDocumentFragment();
	for(i = 1; i < 12; i++){
		let div = document.createElement("DIV");
		div.classList.add("imgContainer");
		div.setAttribute("id", i);
		frag.appendChild(div);
	}
	cancha.appendChild(frag);
};

/*posicionamiento segun la formacion de las casillas*/
function posicionarFormacion(formacion){
	let form = formacion.split("-");

	let areaChica = document.querySelector(".areaChicaBot");
	let arquero = document.getElementById("11");
	areaChica.appendChild(arquero);

	if(form[0] == "4"){
		let div;
		div = document.getElementById("1");
		div.style.gridRow = "9/10";
		div.style.gridColumn = "5/6";
		div = document.getElementById("2");
		div.style.gridRow = "9/10";
		div.style.gridColumn = "1/2";
		div = document.getElementById("3");
		div.style.gridRow = "10/11";
		div.style.gridColumn = "2/3";
		div = document.getElementById("4");
		div.style.gridRow = "10/11";
		div.style.gridColumn = "4/5";
	}
	else if(form[0] == "5"){
		let div;
		div = document.getElementById("1");
		div.style.gridRow = "8/9";
		div.style.gridColumn = "5/6";
		div = document.getElementById("2");
		div.style.gridRow = "10/11";
		div.style.gridColumn = "4/5";
		div = document.getElementById("3");
		let medialuna = document.querySelector(".medialunaBot");
		medialuna.appendChild(div);
		div = document.getElementById("4");
		div.style.gridRow = "10/11";
		div.style.gridColumn = "2/3";
		div = document.getElementById("5");
		div.style.gridRow = "8/9";
		div.style.gridColumn = "1/2";
	}

	if(form[1] == "4"){
		let div;
		div = document.getElementById("5");
		div.style.gridRow = "6/7";
		div.style.gridColumn = "5/6";
		div = document.getElementById("6");
		div.style.gridRow = "7/8";
		div.style.gridColumn = "4/5";
		div = document.getElementById("7");
		div.style.gridRow = "7/8";
		div.style.gridColumn = "2/3";
		div = document.getElementById("8");
		div.style.gridRow = "6/7";
		div.style.gridColumn = "1/2";
	}
	else if(form[1] == "3" && form[0] == "5"){
		let div;
		div = document.getElementById("6");
		let medialuna = document.querySelector(".semicirculoCentralBot");
		medialuna.appendChild(div);
		div = document.getElementById("7");
		div.style.gridRow = "6/7"
		div.style.gridColumn = "2/3";
		div = document.getElementById("8");
		div.style.gridRow = "6/7";
		div.style.gridColumn = "4/5";
	}
	else if(form[1] == "3"){
		let div;
		div = document.getElementById("5");
		let medialuna = document.querySelector(".semicirculoCentralBot");
		medialuna.appendChild(div);
		div = document.getElementById("6");
		div.style.gridRow = "6/7"
		div.style.gridColumn = "2/3";
		div = document.getElementById("7");
		div.style.gridRow = "6/7";
		div.style.gridColumn = "4/5";
	}

	if(form[2] == "2"){
		let div;
		div = document.getElementById("9");
		div.style.gridRow = "3/4";
		div.style.gridColumn = "4/5";
		div = document.getElementById("10");
		div.style.gridRow = "3/4";
		div.style.gridColumn = "2/3";
	}
	else if(form[2] == "3"){
		let div;
		div = document.getElementById("8");
		div.style.gridRow = "4/5";
		div.style.gridColumn = "5/6";
		div = document.getElementById("9");
		let medialuna = document.querySelector(".medialunaTop");
		medialuna.appendChild(div);
		div = document.getElementById("10");
		div.style.gridRow = "4/5";
		div.style.gridColumn = "1/2";
	}
	else if(form[2] == "12"){
		let div;
		div = document.getElementById("8");
		div.style.gridRow = "4/5";
		div.style.gridColumn = "3/4";
		div = document.getElementById("9");
		div.style.gridRow = "3/4";
		div.style.gridColumn = "4/5";
		div = document.getElementById("10");
		div.style.gridRow = "3/4";
		div.style.gridColumn = "2/3";
	}
}

/*function resetCancha(){
	let list = document.querySelector(".imgContainer");
	console.log(list);
	if(list){
		let areaChica = document.querySelector(".areaChicaBot");
		areaChica.removeChild(areaChica.lastElementChild);
		for(i = 1; i < 11; i++){
			let div = document.getElementById(i);
			div.parentNode.removeChild(div);
		}
	}
};*/

function resetCancha(){
	if(cancha.lastElementChild.classList.contains("imgContainer")){
		let areaChica = document.querySelector(".areaChicaBot");
		areaChica.removeChild(areaChica.lastElementChild);
		for(i = 1; i < 11; i++){
			let div = document.getElementById(i);
			div.parentNode.removeChild(div);
		}
	}
}

form.addEventListener("click",(e)=>{
	e.preventDefault();
	armadoFormacion();
	posicionarFormacion(e.target.getAttribute("id"));
});

tabla.addEventListener("click",(e)=>{
	e.preventDefault();
	idJugador = e.target.getAttribute("id");
});

cancha.addEventListener("click", (e)=>{
	container = e.target;
	container.style.border = "none";
	let img = document.createElement("IMG");
	img.src = `jugadores/${idJugador}.jpg`;
	container.appendChild(img);
});

cancha.addEventListener("dblclick", (e)=>{
	img = e.target;
	img.parentNode.style.border = "1px dashed #000";
	img.parentNode.removeChild(img);
})

