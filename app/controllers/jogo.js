module.exports.jogo = function(application, req, res){
	if(req.session.usuario){
		res.render('jogo',{img_casa:req.session.casa });
	} else{
		res.render('index', {validacao:{}})
	}
}

module.exports.sair = function(application, req, res){
	req.session.destroy( function(err){
		res.render('index', {validacao:{}})
	})
}