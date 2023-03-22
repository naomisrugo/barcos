const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bolas=[];


function preload() {
 fondo = loadImage("background.gif");
 imgtorre = loadImage("tower.png");
}




function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var optionscuerpo={
    isStatic: true
  }
  rectMode(CENTER);
  body = Bodies.rectangle(0, 590, 1500, 50, optionscuerpo);
  World.add(world, body);

  angleMode(DEGREES);  //que este en grados
  var angle=25; //variable de 25 grados

  optionstorre={
    isStatic: true
  }

  torre = Bodies.rectangle(160,350, 160, 310, optionstorre);
  World.add(world, Bodies);

  basecañon= new Cañon(160, 110, 130, 100, angle); 

  verbarcos= new barco(1000, 560, 170, 170, -80);
}



function draw(){
  image(fondo, 0,0,1200,600);

  Engine.update(engine);
 
  push();
  translate(body.position.x, body.position.y);
  rect(0, 0, 1200, 25);
  pop();

  push();
  imageMode(CENTER);
  image(imgtorre, torre.position.x, torre.position.y, 160, 310);
  pop();

  basecañon.ver(); //primero el nombre de la variable que puse arriba y luego de la funcion

  for(var i=0; i<bolas.length; i++){ //para que recorra toda la matris
    showcañon(bolas[i], i);
  }

  Matter.Body.setVelocity(verbarcos.body, {x:-0.9, y:0}); //primero ponemos lo que queremos mover y luego entre llaver la velocidad que queremos que se mueva
  verbarcos.ver();
}



function keyReleased(){ //para que mande a llamar mi funcion de diparar cuando presionon la barra espaciadora
  if(keyCode==LEFT_ARROW){
    bolas[bolas.length-1].lanzar();
  }
}



function keyPressed(){ //esta funcion sirve para que cada vz que presionemos el boton mande a llamar la plantilla de la bola de cañon y se crean muchas bolas
  if(keyCode==LEFT_ARROW){
  boladecanon= new boladecañon(basecañon.x, basecañon.y); //creo el cuerpo, le pongo que la posicion es igual a la de la base del cañon
  bolas.push(boladecanon); // meti la bola de cañon detro de la matris de las bolas
  }
}



function showcañon(bola, i){ //para que se vean las pelotas que meti a la matris (que se vean muchas pelotas)
 if(bola){
 bola.pelota(); //un elemento de la matris punto la funcion que quiero que realice
 }
}
