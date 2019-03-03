angular.module('learn2earn')
.controller('contactCtlr', function($scope, $filter){
  console.log('welcome to home controller');
  
  
  var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(12.8935884,77.6284463),
        mapTypeId: google.maps.MapTypeId.CITY
     };
     var map = new google.maps.Map(document.getElementById('contactUsmap'), mapOptions);
     var infoWindow = new google.maps.InfoWindow();
      
      var officeAddress = {
        city : 'learn2earnbyrajnish',
        desc : '#11, M M Residency, Near- Mother Teresa Public High School, Hongasandra Road, 9th main, Garvebhavi Palaya, Bangalore, Pin code - 560068, Karnataka',
        lat : 12.8935359,
        long : 77.6284674
      };
      var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open(map, marker);
        });
        
        //$scope.markers.push(marker);
        
      }
      createMarker(officeAddress);
    
  
});