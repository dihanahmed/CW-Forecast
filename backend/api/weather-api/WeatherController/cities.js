const cities ={
    DHAKA: {
        latitude: 0,
        longitude: 0
    },
    CHITTAGONG: {
        latitude: 22.341900,
        longitude: 91.815536
    },
    RAJSHAHI: {
        latitude: 0,
        longitude: 0
    },
    KHULNA: {
        latitude: 22.820000,
        longitude: 89.550003
    },
    BARISHAL: {
        latitude: 0,
        longitude: 0
    },
    SYLHET: {
        latitude: 24.894802,
        longitude: 91.869034
    },
    MYMENSINGH: {
        latitude: 0,
        longitude: 0
    },
    JASHORE: {
        latitude: 23.170664,
        longitude: 89.212418
    }

}

fetchCoordinate = (city)=>{
    return cities[city];

}


fetchCities =() =>{
   return cities;
}

module.exports = {
    fetchCoordinate,
    fetchCities
}