const path = require('path')
// const removeSpace = require('./removeSpace')
const multer = require('multer')

const root = path.dirname(__dirname)

//  Multer Storage
const storage = multer.diskStorage({
	destination: (req, files, cb) => {
		cb(null, path.join(root, 'views', 'images', 'inventory'))
	},
	filename: (req, file, cb) => {
		const dash = '-'
		const condition = req.body.condition
		const make = req.body.make
		const model = req.body.model
		const year = req.body.year
		const randomNumber = Math.round(Math.random() * 1e9)
		const extension = path.extname(file.originalname)

		// Filename
		cb(
			null,
			year +
				dash +
				condition +
				dash +
				make +
				dash +
				model +
				dash +
				randomNumber +
				extension
		)
	},
})
const upload = multer({ storage: storage })

module.exports = upload
