import createClient from 'hafas-client'
import withRetrying from 'hafas-client/retry.js'
import bvgProfile from 'hafas-client/p/bvg/index.js'

const createRetryingClient = (userAgent, opt = {}) => {
	const {retryOpts} = {retryOpts: {}, ...opt}

	const retryingProfile = withRetrying(bvgProfile, retryOpts)
	return createClient(retryingProfile, userAgent, opt)
}

export {
	createRetryingClient,
}
