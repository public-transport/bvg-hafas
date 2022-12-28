import createHafasClient from 'hafas-client'
import bvgProfile from 'hafas-client/p/bvg/index.js'

const defaults = {
	profile: bvgProfile
}

const createBvgHafas = (userAgent, opt = {}) => {
	const {
		profile,
	} = {...defaults, ...opt}

	return createHafasClient(profile, userAgent)
}

export {
	defaults,
	createBvgHafas,
}
