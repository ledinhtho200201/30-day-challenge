var content = document.querySelector('.content')
var search = document.querySelector('.search'); 
var city = document.querySelector('.city'); 
var country = document.querySelector('.country'); 
var value = document.querySelector('.value'); 
var shortDesc = document.querySelector('.short-desc'); 
var visibility = document.querySelector('.visibility span'); 
var wind = document.querySelector('.wind span'); 
var sun = document.querySelector('.sun span'); 
var body = document.querySelector('body')

async function changeWhetherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=299ca91f3342c2ad649a5b9507a92433
    `

    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data)
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + ' (%)'
        TimeRanges.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'hot')
        if(temp <= 25){
        body.setAttribute('class', 'cool')
        }
        if(temp <= 22){
            body.setAttribute('class', 'warm')
        }
        if(temp <= 19){
            body.setAttribute('class', 'cold')
        }

    }else{
        content.classList.add('hide')
    }
    

    
}

search.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let capitalSearch = search.value.trim();
        changeWhetherUI(capitalSearch);
    }
})

changeWhetherUI('Ha noi')
