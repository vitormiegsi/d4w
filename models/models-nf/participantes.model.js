module.exports = {
	
	listParticipantes(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.participantes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
	listBilhetes(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.bilhetes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},
	listDias(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.dia';
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

	createSpeakers(data, callback) {
		var sql = "INSERT INTO  dwpt_nortephotography.speakers (nome_speaker, morada_speaker, email_speaker, numero_speaker, cache_speaker ) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.cache],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	}
	
}