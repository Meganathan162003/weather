const inp = document.getElementById("text");
const btn = document.getElementById('btn');
const temp= document.getElementById('temp');
const city= document.getElementById('city');
const humidity= document.getElementById('humidity');
const wind= document.getElementById('wind');
const img= document.getElementById('img');
const section= document.querySelector(".sec");
const error = document.querySelector(".error")





btn.addEventListener("click",()=>{
    let text = inp.value;
    if(text==""||text==null){
     alert("please the city");
    }else{

        const api= `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=0cec135fc3003bee4a553814b6328a7e&units=metric`;
               async function run(){
                const reponse = await fetch(api);
                var data = await reponse.json();
                console.log(data);

           if(data.cod == 404){
                error.classList.remove("class","d-none");
                section.classList.add("class","d-none");
            }else{
                error.classList.add("class","d-none");
                section.classList.remove("class","d-none");
              temp.innerHTML=Math.round(data.main.temp)+"°C";
              city.innerHTML=data.name;
              humidity.innerHTML=data.main.humidity+"% Humidity";
              wind.innerHTML=data.wind.speed+"km/h wind speed";

            if(data.weather[0].main=="Clouds"){
            img.src="clouds.png";
            }else if (data.weather[0].main=="Clear") {
                img.src="clear.png";
            }else if(data.weather[0].main=="Rain"){
                img.src="rain.png";
            }else if(data.weather[0].main=="Drizzle"){
                img.src="drizzle.png";
            }else if (data.weather[0].main=="Mist") {
                img.src="mist.png";
            } 
                
}
  }
  run(); 
    }
})


