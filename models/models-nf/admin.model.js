module.exports = {
	list(callback) {
		var sql = 'SELECT * from dwpt_nortephotography.bilhetes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},

	read(username, callback) {
		var sql = "SELECT * from dwpt_nortephotography.users where username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},
			


	readColab(username, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.colaboradores where username_col=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},

	readSpeaker(email, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.speakers where email_speaker=?";
		global.connection.query(sql, [email], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},


	readPatrocinio(nome, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.patrocinador where nome_patrocinador=?";
		global.connection.query(sql, [nome], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},



	listColaboradores(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.colaboradores';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},



	listFeedback(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.feedback';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},


	listSessoes(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.sessoes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},





	listParticipantes(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.participantes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},



	/*
		read(username, callback) {
			var sql = "SELECT * from users where username=?";	
			global.connection.query(sql, [username], function(error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);			
			});
		},	
	*/
	create(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.participantes (password_part, nome_participante, tel_participante, username_part, email_part) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.password, data.name, data.numero, data.username, data.email],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	usernameExists(username, callback) {

		var sql = "SELECT * FROM  dwpt_nortephotography.users WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].username === username) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	emailExists(email, callback) {

		var sql = "SELECT * FROM  dwpt_nortephotography.users WHERE email=?";
		global.connection.query(sql, [email], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].email === email) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},


	
	emailExistsSpeaker(email, callback) {
		
				var sql = "SELECT * FROM  dwpt_nortephotography.speakers WHERE email_speaker=?";
				global.connection.query(sql, [email], function (error, rows, fields) {
					if (error) throw error;
					if (rows.length == 1 && rows[0].email === email) {
						callback(true);
					} else {
						callback(false);
					}
				});
			},
		
	createColab(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.colaboradores (nome_colaborador, morada_colaborador,email_colaborador, numero_colaborador, salario_colab,password_col,username_col, horas_trabalho_diario, funcao) VALUES (?,?,?,?,?,?,?,?,?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, 0, data.password, data.username, data.horario, data.funcao],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	createColabPago(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.colaboradores (nome_colaborador, morada_colaborador,email_colaborador, numero_colaborador, salario_colab, nif_colaborador,  password_col,pago, username_col, horas_trabalho_diario, funcao) VALUES (?,?,?,?,?,?,?,?,?,?, ?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.salario, data.nif, data.password, 1, data.username, data.horario, data.funcao],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	createColabPago2(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.colaboradores (nome_colaborador, morada_colaborador,email_colaborador, numero_colaborador, nif_colaborador,  password_col,pago, username_col, horas_trabalho_diario, funcao) VALUES (?,?,?,?,?,?,?,?,?,?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.nif, data.password, 1, data.username, data.horario, data.funcao],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	update(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.users SET name=?, email=?, password=? WHERE username=?";
		global.connection.query(
			sql, [data.name, data.email, data.password, username],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	updateColab(data, callback) {
		var sql = "UPDATE   dwpt_nortephotography.colaboradores SET nome_colaborador=?, morada_colaborador=? ,email_colaborador=? , numero_colaborador=? ,pago=? , nif_colaborador=?, salario_colab=?, horas_trabalho_diario=? WHERE username_col=?";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, 0, null, 0, data.horario, data.username],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	updateColabPago(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.colaboradores SET nome_colaborador=?, morada_colaborador=?,email_colaborador=?, numero_colaborador=?, salario_colab=?, nif_colaborador=?,pago=?, horas_trabalho_diario=? where username_col=?";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.salario, data.nif, 1, data.horario, data.username],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	updateSpeaker(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.speakers SET nome_speaker=?, morada_speaker=? ,email_speaker=?  , numero_speaker=? ,cache_speaker=? WHERE id_speaker=?";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.cache , data.id],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	updatePatrocinador(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.patrocinador SET valor_doado=? WHERE nome_patrocinador=?";
		global.connection.query(
			sql, [data.valor, data.name],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},


	
	removePatrocinio(name, callback) {
		var sql = "DELETE from  dwpt_nortephotography.patrocinador WHERE nome_patrocinador=?";
		global.connection.query(sql, [name], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},

	
	removeColaborador(id, callback) {
		var sql = "DELETE from  dwpt_nortephotography.colaboradores WHERE id_colaborador=?";
		global.connection.query(sql, [id], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
		
	removeSpeaker(email, callback) {
		var sql = "DELETE from  dwpt_nortephotography.speakers WHERE email_speaker=?";
		global.connection.query(sql, [email], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
		
	remove(name, callback) {
		var sql = "DELETE from  dwpt_nortephotography.patrocinador WHERE nome_patrocinador=?";
		global.connection.query(sql, [name], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
	remove(username, callback) {
		var sql = "DELETE from  dwpt_nortephotography.users WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},

	/*
	takenUsername(username, callback) {
	    
	    var sql = "SELECT password FROM participantes WHERE username=?"
	    var user = global.connection.query(SQL, [username] );
	                                       
	                                       
	                function bit (error, rows, fields){
				     if (user === undefined)  {callback(true);
	                    }else{
	                        callback(false);
	                    }
	    }
	},
	                   
	*/


	//New
	areValidCredentials(username, password, callback) {
		var sql = "SELECT password FROM  dwpt_nortephotography.users WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].password === password) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},


	createPatrocinio(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.patrocinador (nome_patrocinador, valor_doado ) VALUES (?,?)";
		global.connection.query(
			sql, [data.name, data.valor],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	listPatrocinadores(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.patrocinador';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
	
	workshop(callback) {
		var sql = 'SELECT * from dwpt_nortephotography.workshop';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
	

	listDias(callback) {
		
				var sql = 'SELECT * from  dwpt_nortephotography.dia';
				global.connection.query(sql, function (error, rows, fields) {
		var me = [];
				
					for (var e of rows){
						var str = e.data.toLocaleDateString() ;
						var c = str.substring(0, 5);
						me.push(str);	;
		
		
		
					}
					callback(rows);
					console.log(me);
				});
			},
		

	listParticipantes(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.participantes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},


	createSpeakers(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.speakers (nome_speaker, morada_speaker, email_speaker, numero_speaker, cache_speaker ) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.cache],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

	listSpeakers(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.speakers';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
};