// async await
// fetch
// axios
//then



// pending - ожидание
// rejected - error
// resolved - успешно

const row = document.querySelector(".row")
// fetch(`https://jsonplaceholder.typicode.com/todos/`)
// .then(data => data.json())
// .then(result => {
//     console.log(result)
//     result.map(el =>{
//         row.innerHTML += `<div class="col-4">
// <h1>${el.id}</h1>
// <h2>${el.title}</h2>
// <div/>`
//     })
//         .catch((e)=>{
//             console.log(e,`error`)
//         })
// })

fetch(`https://restcountries.com/v3.1/all`)
.then(data => data.json())
.then(result =>{
    console.log(result.slice(0,20))
    result.map(el =>{
        row.innerHTML +=`<div class="col-3" style="border:2px solid black;">
<img src="${el.flags.png}" alt="" style="width: 250px;height: 150px;padding: 20px 0">
<h1 class="py-2">${el.name.common}</h1>
<h2>city : ${el.capital}</h2>
<h3>area : ${el.area} km2</h3>
<h4>population : ${el.population}</h4>
<a href="${el.maps.googleMaps}" target="_blank" style="font-size:15px;color: white;text-decoration: none">${el.maps.googleMaps}</a>
<div/>`
    }).catch((e)=>{
        console.log(e , `error`)
    })
})


// fetch(`https://restcountries.com/v3.1/all`)
// .then(data => data.json())
// .then(result =>{
//     console.log(result)
//     result.map(el => {
//         row.innerHTML +=`<div>
//
// </div>`
//     })
// })