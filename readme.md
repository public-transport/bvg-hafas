# bvg-hafas

**A client for [HAFAS](https://de.wikipedia.org/wiki/HAFAS) endpoint of [*Berliner Verkehrsbetriebe* (BVG)](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe), the largest public transport provider in Berlin.** It acts as a consistent and straightforward interface on top of their verbose API.

This project is actually a thin wrapper around [`hafas-client`](https://github.com/public-transport/hafas-client#hafas-client). [Its docs](https://github.com/public-transport/hafas-client/tree/next/docs) document the API in general.

*Note*: The BVG HAFAS endpoint covers Brandenburg as well.

[![npm version](https://img.shields.io/npm/v/bvg-hafas.svg)](https://www.npmjs.com/package/bvg-hafas)
[![dependency status](https://img.shields.io/david/derhuerst/bvg-hafas.svg)](https://david-dm.org/derhuerst/bvg-hafas)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/bvg-hafas.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install bvg-hafas
```


## API

Check [the docs for `hafas-client`](https://github.com/public-transport/hafas-client/tree/next/docs) as well as [its BVG-specific customisations](https://github.com/public-transport/hafas-client/tree/next/p/bvg).


## Getting Started

```javascript
const createClient = require('bvg-hafas')

const client = createClient('my-awesome-program')
```

As an example, we will search for a route from *Berlin Jungfernheide* to *Tempelhof*. To get the station IDs, use [`locations(query, [opt])`](https://github.com/public-transport/hafas-client/blob/next/docs/locations.md).

```javascript
client.journeys('900000020201', '900000068201', {results: 1})
.then((journeys) => console.log(journeys[0]))
.catch(console.error)
```

The output will be an array of [`journey` objects in the *Friendly Public Transport Format* `1.1.1` format](https://github.com/public-transport/friendly-public-transport-format/tree/1.1.1/spec#journey):

```javascript
[ {
	// todo
} ]
```


## Similar Projects

- [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format#friendly-public-transport-format-fptf) – A format for APIs, libraries and datasets containing and working with public transport data.
- [`vbb-hafas`](https://github.com/derhuerst/vbb-hafas) – JavaScript client for the VBB HAFAS API.
- [`db-hafas`](https://github.com/derhuerst/db-hafas) – JavaScript client for the DB HAFAS API.
- [`hafas-client`](https://github.com/public-transport/hafas-client) – JavaScript client for HAFAS mobile APIs.
- [`hafas-collect-departures-at`](https://github.com/derhuerst/hafas-collect-departures-at#hafas-collect-departures-at) – Utility to collect departures, using any HAFAS client.
- [`hafas-discover-stations`](https://github.com/derhuerst/hafas-discover-stations#hafas-discover-stations) – Pass in a HAFAS client, discover stations by querying departures.
- [`hafas-rest-api`](https://github.com/derhuerst/hafas-rest-api#hafas-rest-api) – Expose a HAFAS client via an HTTP REST API.
- [`public-transport-enabler`](https://github.com/schildbach/public-transport-enabler) – Unleash public transport data in your Java project.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/bvg-hafas/issues).
