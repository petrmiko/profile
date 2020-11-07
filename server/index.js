require('dotenv').config()
const Konteiner = require('@petrmiko/konteiner')
const path = require('path')

const config = require('../config')

const konteiner = new Konteiner()
konteiner.register('config', config)
konteiner.registerPath(__dirname, { exclude: ['index.js'] })
konteiner.registerPath(path.join(__dirname, 'middleware'), { suffix: 'middleware' })

async function run() {
	const httpServer = konteiner.get('httpServer')

	console.log(konteiner.getDependencyMap())

	const { address, family, port } = await httpServer.start(httpServer.getServer())
	const showAddress = family === 'IPv6' && address === '::' ? 'localhost' : address
	console.log(`Http server started on http://${showAddress}:${port}`)
	console.log(config)
}

run().catch(err => {
	console.error(err)
	process.exit(1)
})
