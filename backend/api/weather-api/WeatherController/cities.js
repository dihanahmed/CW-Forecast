const cities = {
    DHAKA: {
        latitude: 23.810331,
        longitude: 90.412521
    },
    CHITTAGONG: {
        latitude: 22.341900,
        longitude: 91.815536
    },

    KHULNA: {
        latitude: 22.820000,
        longitude: 89.550003
    },

    SYLHET: {
        latitude: 24.894802,
        longitude: 91.869034
    },

    JASHORE: {
        latitude: 23.170664,
        longitude: 89.212418
    },

    NEWYORK: {
        latitude: 43.000000,
        longitude: 75.000000
    },

    GAZIPUR: {
        latitude: 23.999941,
        longitude: 90.420273
    }

}

fetchCoordinate = (city) => {
    const cityData = cities[city];
    if (cityData === null || cityData === undefined) return { successful: false }
    cityData.successful = true;
    return cities[city];

}


fetchCities = () => {
    return cities;
}

module.exports = {
    fetchCoordinate,
    fetchCities
}