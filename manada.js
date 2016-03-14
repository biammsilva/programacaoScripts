function Cachorro(){
	this.barulho="Au";
}

function Gato(){
	this.barulho="Miau";
}

function ManadaVirgula(){
	lista = [];
	
	this.adicionar=function(x){
		lista.push(x);
	}

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

}

function ManadaSustenidaDupla(){
	listaSustenida = [];
	
	this.adicionar=function(x){
		listaSustenida.push(x);
	}

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
}




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