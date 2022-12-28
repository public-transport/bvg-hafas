import {createClient} from 'hafas-client'
import {withThrottling} from 'hafas-client/throttle.js'
import {profile as bvgProfile} from 'hafas-client/p/bvg/index.js'

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

export {
	createThrottledClient,
}
