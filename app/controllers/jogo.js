module.exports.jogo = function(application, req, res){
	if(req.session.usuario){
		res.render('jogo');
	} else{
		res.render('index', {validacao:{}})
	}
}

module.exports.sair = function(application, req, res){
	req.session.destroy( function(err){
		res.render('index', {validacao:{}})
	})
}