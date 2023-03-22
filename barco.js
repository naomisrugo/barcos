class barco{
    constructor(x,y,widht,height, posbar){
        var options={
        restitucion: 0.8, //que se muevan los barquitos
        friction: 1, // habilidad de u objeto para desplazarse a travez de aie
        density: 1 //densidad, que simule que esta en el agua
        }
    this.body=Bodies.rectangle(x,y, this.widht, this.height, options); //creamos el cuerpo
    // this.x=x;
    // this.y=y;
     this.widht=widht;
     this.height=height;
     this.posbar=posbar;
     this.barcos=loadImage("boat.png"); //precargamos la imagen
     World.add(world, this.body); //el cuerpo lo agregamos al mundo
    }

    ver(){
        var pos= this.body.position; //nueva variable
        push();
        translate(pos.x, pos.y); //para que tenga la animacion y se mueva
        imageMode(CENTER);
        image(this.barcos, 0, this.posbar, this.widht, this.height); //al ser una imagen lo primero en meter tiene que ser la imagen (this.barcos)
        pop();

    }
}