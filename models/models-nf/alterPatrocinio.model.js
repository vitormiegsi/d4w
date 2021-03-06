module.exports = {
	
	readPatrocinio(nome, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.patrocinador where nome_patrocinador=?";
		global.connection.query(sql, [nome], function (error, rows, fields) {
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
		var sql = "UPDATE  dwpt_nortephotography.patrocinador  SET deleted=? WHERE nome_patrocinador=?";
		global.connection.query(sql, [1, name], function (error, rows, fields) {
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
	
	readPatrocinio(nome, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.patrocinador where nome_patrocinador=?";
		global.connection.query(sql, [nome], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},

	
	
}