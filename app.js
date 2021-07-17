  function countdown(){
const future = new Date('July 25, 2021 15:24:00').getTime()
const now = new Date().getTime()
const gap = future - now
console.log(gap)
//gap done

//define time
const second = 1000
const mitune = second * 60
const hour = mitune * 60
const day = hour *24

const Textday = Math.floor(gap/day)
const Texthour= Math.floor((gap%day)/hour)
const Textminute = Math.floor((gap%hour)/mitune)
const Textsecond = Math.floor((gap%mitune)/second)

document.querySelector('#days').innerHTML=Textday
document.querySelector('#hours').innerHTML=Texthour
document.querySelector('#minutes').innerHTML=Textminute
document.querySelector('#seconds').innerHTML=Textsecond

if(Textsecond==0&&Textminute==0&&Texthour==0&&Textday==0){
    
}
}
setInterval(countdown , 1000)