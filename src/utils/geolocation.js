const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoicGFuZ3VydSIsImEiOiJja290NmhhMXkwOG1rMnBxNzl4aXBubnJnIn0.VWs0fSzexb6zdsXfrN6sKA'
   

    request({url: url, json: true}, (error,response) => {
        if (error) {
            callback('unable to connect to the location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find the location. try anoter location',undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode