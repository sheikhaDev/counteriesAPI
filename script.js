let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => { 
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true` ; //rest country api
    console.log(finalURL);

    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
        console.log(data[0].flags.svg);
        result.innerHTML = `

      
        <div class="card" background-image: url("${data[0].flags.svg}")>
        <div class="card text-center">
        <div class="card-header">
        <h5 class="card-title"> ${data[0].name.common}</h5></div>
        <img src="${data[0].flags.svg}" class="card-img-top" alt="...">
        <div class="card-body">
          
          <h6> Capital:  ${data[0].capital[0]}</h6> 
          <p class="card-text">
          <p> Continent:  ${data[0].continents[0]} <p/>
          <p> Population:  ${data[0].population} <p/>
          <p> Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} 
          -${Object.keys(data[0].currencies)[0]} <p/>
            
          <p> Common languages: ${Object.values(data[0].languages)
                    .toString()
                    .split()
                    .join(",")}
                    <p>

          </p>
          </div>
        </div>
      </div>
      `;
    })
    .catch(() =>{
             if(countryName.length == 0){
                result.innerHTML = `<h3>can not be empty</h3>`
             }
             else{
                result.innerHTML= `<h3> Plase Enter a valid country.<h3>`
             }
            
    })
    
});