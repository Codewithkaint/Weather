let btn=document.getElementById('search')
let input=document.getElementById('inp_box')
let temp=document.getElementById('temp')
let city=document.getElementById('city')
let info=document.getElementById('temp_info')
let temp_status=document.getElementById('temp_status')

let mood=''
let b=273.0
btn.addEventListener('click',searchFun)
async function searchFun(){
    let check=input.value
    if(check===''){
        city.innerText='Not Entered Yet'
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${check}&appid=b577ff7d70a0063037a7044bd61e9da5`
            let response=await fetch(url)
            let jsonObj=await response.json()
            let jsonAray=[jsonObj]
            city.innerText=`${jsonAray[0].name},${jsonAray[0].sys.country}`
            let tot=parseInt(jsonAray[0].main.temp)
            let presentTemp=tot-b
            temp.innerHTML=`${presentTemp} <sup>0</sup>C </p>`           
            mood=jsonAray[0].weather[0].main   
            console.log(mood)
            if(mood==='Clear'){
                temp_status.innerHTML='<i class="fa-solid fa-sun" style="color: yellow;"></i> '
            }
            
            else if(mood==='Clouds'){
                temp_status.innerHTML='<i class="fa-solid fa-cloud" style="color: blue;"></i> '
            }
            else{
              
                temp_status.innerHTML='<i class="fa-solid fa-cloud-showers-heavy" style="color:blue"></i>'
            }
            temp.classList.remove('hide')
           temp_status.classList.remove('hide')
            
    }catch{
        city.innerText='Enter Valid City Name'

    }
    }

}