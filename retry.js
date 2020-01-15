'use strict'

const createClient = require('hafas-client')
const withRetrying = require('hafas-client/retry')
const bvgProfile = require('hafas-client/p/bvg')

const createRetryingClient = (userAgent, opt = {}) => {
	const {retryOpts} = {retryOpts: {}, ...opt}

	const retryingProfile = withRetrying(bvgProfile, retryOpts)
	return createClient(retryingProfile, userAgent, opt)
}

module.exports = createRetryingClient
