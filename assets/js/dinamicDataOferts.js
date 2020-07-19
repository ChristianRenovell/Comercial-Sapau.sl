var param = window.location.search.substr(1);
const promise = new Promise((resolve, reject) => {
  var requestURL = 'https://raw.githubusercontent.com/ChristianRenovell/Comercial-Sapau.sl/master/oferts.json';
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