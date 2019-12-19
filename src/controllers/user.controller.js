const User = require('../models/user.model');

getUserProfile = async (req, res) => {
	await User.findById(req.decoded.id)
		.exec()
		.then(data => {
			let user = {
				username: data.username,
				email: data.email,
				status: data.status
			};

			if (data.name.firstName !== {}) user.firstName = data.name.firstName;
			if (data.name.lastName !== {}) user.lastName = data.name.lastName;

			res.status(200).json(user);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

getUserById = async (req, res) => {
	await User.findById(req.decoded.id)
		.exec()
		.then(data => {
			let user = {
				id: data._id,
				username: data.username,
				email: data.email
			};

			if (data.name.firstName !== {}) user.firstName = data.name.firstName;
			if (data.name.lastName !== {}) user.lastName = data.name.lastName;

			res.status(200).json(user);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

setupUser = async (req, res) => {
	const id = req.decoded.id;

	await User.findByIdAndUpdate(id, req.body, { new: true })
		.then(result => {
			let user = {
				email: result.email,
				username: result.username,
				name: {
					firstName: result.name.firstName,
					lastName: result.name.lastName
				}
			};
			res.status(200).json(user);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

updateUser = async (req, res) => {
	const id = req.decoded.id;

	await User.findByIdAndUpdate(id, req.body, { new: true })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

checkUsername = async (req, res) => {
	await User.find({
			username: req.body.username
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		});
};

module.exports = {
	getUserProfile,
	getUserById,
	setupUser,
	updateUser,
	checkUsername
};
