console.log("hi")
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

function req() {

  app.appendChild(container)

  var request = new XMLHttpRequest()
  request.open('GET', 'https://spotapi.arbee.repl.co/', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      const spotify = document.createElement("div");
      spotify.setAttribute("class", "spotify");
      const song = document.createElement('img');
      song.src = data.image;
      const title = document.createElement('h1');
      title.innerHTML = data.title;
      spotify.appendChild(song);
      spotify.appendChild(title);

      app.innerHTML = ""
      app.appendChild(spotify);


    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }

  request.send()
}
var intervalId = window.setInterval(function () {
  req();
}, 1000);