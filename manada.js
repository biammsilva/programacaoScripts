function Animal(){
	this.barulho="";
}

function Cachorro(){
	this.barulho="Au";
	Animal.call(this);
}

function Gato(){
	this.barulho="Miau";
	Animal.call(this);
}


function Manada(){
	lista=[];

	this.adicionar=function(x){
		lista.push(x);
	}	
	console.log(lista.length)
}

function ManadaVirgula(){

	this.barulhos=function(){
		s="";
		for (var i = 0; i<lista.length; i++) {
			if (i!=lista.length-1) {
				s+=lista[i].barulho+", ";
			}else{
				s+=lista[i].barulho;
			}
		}
		return s;
	}

	Manada.call(this);
}

function ManadaSustenidaDupla(){

	this.barulhos=function(){
		s="";
		for (var i = 0; i<lista.length; i++) {
			if (i!=lista.length-1) {
				s+=lista[i].barulho+"# "+lista[i].barulho+"# ";
			}else{
				s+=lista[i].barulho+"# "+lista[i].barulho;
			}
		}
		return s;
	}

	Manada.call(this);
}


Gato.prototype = new Animal();
Cachorro.prototype = new Animal();
ManadaVirgula.prototype = new Manada();
ManadaSustenidaDupla.prototype = new Manada();

/////////////////////////////////////////////////////////////////////

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());