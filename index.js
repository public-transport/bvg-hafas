'use strict'

const createHafasClient = require('hafas-client')
const bvgProfile = require('hafas-client/p/bvg')

const createClient = (userAgent) => {
	return createHafasClient(bvgProfile, userAgent)
}

module.exports = createClient
