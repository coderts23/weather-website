const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=f649a6f3e2dcdb4e25dd92832cc783a3&units=metric'
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to CONNECT!', undefined)
        }
        else if(body.error){
            callback('Unable to find the location!', undefined)
        }
        else{
            callback(undefined, body.weather[0].main + '. It is currently ' + body.main.temp + ' degrees celcius. The high today is '+ body.main.temp_max + ' with a low of ' + body.main.temp_min + '.')
        }
    })
}
module.exports = forecast
