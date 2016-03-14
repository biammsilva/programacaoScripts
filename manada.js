function Animal(){
	this.barulho="";
}


function Cachorro(){
	Animal.call(this);
	this.barulho="Au";
}

function Gato(){
	Animal.call(this);
	this.barulho="Miau";
}


function Manada(){
	this.lista=[];
}

Manada.prototype = {
	adicionar: function(x){
		this.lista.push(x);
	}	
}

function ManadaVirgula(){;
}



ManadaVirgula.prototype = new Manada();
ManadaVirgula.prototype.barulhos=function(){
	var s="";
	for (var i = 0; i<lista.length; i++) {
		if (i!=lista.length-1) {
			s+=lista[i].barulho+", ";
		}else{
			s+=lista[i].barulho;
		}
	}
	return s;
}

function ManadaSustenidaDupla(){
}

ManadaSustenidaDupla.prototype = new Manada();
ManadaSustenidaDupla.prototype.barulhos=function(){
	var s="";
	for (var i = 0; i<lista.length; i++) {
		if (i!=lista.length-1) {
			s+=lista[i].barulho+"# "+lista[i].barulho+"# ";
		}else{
			s+=lista[i].barulho+"# "+lista[i].barulho;
		}
	}
	return s;
}


Gato.prototype = new Animal();
Cachorro.prototype = new Animal();

/////////////////////////////////////////////////////////////////////

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var lista = [new Cachorro(), new Gato()];

lista.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());