'use strict'

const createClient = require('hafas-client')
const withThrottling = require('hafas-client/throttle')
const bvgProfile = require('hafas-client/p/bvg')

const createThrottledClient = (userAgent, opt = {}) => {
	const {
		throttlingLimit: limit,
		throttlingInterval: interval
	} = {
		throttlingLimit: 5,
		throttlingInterval: 1000, // 1s
		...opt
	}

	const throttledProfile = withThrottling(bvgProfile, limit, interval)
	return createClient(throttledProfile, userAgent, opt)
}

module.exports = createThrottledClient
