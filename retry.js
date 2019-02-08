'use strict'

const createClientWithRetry = require('hafas-client/retry')
const bvgProfile = require('hafas-client/p/bvg')

const withRetry = (userAgent, retryOpts = {}) => {
	return createClientWithRetry(bvgProfile, userAgent, retryOpts)
}

module.exports = withRetry
