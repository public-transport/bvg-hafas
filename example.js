'use strict'

const createHafas = require('.')

const jungfernheide = '900000020201'
const tempelhof = '900000068201'

const hafas = createHafas('bvg-hafas example')

hafas.journeys(jungfernheide, tempelhof, {results: 1})
// .then(([journey]) => {
// 	const leg = journey.legs[0]
// 	return hafas.journeyLeg(leg.id, leg.line.name)
// })

// hafas.departures(jungfernheide, { duration: 5 })
// hafas.locations('friedrichstr', {results: 2})
// hafas.locations('mauerpark', {results: 2})
// hafas.location(jungfernheide)
// hafas.nearby({
// 	type: 'location',
// 	latitude: 52.5137344,
// 	longitude: 13.4744798
// }, {distance: 200})
// hafas.radar({
// 	north: 52.52411,
// 	west: 13.41002,
// 	south: 52.51942,
// 	east: 13.41709
// }, {results: 10})

.then(console.log)
.catch(console.error)
