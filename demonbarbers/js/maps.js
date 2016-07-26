function initialize() {
    var myLatlng = new google.maps.LatLng(51.400140, -3.288225);
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        disableDefaultUI: true,
        center: myLatlng,
        draggable: false,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
    } 
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });              
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);