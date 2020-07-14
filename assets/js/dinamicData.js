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
      objetVideo = {
        height: '390',
        width: '640',
        videoId: res[param].urlV1
      }
      objetVideo2 = {
        height: '390',
        width: '640',
        videoId: res[param].urlv2
      }
      objetVideo3 = {
        height: '390',
        width: '640',
        videoId: res[param].urlv3
      }
      console.log(res[param].logo)
      let tag = document.getElementById("logo")
      tag.setAttribute("src", res[param].logo);
      let tag2 = document.getElementById("cat")
      tag2.setAttribute("src", res[param].urlCatalog);
      
    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //CREAMOS LOS PLAYER DE LOS VIDEOS QUE AÑADIREMOS AL SLIDE
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', objetVideo);
      player2 = new YT.Player('player2', objetVideo2);
      player3 = new YT.Player('player3', objetVideo3);
    }

    function pauseVideo() {
      player.pauseVideo();
      player2.pauseVideo();
      player3.pauseVideo();
    }