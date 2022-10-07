# bvg-hafas

**A client for the [HAFAS](https://de.wikipedia.org/wiki/HAFAS) endpoint of [*Berliner Verkehrsbetriebe* (BVG)](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe), the largest public transport provider in Berlin.** It acts as a consistent and straightforward interface on top of their verbose API.

This project is actually a thin wrapper around [`hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5#hafas-client). [Its docs](https://github.com/public-transport/hafas-client/tree/5/docs) document the API in general.

*Note*: The BVG HAFAS endpoint covers Brandenburg as well.

[![npm version](https://img.shields.io/npm/v/bvg-hafas.svg)](https://www.npmjs.com/package/bvg-hafas)
![ISC-licensed](https://img.shields.io/github/license/public-transport/bvg-hafas.svg)
[![support Jannis via GitHub Sponsors](https://img.shields.io/badge/support%20Jannis-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with Jannis on Twitter](https://img.shields.io/badge/chat%20with%20Jannis-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install bvg-hafas
```


## API

Check [the docs for `hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5/docs) as well as [its BVG-specific customisations](https://github.com/public-transport/hafas-client/tree/5/p/bvg).


## Usage

```javascript
const createClient = require('bvg-hafas')

const client = createClient('my-awesome-program')
```

As an example, we will search for a route from *Berlin Jungfernheide* to *Tempelhof*. To get the station IDs, use [`locations(query, [opt])`](https://github.com/public-transport/hafas-client/blob/5/docs/locations.md).

```javascript
const journeys = await client.journeys('900000020201', '900000068201', {
	results: 1,
})
console.log(journeys[0])
```

The output will be an array of [`journey` objects in the *Friendly Public Transport Format* `1.2.1` format](https://github.com/public-transport/friendly-public-transport-format/tree/1.2.1/spec#journey):

```javascript
{
	type: 'journey',
	legs: [ {
		id: '1|62072|0|86|14082018',
		origin: {
			type: 'stop',
			id: '900000020201',
			name: 'S+U Jungfernheide',
			location: {
				type: 'location',
				latitude: 52.530273,
				longitude: 13.299064
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: true
			}
		},
		departure: '2018-08-14T15:05:00.000+02:00',
		departurePlatform: '6',
		departureDelay: 0,
		destination: {
			type: 'stop',
			id: '900000068201',
			name: 'S+U Tempelhof',
			location: {
				type: 'location',
				latitude: 52.470692,
				longitude: 13.385756
			},
			products: { /* … */ }
		},
		arrival: '2018-08-14T15:27:00.000+02:00',
		arrivalPlatform: '2',
		arrivalDelay: 0,
		direction: 'Ringbahn S 42',
		line: {
			type: 'line',
			id: 's42',
			name: 'S42',
			public: true,
			mode: 'train',
			product: 'suburban',
			operator: { /* … */ },
			// …
		},
		cycle: { min: 300, max: 300 }
	} ],
	refreshToken: '…'
}
```


## Related

Check [`hafas-client`'s related projects](https://github.com/public-transport/hafas-client/blob/5/readme.md#related-projects).


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/public-transport/bvg-hafas/issues).
