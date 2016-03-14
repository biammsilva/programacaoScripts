function Cachorro(){
	this.barulho="Au";
}

function Gato(){
	this.barulho="Miau";
}

function ManadaVirgula(){
	tempo=1;
	bar=", ";
	Manada.call(this);
}

function ManadaSustenidaDupla(){
	tempo=2;
	bar="# ";
	Manada.call(this);
}

function Manada(){
	lista=[];

	this.adicionar=function(x){
		lista.push(x);
	}

	this.barulhos=function(){
		s="";
		for (var i = 0; i<lista.length; i++) {
			if (i==lista.length-1) {
				s+=lista[i].barulho;
			}else{	
				for(var j=0;j<tempo-1;j++){
					s+=lista[i].barulho+bar;
				}
			}
		}
		return s;
	}
}


ManadaSustenidaDupla.prototype=new Manada();
ManadaVirgula.prototype=new Manada();

///////////////////////////////////////////////////////////////////////////////////////////////

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
