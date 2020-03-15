const { User } = require('../utils/database.util')

const get = async (req, res) => {
	try {
		const { id } = req.decode

		await User.findByPk(id)
			.then(data => {
				const { id, email, username, fullname, status } = data

				const user = {
					id,
					email,
					username,
					fullname,
					status
				}

				res.json(user)
			})
			.catch(err => res.status(400).json({ message: 'User info not found!' }))
	} catch (error) {
		res.status(500).json({
			error: error
		})
	}
}

const getById = async (req, res) => {
	try {
		const { userId } = req.params

		await User.findByPk(userId)
			.then(data => {
				const { id, email, username, fullname, status } = data

				const user = {
					id,
					email,
					username,
					fullname,
					status
				}

				res.json(user)
			})
			.catch(err => res.status(400).json({ message: 'User not found!' }))
	} catch (error) {
		res.status(500).json({ error })
	}
}

const setup = async (req, res) => {
	try {
		const { id } = req.decode

		await User.update(req.body, { where: { id } })
			.then(result => {
				res.json({ message: 'User info update!' })
			})
	} catch (error) {
		res.status(500).json({
			message: 'Setup user error!',
			error
		})
	}
}

// const update = async (req, res) => {
// 	try {

// 	} catch (error) {

// 	}
// }

module.exports = {
	get,
	getById,
	setup
	// update
}
