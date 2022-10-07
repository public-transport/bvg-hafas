'use strict'

const createHafasClient = require('hafas-client')
const bvgProfile = require('hafas-client/p/bvg')

const defaults = {
	profile: bvgProfile
}

const createClient = (userAgent, opt = {}) => {
	const {
		profile,
	} = {...defaults, ...opt}

	return createHafasClient(profile, userAgent)
}

createClient.defaults = defaults
module.exports = createClient
