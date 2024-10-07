const list = document.getElementById('list')

if(list != undefined){
fetch('https://flight.pequla.com/api/flight/list')
.then(response=>response.json())
.then(data=>{
    data.forEach(flight => {
        const li = document.createElement('li')
        li.setAttribute('flight-id', flight.id)
        li.innerText = `${flight.destination} [${flight.flightKey}]`
        list.appendChild(li)
    });    
})

}