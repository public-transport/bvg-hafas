'use strict'

const createClient = require('hafas-client')
const withRetrying = require('hafas-client/retry')
const bvgProfile = require('hafas-client/p/bvg')

const createRetryingClient = (userAgent, retryOpts = {}) => {
	return withRetrying(createClient, retryOpts)(bvgProfile, userAgent)
}

module.exports = createRetryingClient
