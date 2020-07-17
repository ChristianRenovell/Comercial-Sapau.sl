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
promise.then(res => {
  let tag = document.getElementById("logo")
  tag.setAttribute("src", res[param].logo);
  let tag2 = document.getElementById("cat")
  tag2.setAttribute("src", res[param].urlCatalog);
  

  for (let i = 0; i < res[param].urls.length; i++) {
    videoId[i] = res[param].urls[i]
  }
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//CREAMOS LOS PLAYER DE LOS VIDEOS QUE AÑADIREMOS AL SLIDE
function onYouTubeIframeAPIReady() {
 
  let activeVideo;
 
//resto de players
  for (let i = 0; i < videoId.length; i++) {
    if(i == 0){
      activeVideo = "active"
    } else{
      activeVideo = ""
    }
    let carrousel = document.getElementById("content-itens-list");
    let carouselIten = document.createElement("div");
    carrousel.appendChild(carouselIten);
    carouselIten.setAttribute("class","carousel-item "+activeVideo);
    let divembed = document.createElement("div");
    carouselIten.appendChild(divembed);
    divembed.setAttribute("class","embed-responsive embed-responsive-16by9");
    let divVideo = document.createElement("div");
    divembed.appendChild(divVideo);    
    divVideo.setAttribute("id", "player"+i);
   
    player = new YT.Player('player'+i, {
      height: '390',
      width: '640',
      videoId: videoId[i]
    });
  }
  
}

function pauseVideo() {

  player.pauseVideo();
 
}