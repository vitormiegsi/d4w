const port = 3000;
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const appnf = express();
const validator = require('express-validator');
const fileUpload = require('express-fileupload');

//new
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');










//This function will allow us to retrict the access to the routes
global.secure = function(type) {
	return function (request, response, next) {
		if (request.isAuthenticated()) {
			if (type) {
				if (type === request.user.type) {
					return next();
				}else{
					response.redirect('/');
				}
			}else{
				return next();
			}
		}
		response.redirect('/');
	}
};

//end of new

app.use(validator());
app.use(fileUpload({
    limits: { fileSize: 50 * 128 * 128 },
}));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));





appnf.use(validator());
appnf.use(fileUpload({
    limits: { fileSize: 50 * 128 * 128 },
}));
appnf.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));





//new
app.use(cookieParser());
app.use(session({
	secret: 'someRandomSecretKey',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());





appnf.use(cookieParser());
appnf.use(session({
	secret: 'someRandomSecretKey',
	resave: false,
	saveUninitialized: false
}));
appnf.use(passport.initialize());
appnf.use(passport.session());




passport.serializeUser(function(username, callback) {
	callback(null, username);
});

passport.deserializeUser(function(username, callback) {
	usersModel.read(username, function(data) {
		callback(null, data);
	})
});
//end of new

app.set('view engine', 'ejs');
app.set('views','views/views-root');



appnf.set('view engine', 'ejs');
appnf.set('views','views');



global.connection = mysql.createConnection({
	host     : 'webitcloud.net',
	user     : 'webitclo_A155',
	password : 'PW1718A155541',
	database : 'webitclo_A155',
}).on('enqueue', function (sequence) {
	if ('Query' === sequence.constructor.name) {
		console.log(sequence.sql);
	}
});

app.listen(port, function(){
	console.log('Server started at: ' + port);
});



appnf.listen(2000, function(){
	console.log('Server started at: ' + port);
});



//Midleware that sets the isAuthenticated variable in all views
app.use(function(request, response, next){
	response.locals.user = request.user;
	response.locals.isAuthenticated = request.isAuthenticated();
	next();
});

app.use('/', require('./controllers/controllers-root/index-frontend.route'));
app.use('/public', express.static('public/public-root'));

/*
app.use('/gestao', require('./controllers/controllers-root/index-backend.route'));
app.use('/login', require('./controllers/controllers-root/login.route'));
app.use('/logout', require('./controllers/controllers-root/logout.route'));
app.use('/sessoes', require('./controllers/controllers-root/sessoes.route'));
app.use('/bilheteira', require('./controllers/controllers-root/bilheteira.route'));
app.use('/parametros', require('./controllers/controllers-root/parametros.route'));

app.use('/listagem', require('./controllers/controllers-root/listagens.route'));
app.use('/patrocinador', require('./controllers/controllers-root/patrocinador.route'));
app.use('/colaborador', require('./controllers/controllers-root/colaborador.route'));
app.use('/speaker', require('./controllers/controllers-root/speaker.route'));
app.use('/profile', require('./controllers/controllers-root/profile.route'));
*/




appnf.use('/', require('./controllers/controllers-nf/index.route'));



appnf.use('/public', express.static('public/public-nf'));