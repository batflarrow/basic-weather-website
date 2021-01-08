const request = require('postman-request')


// const forecast=(latitude,longitude,callback)=>
// {
//     const url = 'http://api.weatherstack.com/current?access_key=b3a0ed9066d9940295a7f9886e25dc4e&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m'

//     request({url:url,json:true},(error,response)=>
//     {
//         if(error)
// {
//     // console.log();
//     callback("Unable to connect to the weather service")
// }
// else
// if(response.body.error)
// {
        
//     callback("Unable to find the location")
    
// }
// else
// {
//     callback(undefined,response.body.current.weather_descriptions[0]+" It is currently "+response.body.current.temperature+" degrees out and it feels like "+response.body.current.feelslike+" degrees out.")
// }

//     })
// }

const forecast=(latitude,longitude,callback)=>
{
    const url = 'http://api.weatherstack.com/current?access_key=b3a0ed9066d9940295a7f9886e25dc4e&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m'
    const json=true
    request({url,json},(error,{body}={})=>
    {
        if(error)
{
    // console.log();
    callback("Unable to connect to the weather service")
}
else
if(body.error)
{
        
    callback("Unable to find the location")
    
}
else
{
    callback(undefined,body.current.weather_descriptions[0]+" It is currently "+body.current.temperature+" degrees out and it feels like "+body.current.feelslike+" degrees out.\n"+"The humidity is "+body.current.humidity)
}

    })
}

module.exports=forecast


// const url = 'http://api.weatherstack.com/current?access_key=b3a0ed9066d9940295a7f9886e25dc4e&query=37.8267,-122.4233&units=m'
// const url='http://api.weatherstack.com/current?access_key=b3a0ed9066d9940295a7f9886e25dc4e&query=Ahmedabad&units=m'
// request({url:url,json:true},(error,response)=>{
// // console.log(response)
// // const data=JSON.parse(response.body)
// // console.log(response.body.current)

// if(error)
// {
//     console.log("Unable to connect to the weather service");
// }
// else
// if(response.body.error)
// {
//     console.log("Unable to find the location");
// }
// else
// {
//     console.log(response.body.current.weather_descriptions[0]+" It is currently "+response.body.current.temperature+" degrees out and it feels like "+response.body.current.feelslike+" dgrees out.")
// }

// })
