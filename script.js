 const getList = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica") 
      .then((rawAlbum) => rawAlbum.json()) 
      .then((jsonAlbum) => {
        renderList(jsonAlbum.data)
      })
      .catch((err) => renderError(err))
  }
  const renderList = (fetchedList) => {
    let container = document.getElementById("lists")
    for (let i = 0; i < fetchedList.length; i++) {
        const singleList = fetchedList[i]
    container.innerHTML += `
        <div class='col col-3'>
            <div class="card">
                <img src="${singleList.album.cover_big}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${singleList.title}</h5>
                </div>
            </div>
        </div>`
  }
}

const renderError = (error) => {
    {
      let container = document.querySelector(".container")
      container.innerHTML = `<div class="alert alert-danger" role="alert">
      ${error}
    </div>`
}
}

getList()


const getList2 = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=daft punk") 
    .then((rawAlbum) => rawAlbum.json()) 
    .then((jsonAlbum) => {
      renderList2(jsonAlbum.data)
    })
    .catch((err) => renderError2(err))
}
const renderList2 = (fetchedList) => {
  let container = document.getElementById("lists")
  for (let i = 0; i < fetchedList.length; i++) {
      const singleList = fetchedList[i]
  container.innerHTML += `
      <div class='col col-3'>
          <div class="card">
              <img src="${singleList.album.cover_big}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${singleList.title}</h5>
              </div>
          </div>
      </div>`
}
}

const renderError2 = (error) => {
  {
    let container = document.querySelector(".container")
    container.innerHTML = `<div class="alert alert-danger" role="alert">
    ${error}
  </div>`
}
}

getList2()



const getList3 = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pink floyd") 
    .then((rawAlbum) => rawAlbum.json()) 
    .then((jsonAlbum) => {
      renderList3(jsonAlbum.data)
    })
    .catch((err) => renderError3(err))
}
const renderList3 = (fetchedList) => {
  let container = document.getElementById("lists")
  for (let i = 0; i < fetchedList.length; i++) {
      const singleList = fetchedList[i]
  container.innerHTML += `
      <div class='col col-3'>
          <div class="card">
              <img src="${singleList.album.cover_big}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${singleList.title}</h5>
              </div>
          </div>
      </div>`
}
}

const renderError3 = (error) => {
  {
    let container = document.querySelector(".container")
    container.innerHTML = `<div class="alert alert-danger" role="alert">
    ${error}
  </div>`
}
}

getList3()
