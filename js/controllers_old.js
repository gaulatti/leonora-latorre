var phonecatControllers = angular.module('condoControllers', []);
phonecatControllers.controller('InicioCtrl', ['$scope',
  function ($scope) {
    // Inicializar Mapa
    var map = L.map('map').setView([-23.59363, -70.3954], 17);

    L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);
    var popup = L.popup({closeButton: false, keepInView: true})
    .setContent('<p><b>El Oro 8275</b><br />Antofagasta</p>');
    L.marker([-23.59363, -70.3954]).addTo(map).bindPopup(popup)
    .openPopup();
  }]);

phonecatControllers.controller('QuienesSomosCtrl', ['$scope',
  function ($scope) {}]);

phonecatControllers.controller('DocumentosCtrl', ['$scope',
  function ($scope) {

  }]);

phonecatControllers.controller('VisorCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    if(isMobile.any() || checkVersion()) {
      window.location = "./files/" + $routeParams.idDocumento + ".pdf";
    } else {
      var success = new PDFObject({ url: "./files/" + $routeParams.idDocumento + ".pdf" }).embed("pdf");
    }
  }]);

phonecatControllers.controller('GaleriaCtrl', [
  function() {
    $("article#ListaFotos a").click(function() {
      var p = $( "article#Galeria" );
      var position = p.offset();
      jQuery('html, body').animate({scrollTop: position.top}, 200);
      console.log(position.top);

      var img = $(this).children().get(0);
      $("#Galeria > figure").css('background-image', 'url(' + img.src + ')');
      return false;
    });
    
  }]);

phonecatControllers.controller('ContactoCtrl', ['$scope',
  function($scope) {    
    // Inicializar Mapa
    var map = L.map('map').setView([-23.59363, -70.3954], 17);

    L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
    	maxZoom: 18,
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);

    L.marker([-23.59363, -70.3954]).addTo(map);
  }]);

/* Hacks que no corresponden a ninguna entidad */
$("nav > .navbar > article.navbar-collapse > ul > li").click(function() {
  $("nav > .navbar > article.navbar-collapse > ul > li").removeAttr('class');
  $(this).toggleClass('active');
});

$(function(){ 
 var navMain = $("article.collapse");
 navMain.on("click", "a", null, function () {
   navMain.collapse('hide');
 });
});

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function checkVersion()
{
  var msg = false;
  var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
    if ( ver >= 8.0 ) 
      msg = true;
    else
      msg = true;
  }
  return msg ;
}
