const model = require('../../models/models-ts/user.model');
const express = require('express');
const router = express.Router();


router.get('/', global.secure('admin'), function(request, response) {
	model.list(function(users) {
		response.set("Content-Type", "text/html");
		response.render('users-list', {
			data: users
		})
	})	
});

router.get('/create',function(request, response) {
	response.set("Content-Type", "text/html");
	response.render('users-item', {
		isNew: true,
		user: {},
		errors: []
	})
});

router.post('/create',function(request, response) {
	request.checkBody('username', 'Username incorreto').isLength({min: 5, max: 10});
	request.checkBody('password', 'Password incorreta').isLength({min: 8, max: 15});
	var errors = request.validationErrors();	
	if (errors) {
		response.render('users-item', {
			isNew: true,
			user: {},
			errors: errors
		});
	}else{
		var data = {
			'username': request.body.username,
			'name': request.body.name,
			'email': request.body.email,
			'password': request.body.password	
		};
		model.create(data, function(){
			response.redirect('/users');
		});
	}
});

router.get('/:username', global.secure('admin'), function(request, response) {
	model.read(request.params.username, function(user) {
		if (user != undefined) {
			response.set("Content-Type", "text/html");
			response.render('users-item', {
				isNew: false,
				user: user,
				errors: []
			})		
		}else{
			response.status(404).end();
		}
	})	
});

router.post('/:username', global.secure('admin'), function(request, response) {	
	request.checkBody('password', 'Password incorreta').isLength({min: 8, max: 15});
	var data = {
		'name': request.body.name,
		'email': request.body.email,
		'password': request.body.password	
	};
	var errors = request.validationErrors();	
	if (errors) {
		data.username = request.params.username;
		response.render('users-item', {
			isNew: false,
			user: data,
			errors: errors
		});
	}else{	
		model.update(request.params.username, data, function(){
			response.redirect('/users/');
		});
	}
});

router.get('/:username/delete', global.secure('admin'), function(request, response){
	model.remove(request.params.username, function() {
		response.redirect('/users');
	})	
});

module.exports = router;