// console.log('client side js is loaded')


// fetch('http://puzzle.mead.io/puzzle').then((response)=>{

// response.json().then((data)=>{
//     console.log(data)
// })


// })

const url='http://api.weatherstack.com/current?access_key=b3a0ed9066d9940295a7f9886e25dc4e&query=Ahmedabad&units=m'
const url2='http://localhost:3000/weather?address=Ahmedabad' 


const weatherForm=document.querySelector('form')
const searchelement=document.querySelector('input')
const messageOne=document.querySelector('#para1')
const messageTwo=document.querySelector('#para2')

// messageOne.textContent='From javascript'

const getdata=(url2)=>{
fetch(url2).then((response)=>
{
response.json().then((data)=>{
   if(data.error)
   {        messageOne.textContent=data.error;
        // console.log(data.error)
   }
   else
   {
//    console.log(data.location)
//    console.log(data.forecast)
   messageOne.textContent=data.location;
   messageTwo.textContent=data.forecast;

   }
})
})
}


// console.log("tatti "+weatherForm)

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log('testing!!')
    const location=searchelement.value


    // console.log(location)

    messageOne.textContent='Loading...'

    messageTwo.textContent=''

    const url='http://localhost:3000/weather?address='+encodeURIComponent(location);
    getdata(url)
})