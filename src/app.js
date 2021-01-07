const path =require('path')// core modules befor npm modules jst for sake
const express=require('express')
const hbs=require('hbs')    
const geocode =require('./utils/geocode')
const forecast=require('./utils/forecast')
const { response } = require('express')


console.log(__dirname)
    console.log(path.join(__dirname,'../public'))
    const app=express()

    // define paths for express config
    const publicDirPath=path.join(__dirname,'../public')
    const viewsPath=path.join(__dirname,'../templates/views')
    const partialsPath=path.join(__dirname,'../templates/partials')

    

    // Setup handlebars    engine and view location 
    app.set('view engine','hbs')
    app.set('views',viewsPath)
    hbs.registerPartials(partialsPath)

// setup a static dricetory to serve
    app.use(express.static(publicDirPath))

    app.get('',(req,res)=>{
        res.render('index',{title:'Weather',name:'Amitvikram Dwivedi' })
    })

    app.get('/about',(req,res)=>{
        res.render('about',{title:'About Me',name:'Amitvikram Dwivedi'})
    })

    app.get('/help',(req,res)=>{
        res.render('help',{helpTextMessage:'Help help help',name:'Amitvikram Dwivedi',title:'Help'})
    })

        
        app.get('/weather',(req,res)=>{
           
           if(!req.query.address)
           {
               return res.send({
                   error:'address Not provided'
               })
           }

           geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

            if(error)
            {
                return res.send(
                    {
                        error
                    }
                )
            }

            forecast(latitude,longitude,(error,forecast)=>{
                if(error)
                {
                    return res.send({
                        error
                    })
                }

                res.send({
                    location,
                    forecast,
                    address: req.query.address
                })
            })

           })

            // res.send({
            //     forecast: 'sexy',
            //     location: 'ahmedabad',
            //     address: req.query.address,
            // })
            
        })
    

        app.get('/products',(req,res)=>{

                if(!req.query.search)
                {
                  return  res.send({
                        error: 'You must provide a search term'
                    })
                }
            res.send({
                products:[]
            })

            console.log(req.query.search)
        })  


    app.get('/help/*',(req,res)=>{
        res.render('404page',{error:"help article no found",name: "Amitvikram Dwivedi",title:"404"})
  
    
    })


app.get('*',(req,res)=>{
    res.render('404page',{error:"Page Not Found",name: "Amitvikram Dwivedi",title:"404"})


})

    app.listen(3000,()=>{
        console.log('server is up on port 3000')
    })





















    // app.get('',(req,res)=>{
        //     res.send('<html><h1>Weather </h1>   </html>')
        // }) this will no longer run


        // app.get('/help',(req,res)=>{
        //     res.send([{
        //         name:'Andrew',
        //         age:27
        //     },
        //     {
        //         name:'dwivedi',
        //         age:66
        //     },
        // ])
            
        // })


        // app.get('/about',(req,res)=>{
        //     res.send('<h1>About Page </h1>')
            
        // }) 
        // no longer needed coz we are serving the exoress .staic :)