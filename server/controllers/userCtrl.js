// APP //
var app = require('./../index');
var db = app.get('db');

// BCRYPT
var bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

function verifyPassword(submitedPass, userPass) {
	return bcrypt.compareSync(submitedPass, userPass);
}

module.exports = {

	// REGISTER USER //
	register: function(req, res, next) {
		var user = req.body;
		// Hash the users password for security
		user.password = hashPassword(user.password);

		user.email = user.email.toLowerCase();

		db.users.insert([user.first_name, user.last_name, user.email, user.password, user.school], function(err, newUser) {
			// If err, send err
			if (err) {
				console.log('Registration error: ', err);

				return res.status(500)
					.send(err);
			}

			db.users.read_email([user.email], (err, user) => {
				if(err){
					console.log('Read new user ERR:', err)
					return res.status(500).send(err)
				} else {
					delete user[0].password;
					return res.status(200).send(user[0])
				}
			})
		});
	},

	// RETURN CURRENT USER //
	me: function(req, res, next) {
		// Return user
		return res.status(200)
			.send(req.user);
	},

	updateCurrent: function(req, res, next) {
		console.log('Starting update');

		var updateUser = req.body;
		updateUser.user_id = req.user.user_id;
		db.users.save(updateUser, function(err, user) {
			if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

			delete user.password;
			req.user = user;

			res.status(200)
				.send(user);
		});
	},

	login: (req, res, next) => {
		let loginUser = req.body

		db.users.read((err, users) => {
			if(err){
				console.log('Read user ERR:', err)
				return res.status(500).send(err)
			} else {
				for(let i = 0; i < users.length; i++){
					if(users[i].email === loginUser.email){
						db.users.read_email([loginUser.email], (err, user) => {
							if(err){
								console.log('Read user ERR:', err)
								return res.status(500).send(err)
							} else {
								if (verifyPassword(loginUser.password, user[0].password)) {
									delete user[0].password;
									return res.status(200).send(user[0])
								}
							}
						})
					}
				}
			}
		})
	}

};
