function getTime(){
  var date = new Date
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}
async function main( time, ours, others ){
  time.innerHTML = getTime()
  var data = await (await fetch( "./tools.json" )).json()
  for( let our of data[ "原创" ] ){
    ours.innerHTML += `<div class="card" onclick="(window.location.href = '${loadstring(our.url, our)}')">
      <img class="avatar" src="${loadstring(our.icon || "css/default.png", our)}">
      <div class="name">${loadstring( our.name, our)}</div><br>
      <div class="info">
        ${loadstring(our.description, our)}
      </div>
    </div>`
  }
  for( let our of data[ "非原创" ] ){
    others.innerHTML += `<div class="card" onclick="(window.location.href = '${loadstring(our.url, our)}')">
      <img class="avatar" src="${loadstring(our.icon || "css/default.png", our)}">
      <div class="name">${loadstring(our.name, our)}</div>
      ${loadstring( our.description, our )}
    </div>`
  }
  setInterval( () => {
    time.innerHTML = getTime()
  }, 1000 )
}