import{getForecast} from './info/services.js'



window.addEventListener('load', () => { init(); })
//init
function init() {
    //location ID
    var key=241912;
    load();
}
//enviar ID code
function load(code) {
    getForecast(code)
        .then( (response) => { getInfo(response); })
}


async function getInfo(data){
  
    console.log({data});


    const climas=data.DailyForecasts;
    let template = document.getElementById('template-forecast').content;
    let fragment = document.createDocumentFragment();

    climas.forEach(clima => {
       let clim=(clima.Temperature.Maximum.Value-32)*(5/9);
       let clim2= Math.trunc(clim);
        template.querySelector('#image').src = clima.Day.Icon; //image
        template.querySelector("#date").textContent = clima.Date; //track name
        template.querySelector("#temp").textContent = clim2;
        let clone = document.importNode(template, true); //clone fragment
        fragment.appendChild(clone); //add clone to fragmentsrc
        
       
      

    });

    document.getElementById('content').appendChild(fragment);
   

}

