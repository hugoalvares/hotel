var js = {

	ajustaHeader : function() {
		$("#simple-menu").toggleClass('menu');
	},

	abreCardapio : function() {
		window.location = 'cardapio.html';
	},

	abreServicos : function() {
		window.location = 'servicos.html';
	},

	abreAtividades : function() {
		window.location = 'atividades.html';
	},

	abreInstalacoes : function() {
		window.location = 'instalacoes.html';
	},

	abreParcial : function() {
		window.location = 'parcial.html';
	},

	abreCheckout : function() {
		window.location = 'checkout.html';
	},

	abreSolicitacoes : function() {
		window.location = 'solicitacoes.html';
	},

	buscaAtividades : function() {

	},

	chamaServidor : function(data, callback) {
		$.ajax({
			url : "server.php",
			data : data,
			success : function(callback) {
				callback();
			}
		});
	}

};
