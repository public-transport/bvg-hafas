'use strict'

const createThrottledClient = require('hafas-client/throttle')
const bvgProfile = require('hafas-client/p/bvg')

const throttle = (limit = 5, interval = 1000) => {
	return createThrottledClient(bvgProfile, limit, interval)
}

module.exports = throttle
