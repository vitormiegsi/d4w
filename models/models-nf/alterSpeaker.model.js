module.exports = { 
	
	readSpeaker(email, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.sessoes where email_speaker=?";
		global.connection.query(sql, [email], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
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
			
	updateSpeaker(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.speakers SET nome_speaker=?, morada_speaker=?   , numero_speaker=? ,cache_speaker=? WHERE id_speaker=?";
		global.connection.query(
			sql, [data.name, data.morada,  data.numero, data.cache , data.id],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	
	removeSpeaker(email, callback) {
		var sql = "UPDATE  dwpt_nortephotography.speakers SET deleted=? WHERE email_speaker=?";
		global.connection.query(
			sql, [1, email],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
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
		var sql = "INSERT INTO  dwpt_nortephotography.sessoes (nome_speaker, morada_speaker, email_speaker, numero_speaker, cache_speaker ) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.name, data.morada, data.email, data.numero, data.cache],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	
	listSpeakers(callback) {
		var sql = 'SELECT * from  dwpt_nortephotography.sessoes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},

}
