const request = require('postman-request')

// const geocode=(address,callback)=>{
//     const urlGeocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmF0ZmxhcnJvdyIsImEiOiJja2pja3kxam03ejB0MzFxajB2MzlmZGFmIn0.Xo1aNf9NsF3uFrV4E1eZWQ&limit=1'
    
    
//     request({url:urlGeocoding,json:true},(error,response)=>
//     {
//         if (error) {
//                     callback("Unable to find location.Try Another Search")   
    
//                    }
//                    else if (response.body.features.length === 0) {
//                     callback("Unable to find location.Try Another Search",undefined)
                    
//                 }
//                 else
//                 {  const data={
//                 latitude : response.body.features[0].center[1],
//                 longitude : response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//                 }
//                     callback(undefined,data)
//                 }
        
    
    
//     })
    
    
//     }


const geocode=(address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmF0ZmxhcnJvdyIsImEiOiJja2pja3kxam03ejB0MzFxajB2MzlmZGFmIn0.Xo1aNf9NsF3uFrV4E1eZWQ&limit=1'
    
    const json=true
    request({url,json},(error,{body}={})=>
    {
        if (error) {
                    callback("Unable to find location.Try Another Search")   
    
                   }
                   else if (body.features.length === 0) {
                    callback("Unable to find location.Try Another Search",undefined)
                    
                }
                else
                {  const data={
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location:  body.features[0].place_name
                }
                    callback(undefined,data)
                }
        
    
    
    })
    
    
    }

    module.exports=geocode






    // var latitude;
// var longitude;
// const urlGeocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Ahmedabad.json?access_token=pk.eyJ1IjoiYmF0ZmxhcnJvdyIsImEiOiJja2pja3kxam03ejB0MzFxajB2MzlmZGFmIn0.Xo1aNf9NsF3uFrV4E1eZWQ&limit=1'
// request({ url: urlGeocoding, json: true }, (error, response, body) => {

//     if (error) {
//         console.log("Unable to connect to the Location services");
//     }
//     else  if (body.features.length === 0) {
//             console.log("Unable to find location.Try Another Search");

//         }
//         else {


//             latitude = body.features[0].center[1]
//             longitude = body.features[0].center[0]

//             console.log("Longitude:  " + longitude + " Latitute: " + latitude)
//             console.log("Place name: " + body.features[0].place_name)

//         }
// })

