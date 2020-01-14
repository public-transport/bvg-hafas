'use strict'

const createClient = require('hafas-client')
const withThrottling = require('hafas-client/throttle')
const bvgProfile = require('hafas-client/p/bvg')

const createThrottledClient = (userAgent, limit = 5, interval = 1000) => {
	return withThrottling(createClient, limit, interval)(bvgProfile, userAgent)
}

module.exports = createThrottledClient
