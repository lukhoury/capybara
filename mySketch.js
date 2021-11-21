//import p5Gif from './p5.gif'; 
//imágenes escenarios
var dialogoBiblioteca1,dialogoBiblioteca2,dialogoCiudad;
var dialogoB;
var dialogoC;
var dialogoBA;
var biblioteca, ganaste,perdiste,inicio, instrucciones, credito, ciudad,caraAguila, caraCarpincho, tablaVidas,bibliotecaAguila,pinguinoVolando,aguilaParada;
var libro = [];
var gif_loadImg, gif_createImg;
var gif;
//sonidos
var caidaAguila, golpe,impacto_cuerpo,revolea_libro,sonido_calle;
//estado
var estado = "biblioteca";
var terminarLanzar = false;
var vidas;
var sentido = "izquierda"; //primer tucan
var sentido2 = "izquierda"; //segundo tucan
var entrarBibliotecaAguila;
//aguila
var aguiX;
var aguilaVolando;
var aguilaVolandoIzq;
//fuente
let fuente;

//variables carpincho
var carX, carY, tamCar, velCarX;
var carSprites = [];
var carSpritesIzquierda = [];
var carSpritesBiblioteca = [];
var direccionCar = "derecha";

//variables animales
var tucan, tucanDerecha;
var tucX, tucX2;
var colision1,colision2;
var pluma;
var plumaY;
var plumaX,plumaX2;
var cont=0;
var pinguino;
var vidasP;
var vidasA;
//variables libro 1
var libroX, libroY, tamLibro;
//variables libro 2
var libroY2,libroX2;
//variables libro 3
var libroY3,libroX3;
//variables libro 4
var libroY4,libroX4;
//variables libro 5
var libroY5,libroX5;

var libroYCiudad;
var plumaXA,plumaYA;


//variables ciudad
var cX;

//variables gravedad
var enAire = false; //si el objeto está en el aire
var direccion = 1; //la fuerza de la gravedad en y 
var velocidad = 2; //velocidad del objeto
var poderDeTiro = 10; //energía con la que se tira el objeto
var velocidadDeCaida = 2; //es igual a velocidad
var piso = 480; //altura inicial del objeto, en este caso es la mano del carpincho
var libro1,libro2,libro3,libro4,libro5 = false;

function preload() {
	gif_loadImg = loadImage("animacion-inicio.gif");
	
/*	soundFormats('mp3');
	sonido_calle= loadSound("sonido_ambiente_calle.mp3");*/
	fuente= loadFont("Poppins-Medium.ttf");
	biblioteca = loadImage("fondo01.png"); //biblioteca
	inicio = loadImage("pantalla inicial.png");
	instrucciones = loadImage("instrucciones.png");
	credito = loadImage("creditos.png");
	ganaste= loadImage("ganaste.png");
	perdiste =loadImage("perdiste.png");
	//libro= loadImage("libro.png");
	ciudad = loadImage("ciudad.png");
	caraAguila = loadImage("caraAguila.png");
	caraCarpincho = loadImage("caraCarpincho.png");
	tablaVidas = loadImage("tablaVidas.png");
	tucan = loadImage("tucan.png");
	tucanDerecha = loadImage("tucanDerecha.png");
	bibliotecaAguila = loadImage("bibliotecaAguila.png");
	aguilaParada = loadImage("aguilaParada.png");
	pluma = loadImage("pluma.png");
	pinguinoVolando= loadImage("pinguinoVolando.png")
	pinguino = loadImage("pinguino.png");
	aguilaVolando= loadImage("aguilaVolando.png");
	aguilaVolandoIzq= loadImage("aguilaVolandoIzq.png");
	dialogoBiblioteca1 = loadImage("dialogoBiblioteca1.png");
	dialogoBiblioteca2 = loadImage("dialogoBiblioteca2.png");
	dialogoCiudad = loadImage("dialogoCiudad.png");

	//carpincho en la ciudad
//faltan agregar los demas 
	carSprites[0] = loadImage("carDerecha.png");
/*	carSprites[1] = loadImage("car_1.png");
	carSprites[2] = loadImage("car_2.png");
	carSprites[3] = loadImage("car_3.png");
	carSprites[4] = loadImage("car_4.png");
	carSprites[5] = loadImage("car_5.png");
	carSprites[6] = loadImage("car_6.png");
	carSprites[7] = loadImage("car_7.png");
	carSprites[8] = loadImage("car_8.png");
	carSprites[9] = loadImage("car_9.png");
	carSprites[10] = loadImage("car_10.png");
	carSprites[11] = loadImage("car_11.png");*/

	carSpritesIzquierda[0] = loadImage("carIzquierda.png");

	//carpincho biblioteca
	carSpritesBiblioteca[0] = loadImage("Carpincho_Carro_01.png");
	carSpritesBiblioteca[1] = loadImage("Carpincho_Carro_01Izq.png");
/*	carSpritesBiblioteca[2] = loadImage("Carpincho_Carro_03.png");
	carSpritesBiblioteca[3] = loadImage("Carpincho_Carro_04.png");
	carSpritesBiblioteca[4] = loadImage("Carpincho_Carro_05.png");
	carSpritesBiblioteca[5] = loadImage("Carpincho_Carro_06.png");
	carSpritesBiblioteca[6] = loadImage("Carpincho_Carro_07.png");
	carSpritesBiblioteca[7] = loadImage("Carpincho_Carro_08.png");
	carSpritesBiblioteca[8] = loadImage("Carpincho_Carro_09.png");
	carSpritesBiblioteca[9] = loadImage("Carpincho_Carro_10.png");
	carSpritesBiblioteca[10] = loadImage("Carpincho_Carro_11.png");
	carSpritesBiblioteca[11] = loadImage("Carpincho_Carro_12.png");*/

	for (let i = 0; i < 5; i++) {
		libro[i] = loadImage("libro.png");
	}
}


function setup() {
	createCanvas(1000,700);
	background(255);
	cont = 0;
	inicializarVariables();

	//gif = p5Gif.loadGif('animacion-inicio.gif');
	

}


function inicializarVariables(){
	
	
	//gif_createImg = createImg("animacion-inicio.gif");
	
	tamCar = width / 3.5;
	carX = width - 600;
	carY = height - 170;
	velCarX = 10;
	
// para que esten en diferentes posiciones
	libroX = carX + 100;
	libroX2 = carX + 80;
	libroX3 = carX + 120;
	libroX4 = carX + 80;
	libroX5 = carX + 130;
	libroY = carY - 50;
	libroY2 = carY - 70;
	libroY3 = carY - 50;
	libroY4 = carY - 30;
	libroY5 = carY - 50;
	tamLibro = width / 15;
	
	libroYCiudad = 620;
	cX = 0; //ciudad movimiento
	//------------- animales
	tucX = 1644;
	tucX2 = 2400;
	aguiX=800;
	plumaX = 1644;
	plumaX2 = 2400;
	colision1=false;
	colision2= false;
	entrarBibliotecaAguila= false;
	plumaY=182;
	plumaXA=800;
	plumaYA=mouseY;
	vidas=3;
	dialogoB=false;
  	dialogoC=0;
  	dialogoBA=0;
	vidasP=3;
	vidasA=3;
}

function draw() {


	//llamar funciones
	keyTyped();
	keyPressed();
	
	
	imprimir(); //ver valores en consola y ubicarlos en una sola funcion
	

	if (estado == "inicio") {
		background(inicio, 0, 0, width, height);
	}
	if (estado == "instrucciones" ) {
		background(instrucciones, 0, 0, width, height);
	}
	if(estado=="animacionInicio"){
		print(estado);
		if(gif_loadImg.getCurrentFrame()<45){

			image(gif_loadImg, 0, 0);
		} else {
			estado="biblioteca";
		}
	}
	if (estado == "biblioteca") {

		escenaBiblioteca();
		carpinchoBiblioteca();
		mostrarLibro();
	}
	if (estado == "ciudad") {
		escenaCiudad();
		carpinchoPersonaje();
		ciudadAnimales();
		libro();
	}
	if(estado=="bibliotecaAguila"){
		bibliotecaAguilaF();
		carpinchoPersonaje();
		if(dialogoBA<=4){ //aguila parada mientras estan los dialogos
		personajeAguila();
		}
		libro();
	}
	if(estado=="perdiste"){
		background(perdiste,0,0,width,height);
		inicializarVariables();
	}
		if(estado=="ganaste"){
		background(ganaste,0,0,width,height);
		inicializarVariables();
	}
	if(vidas==0){
		estado="perdiste";
		
	}
		if(vidasA==0){
		estado="ganaste";
		
	}

}

function imprimir() {
	print("mouseX: " + mouseX);
	print("mouseY: " + mouseY);
	/*print("car" + cX);*/
	
}



function mostrarLibro() {
	imageMode(CENTER);

	if(estado=="biblioteca"){  //revisar por que hay 3 metodos si podria simplificarse a uno solo
	image(libro[0], libroX, libroY, tamLibro, tamLibro);
	image(libro[1], libroX2, libroY2, tamLibro, tamLibro);
	image(libro[2], libroX3 , libroY3, tamLibro, tamLibro);
	image(libro[3], libroX4, libroY4, tamLibro, tamLibro);
	image(libro[4], libroX5, libroY5 , tamLibro, tamLibro);
	}
	if(estado=="ciudad"){
	image(libro[0], carX, libroYCiudad, 50,45);
	image(libro[1], carX, libroYCiudad,  50,45);
	image(libro[2], carX , libroYCiudad,  50,45);
	image(libro[3], carX, libroYCiudad,  50,45);
	image(libro[4], carX, libroYCiudad ,  50,45);
	}
	if(estado=="bibliotecaAguila"){
		
	image(libro[0], carX, libroYCiudad, 50,45);
	image(libro[1], carX, libroYCiudad,  50,45);
	image(libro[2], carX , libroYCiudad,  50,45);
	image(libro[3], carX, libroYCiudad,  50,45);
	image(libro[4], carX, libroYCiudad ,  50,45);
		
	}
}

function bibliotecaAguilaF(){
	background(bibliotecaAguila,0,0,width,height);
		if(libroYCiudad<182){
				libroYCiudad= 620;
			
		}
	image(tablaVidas, 34,30, 293,61); //tabla carpincho
	if(vidas==3){
		image(caraCarpincho, 42,34); //primer vida carp
		image(caraCarpincho, 123,34); //segunda vida carp
		image(caraCarpincho, 203, 34); //tercera vida carp
	}
	if(vidas==2){
		image(caraCarpincho, 42,34); //primer vida carp
		image(caraCarpincho, 123,34); //segunda vida carp
	}
	if(vidas==1){
		image(caraCarpincho, 42,34); //primer vida carp
	}
	image(tablaVidas, 674,30, 293,61); //tabla aguila
		if(vidasA==3){
		image(caraAguila, 700,34); //primer vida a aguila
		image(caraAguila, 780,34); //segunda vida a aguila
		image(caraAguila, 860, 34); //tercera vida a aguila
	}
	if(vidasA==2){
		image(caraAguila, 700,34); //primer vida a aguila
		image(caraAguila, 780,34); //segunda vida a aguila
	}
	if(vidasA==1){
		image(caraAguila, 700,34); //primer vida a aguila
	}
	
	
	if(dialogoBA>4){
		//animala aguila
	if (aguiX >= 160 / 2 && sentido == "izquierda" && colision1==false) {
		image(pluma,plumaXA,plumaYA,57,54);
		image(aguilaVolando, aguiX, 40,340,382);
		aguiX = aguiX - 10;
		plumaXA= plumaXA-10;
		sentido = "izquierda";
	} else {
		sentido = "derecha";
	}
	if (sentido == "derecha" && aguiX <= 1000  && colision1==false) {
		image(pluma,plumaXA,plumaYA,57,54);
		image(aguilaVolandoIzq, aguiX, 40, 340,382);
		aguiX = aguiX + 10;
		plumaXA= plumaXA+10;
	} else {
		sentido = "izquierda";
	}
	}
	colisionAnimales();
	caidaPluma();
}


function personajeAguila(){
	image(aguilaParada,700,153,173,212);
}
//funcion personaje ccarpincho
function carpinchoPersonaje() {
	imageMode(CENTER);
	if(estado=="ciudad"){
	if (direccionCar == "derecha") {
		image(carSprites[0], carX, 582, 94,182);
	}
	if (direccionCar == "izquierda") {
		image(carSpritesIzquierda[0], carX, 582, 94,182);
	}
	}
	if(estado=="bibliotecaAguila"){
			if (direccionCar == "derecha") {
		image(carSprites[0], carX, 582, 94,182);
	}
	if (direccionCar == "izquierda") {
		image(carSpritesIzquierda[0], carX, 582, 94,182);
	}
		
		
	}
	keyTyped();
}

//funcion personaje carpincho biblioteca
function carpinchoBiblioteca() {
	imageMode(CENTER);
	if(direccionCar=="derecha"){
	image(carSpritesBiblioteca[0], carX, carY, tamCar, tamCar);
	}
		if(direccionCar=="izquierda"){
	image(carSpritesBiblioteca[1], carX, carY, tamCar, tamCar);
	}
}
//funcion primer escena biblioteca
function escenaBiblioteca() {
	imageMode(CORNER);
	background(biblioteca, 0, 0, width, height);
	print(dialogoB);
	if(dialogoB==0){
		image(dialogoBiblioteca1,20, 834, 785, 176);	
		image(pinguinoVolando,mouseX,mouseY);
	}
	image(tablaVidas, 34,30, 293,61); //tabla carpincho
	if(vidasP==3){ //cambiar cara de caarpincho por pinguino
		image(caraCarpincho, 42,34); //primer vida pinguino
		image(caraCarpincho, 123,34); //segunda vida pinguino
		image(caraCarpincho, 203, 34); //tercera vida pinguino
	}
	if(vidasP==2){
		image(caraCarpincho, 42,34); //primer vida pinguino
		image(caraCarpincho, 123,34); //segunda vida pinguino
	}
	if(vidasP==1){
		image(caraCarpincho, 42,34); //primer vida pinguino
	}
	image(pinguino,700,385);
	
	if (estado == "biblioteca") {
		if (carX >= width) { //sale carpincho a la ciudad
			estado = "ciudad";
			carX=width-600;
		}
	}

}
function caidaPluma(){
	cont= cont +1;
	if(cont>100){
		if(plumaY<=700){
			plumaY= plumaY+10;
		} else {
			plumaY=182;
			cont=0;
			}
	}
	
		cont= cont +1;
	if(cont>100){
		if(plumaYA<=700){
			plumaYA= plumaYA+10;
		} else {
			plumaYA=182;
			cont=0;
			}
	}
}
function escenaCiudad() {
	colisionAnimales();
	print("vidas"+vidas);

	//-----------------------------------------------
	//ELEMENTOS
	image(ciudad, cX, 0, 3381, height);
	image(barraDialogo, 20, 834, 785, 176);
	image(tablaVidas, 34,30, 293,61); //tabla carpincho
	if(vidas==3){
		image(caraCarpincho, 42,34); //primer vida carp
		image(caraCarpincho, 123,34); //segunda vida carp
		image(caraCarpincho, 203, 34); //tercera vida carp
	}
	if(vidas==2){
		image(caraCarpincho, 42,34); //primer vida carp
		image(caraCarpincho, 123,34); //segunda vida carp
	}
	if(vidas==1){
		image(caraCarpincho, 42,34); //primer vida carp
	}
		image(tablaVidas, 674,30, 293,61); //tabla aguila
		if(vidasA==3){
		image(caraAguila, 700,34); //primer vida carp
		image(caraAguila, 780,34); //segunda vida carp
		image(caraAguila, 860, 34); //tercera vida carp
	}
	if(vidasA==2){
		image(caraAguila, 42,34); //primer vida carp
		image(caraAguila, 123,34); //segunda vida carp
	}
	if(vidasA==1){
		image(caraAguila, 42,34); //primer vida carp
	}
	//---------------------------------------------------
	
	//---------------------------------------------------
}
//funcion segunda escena paseo por la ciudad vs animales 
function ciudadAnimales() {

	if(libroYCiudad<182){
				libroYCiudad= 620;
			
		}
	if(tucX>=160/2 && tucX<=1000){
		caidaPluma();
	}
	if(tucX2>=160/2 && tucX2<=1000){
		caidaPluma();
	}
	
	//animal tucan
	if (tucX >= 160 / 2 && sentido == "izquierda" && colision1==false) {
		image(pluma,plumaX,plumaY,57,54);
		image(tucan, tucX, 182, 160,149);
		tucX = tucX - 10;
		plumaX= plumaX-10;
		sentido = "izquierda";
	} else {
		sentido = "derecha";
	}
	if (sentido == "derecha" && tucX <= 1000  && colision1==false) {
		image(pluma,plumaX,plumaY,57,54);
		image(tucanDerecha, tucX, 182, 160,149);
		tucX = tucX + 10;
		plumaX= plumaX+10;
	} else {
		sentido = "izquierda";
	}
	////////////////////////////////
	if (tucX2 >= 160 / 2 && sentido2 == "izquierda" && colision2==false) {
		image(pluma,plumaX2,plumaY,57,54);
		image(tucan, tucX2, 182, 160,149);
		tucX2 = tucX2 - 10;
		plumaX2= plumaX2-10;
		
		sentido2 = "izquierda";
	} else {
		sentido2 = "derecha";
	}
	if (sentido2 == "derecha" && tucX2 <= 1000 && colision2==false) {
		image(pluma,plumaX2,plumaY,57,54);
		image(tucanDerecha, tucX2, 182, 160,149);
		tucX2 = tucX2 + 10;
		plumaX2= plumaX2+10;
		
	} else {
		sentido2 = "izquierda";
	}
//----------- carpincho entra biblioteca
	if(colision2== true && cX<=-1960){
		estado="bibliotecaAguila";
		vidas=3;
	}
	
}

function mouseClicked() {
	cambiarEscena();

}

function cambiarEscena() {

	if (estado == "inicio") {
		if (botones(370, 613, 350,470)) {
			estado = "animacionInicio";
		}
		if (botones(55, 140, 50, 130)){
			estado = "instrucciones";
		}
	}
	if(estado=="perdiste"){
		if(botones(50,100,40,90)){
			estado="inicio";
		}
	}
		if(estado=="ganaste"){
		if(botones(50,100,40,90)){
			estado="inicio";
		}
	}
	if(estado=="biblioteca"){
		dialogoB= dialogoB +1 ;
	}
	if(estado=="ciudad"&& colision2==true){
		dialogoC= dialogoC +1 ;
	}
	if(estado=="bibliotecaAguila"){
		dialogoBA= dialogoBA + 1;
	}
	
	
}

//funcion controlar botones pantalla
function botones(px1, px2, py1, py2) { //FUNCION PARA VERIFICAR SI SE CLICKEO EN LA ZONA DEL BOTÓN
	if (mouseX >= px1 && mouseX <= px2 && mouseY >= py1 && mouseY <= py2) {
		return true;
	}
	return false;
}
function colisionAnimales(){
	if(plumaY>=494 && plumaX==carX && colision1==false){
		vidas=vidas-1;
		print("colision");
	}
	if(plumaY>=494 &&  plumaX2==carX&& colision2==false){
		vidas=vidas-1;
		print("colision");
	}
		if(plumaYA>=494 && plumaXA==carX){
		vidas=vidas-1;
	}

}

function keyTyped() {
	
	if(keyDown('m')){ // momentaneo porque no funcionaba el boton para volver atras en las instrucciones
		estado="inicio";
		print("escape");
	}

	if (estado != "ciudad") {
		if (keyDown('a')) {
			carX = carX - velCarX;
			libroX = libroX - velCarX;
			libroX2 = libroX2 - velCarX;
			libroX3 = libroX3 - velCarX;
			libroX4 = libroX4 - velCarX;
			libroX5 = libroX5 - velCarX;
			direccionCar = "izquierda";
		}

		if (keyDown('d')) {
			carX = carX + velCarX;
			libroX = libroX + velCarX;
			libroX2 = libroX2 + velCarX;
			libroX3 = libroX3 + velCarX;
			libroX4 = libroX4 + velCarX;
			libroX5 = libroX5 + velCarX;
			direccionCar = "derecha";
		}
		if(keyDown(' ')&& vidas>0){
			libroX= libroX + 10;
			if(libroX>=700 ){
				libroX = carX + 100;
				vidasP= vidasP-1;
		}
		}
	}
	if (estado == "ciudad") {
		if(keyDown('p')){
			caidaPluma();
			}
		if (cX > -1960) { //bordes de la pantalla
			if (keyDown('d')) {
				cX = cX - velCarX;
				libroX = libroX - velCarX;
				direccionCar = "derecha";
			}
		}

		if (cX < 120) { //bordes de la pantalla
			if (keyDown('a')) {
				cX = cX + velCarX;
				libroX = libroX + velCarX;
				direccionCar = "izquierda";
			}
		}
		

		
	}
	
			if(keyDown(' ')){
			libroYCiudad = libroYCiudad-30;
			
			if(carX==tucX2){
				colision2=true;
			}
		
			if(carX==tucX){
				colision1=true;
			}
			if(carX==aguiX && libroYCiudad>=40){
				vidasA= vidasA-1;
			}
		
			
			}

}

function keyPressed() {
	if (keyDown(' ')) {
		enAire = true;
	} else {
		enAire = false;
	}


}
