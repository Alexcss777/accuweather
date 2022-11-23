//llamadas al api
export async function getForecast(){
    var API_KEY='PIAcz5bZ3LStSpLy1GsG10hXdqdQcSD3';
    const res='http://dataservice.accuweather.com/forecasts/v1/daily/5day/241912?apikey='+API_KEY;
   // const data=await res.json();

    //const climas=data.DailyForecasts;
    return await fetch(res)
        .then( (response) => { return response.json(); })
        .catch( (response) => { console.log(response); })
    
    
    //console.log({data,climas});

 

    

}