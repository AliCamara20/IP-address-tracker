const submitForm = document.getElementById("searchBar");
const inputField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".submitBtn")
const ipInfoContainer = document.querySelector(".ip-info");
const apiKey = 'at_p6bFgeiqJI8sm8ruVZqZghv7szbJh'
async function getLocation(ipAddress = ''){
    try{

        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        console.log(response);
        const data = await response.json();
        console.log(data);

        ipInfoContainer.innerHTML = `
          <li class = "info">
            <p class = "info-title">ip address</p>
            <h2 class = "info-detail">${data.ip}</h2>
          </li>

          <li class = "info">
            <p class = "info-title">location</p>
            <h2 class = "info-detail">${data.location.region}</h2>
          </li>

          <li class = "info">
            <p class = "info-title">time zone</p>
            <h2 class = "info-detail">${data.location.timezone}</h2>
          </li>

          <li class = "info">
            <p class = "info-title">isp</p>
            <h2 class = "info-detail">${data.isp || 'Unknown'}</h2>
          </li>
        `
        /*
        let ipInfo = document.createElement("li");
        ipInfo.classList.add("info");
        
        let ipInfoTitle = document.createElement("p");
        ipInfoTitle.classList.add("info-title");
        ipInfoTitle.innerText = "IP ADDRESS"
        let ipInfoDetail = document.createElement("h2");
        ipInfoDetail.classList.add("info-detail");
        ipInfoDetail.innerText = data.ip;
    
        ipInfo.appendChild(ipInfoTitle);
        ipInfo.appendChild(ipInfoDetail);
        ipInfoContainer.appendChild(ipInfo);
    
        let ipInfo2 = document.createElement("li");
        ipInfo2.classList.add("info");
    
        let ipInfoTitle2 = document.createElement("p");
        ipInfoTitle2.classList.add("info-title");
        ipInfoTitle2.innerText = "LOCATION"
        let ipInfoDetail2 = document.createElement("h2");
        ipInfoDetail2.classList.add("info-detail");
        ipInfoDetail2.innerText = data.location.region;
    
        ipInfo2.appendChild(ipInfoTitle2);
        ipInfo2.appendChild(ipInfoDetail2);
        ipInfoContainer.appendChild(ipInfo2);
    
    
        let ipInfo3 = document.createElement("li");
        ipInfo3.classList.add("info");
    
        let ipInfoTitle3 = document.createElement("p");
        ipInfoTitle3.classList.add("info-title");
        ipInfoTitle3.innerText = "time zone"
        let ipInfoDetail3 = document.createElement("h2");
        ipInfoDetail3.classList.add("info-detail");
        ipInfoDetail3.innerText = data.location.timezone;
    
        ipInfo3.appendChild(ipInfoTitle3);
        ipInfo3.appendChild(ipInfoDetail3);
        ipInfoContainer.appendChild(ipInfo3);
    
        
        let ipInfo4 = document.createElement("li");
        ipInfo4.classList.add("info");
    
        let ipInfoTitle4 = document.createElement("p");
        ipInfoTitle4.classList.add("info-title");
        ipInfoTitle4.innerText = "isp"
        let ipInfoDetail4 = document.createElement("h2");
        ipInfoDetail4.classList.add("info-detail");
        ipInfoDetail4.innerText = data.isp || 'Unknown';
    
        ipInfo4.appendChild(ipInfoTitle4);
        ipInfo4.appendChild(ipInfoDetail4);
        ipInfoContainer.appendChild(ipInfo4);
        */
        
        

    }

    

    catch(err){
        ipInfoContainer.innerHTML = "";
        let  errorMessage  = document.createElement("p");
        errorMessage.innerHTML = err.message;
        ipInfoContainer.appendChild(errorMessage);
    }


    
    
    


}

 
getLocation();
getGeoLocation();

submitBtn.onclick = function(e){
    alert('Working');
    e.preventDefault();
    ipInfoContainer.innerHTML = "";
    getLocation(inputField.value);
}

function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

function showPosition(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);
}


function getLocationOnMap(data){
    var latitude = data.location.lat;
    var longitude = data.location.lat;
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);
}
