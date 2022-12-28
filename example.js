import {inspect} from 'node:util'
import {createBvgHafas as createHafas} from './index.js'
// import {createThrottledHafas} from './throttle.js'
// import {createRetryingClient} from './retry.js'

const hafas = createHafas('bvg-hafas-example')
// const hafas = createThrottledHafas('bvg-hafas-example', {
// 	throttlingLimit: 5,
// 	throttlingInterval: 10000 // 10s
// })
// const hafas = createRetryingClient('bvg-hafas-example', {
// 	retryOpts: {retries: 2}
// })

const spichernstr = '900000042101'
const bismarckstr = '900000024201'

// let data = await hafas.locations('Alexanderplatz', {results: 2})
// let data = await hafas.nearby(52.5137344, 13.4744798, {distance: 60})
// let data = await hafas.stop(bismarckstr)
// let data = await hafas.departures(spichernstr, {duration: 1})

let data = await hafas.journeys(spichernstr, bismarckstr, {
	results: 1,
	tickets: true,
	stopovers: true,
	transferInfo: true
})
// let data = await hafas.journeys({
// 	type: 'location',
// 	id: '900981377',
// 	name: 'Berlin, HTW-Berlin Campus Wilhelminenhof',
// 	latitude: 52.458359,
// 	longitude: 13.526635
// }, '900000192001', {results: 1})
// {
// 	const [journey] = data.journeys
// 	data = await hafas.refreshJourney(journey.refreshToken, {
// 		stopovers: true,
// 		transferInfo: true,
// 	})
// }
// {
// 	const [journey] = data.journeys
// 	const leg = journey.legs[0]
// 	data = await hafas.trip(leg.tripId, leg.line.name, {polyline: true})
// }

// let data = await hafas.radar({
// 	north: 52.52411,
// 	west: 13.41002,
// 	south: 52.51942,
// 	east: 13.41709
// }, {results: 10})

console.log(inspect(data, {depth: null, colors: true}))
