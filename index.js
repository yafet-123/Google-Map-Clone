mapboxgl.accessToken = 'pk.eyJ1IjoieWFmZXQxMjMiLCJhIjoiY2wxY2htaDU5MDBkdjNkbjNrMGg0ZHZ0NiJ9.sDQFOiemuuRTUhi0ZU7k1Q';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  	enableHighAccuracy: true,
  	timeout: 5000,
  	maximumAge: 0
});

function successLocation(position){
	console.log(position)
	setMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation(){
	setMap([40.4897,9.1450])
}
function setMap(center){
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/streets-v11', // style URL
		center: center, // starting position [lng, lat]
		zoom: 15, // starting zoom
		projection: 'equalEarth' // display the map as a 3D globe
	});
	map.on('style.load', () => {
		map.setFog({}); // Set the default atmosphere style
	});

	map.addControl(
		new MapboxDirections({
			accessToken: mapboxgl.accessToken
		}),
		'top-left'
	);

	map.addControl(new mapboxgl.NavigationControl());
}

