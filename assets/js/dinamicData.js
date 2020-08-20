let videoId = [];
var param = window.location.search.substr(1);
const promise = new Promise((resolve, reject) => {
  var requestURL = 'https://raw.githubusercontent.com/ChristianRenovell/Comercial-Sapau.sl/master/data.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    // variable de objeto json
    var datos = request.response;
    //almacenamos el json en una variable
    var res = datos;
    resolve(res)
  }
});
//carga el logo y el catalogo
promise.then(res => {
  let tag = document.getElementById("logo")
  tag.setAttribute("src", res[param].logo);
  let tag2 = document.getElementById("cat")
  console.log(res[param].urlCatalog, "este es el catalogo")
  tag2.setAttribute("src", res[param].urlCatalog);
  for (let i = 0; i < res[param].urls.length; i++) {
    videoId[i] = res[param].urls[i]
  }

});
//carga los videos
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//CREAMOS LOS PLAYER DE LOS VIDEOS QUE AÑADIREMOS AL SLIDE
function onYouTubeIframeAPIReady() {

  console.log(videoId)
  if(videoId===null){
    alert("recargo la pagina")
    location.reload();
  }

  player1 = new YT.Player('player1', {
    height: '390',
    width: '640',
    videoId: videoId[0]
  });

  player2 = new YT.Player('player2', {
    height: '390',
    width: '640',
    videoId: videoId[1]
  });

  player3 = new YT.Player('player3', {
    height: '390',
    width: '640',
    videoId: videoId[2]
  });

}

function stopVideo() {

  player1.stopVideo();
  player2.stopVideo();
  player3.stopVideo();

}


