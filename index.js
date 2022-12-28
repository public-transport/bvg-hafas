import {createClient} from 'hafas-client'
import {profile as bvgProfile} from 'hafas-client/p/bvg/index.js'

const defaults = {
	profile: bvgProfile
}

const createBvgHafas = (userAgent, opt = {}) => {
	const {
		profile,
	} = {...defaults, ...opt}

	return createClient(profile, userAgent)
}

export {
	defaults,
	createBvgHafas,
}
