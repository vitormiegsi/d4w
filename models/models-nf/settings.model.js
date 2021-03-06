module.exports = {

	readParticipante(username, callback) {
		var sql = "SELECT * from  dwpt_nortephotography.participantes where username_part=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},
	

	updateUsers(data, callback) {
		var sql = "UPDATE  dwpt_nortephotography.users SET name=?, email=? , password=? WHERE username=?";
		global.connection.query(
			sql, [data.name,  data.email , data.password , data.username],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	
	

}