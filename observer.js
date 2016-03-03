
function gerarListener(){
	var obj={contador: 0};
	listeners=[];

	obj.executar = function(){
		obj.contador++;
		var evento={"contador": obj.contador};
		for (var i = 0; i < listeners.length; i++) {
			listeners[i](evento);
		}
	}

	obj.adicionarOuvinte = function(func){
		listeners.push(func);
	}

	return obj;
}
var contadorObserver=gerarListener();

contadorObserver.adicionarOuvinte(
	function(evento){
		console.log("1 ouvinte"+evento.contador);
	});

contadorObserver.adicionarOuvinte(
	function(evento){
		console.log("2 ouvinte"+evento.contador);
	});


contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();