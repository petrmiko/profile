require('dotenv').config()
const Konteiner = require('@petrmiko/konteiner')
const HttpServer = require('./http-server')
const path = require('path')

const config = require('../config')

const konteiner = new Konteiner()
konteiner.registerPath(__dirname, { exclude: ['index.js'] })
konteiner.registerPath(path.join(__dirname, 'middleware'))

async function run() {
	const httpServer = konteiner.get(HttpServer)

	const { address, family, port } = await httpServer.start(httpServer.getServer())
	const showAddress = family === 'IPv6' && address === '::' ? 'localhost' : address
	console.log(`Http server started on http://${showAddress}:${port}`)
	console.log(config)
	console.dir(Array.from(konteiner.getDependencyMap().values(), (ref) => {
		const { instance, dependencies, ...refRest } = ref
		return {
			...refRest,
			dependencies: Array.from(dependencies, (ref) => ({
				name: ref.name, path: ref.path,
			})),
		}
	}), { depth: null })
}

run().catch(err => {
	console.error(err)
	process.exit(1)
})
