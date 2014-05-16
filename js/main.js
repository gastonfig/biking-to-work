$(document).ready(function(){
	var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.' 
	}

	var timeOptions = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : ':'  
	}

	var distanceAnimation = new countUp("distance-value", 0, 4.55, 2, 1.5, options),
		speedAnimation = new countUp("speed-value", 0, 13.42, 2, 1.5, options),
		elevationAnimation = new countUp("elevation-value", 0, 325, 0, 1.5, options),
		timeAnimation = new countUp("time-value", 0, 20.17, 2, 1.5, timeOptions);


	distanceAnimation.start();
	timeAnimation.start();
	speedAnimation.start();
	elevationAnimation.start();

	var elevationData = {
	  labels : [" "," "," "," "," "],
		datasets : [
			{
				fillColor : "#243742",
				strokeColor : "#273d47",
				data : [-35,28,-7,-13,-20]
			}
	     
		]
	}

	var speedData = {
	  labels : [" "," "," "," "," "],
		datasets : [
			{
				fillColor : "#243742",
				strokeColor : "#273d47",
				data : [17.19,18.16,16.83,18.29,16.93]
			}	     
		]
	}

	/*Line.defaults = {
	  scaleLineWidth : 1
	}*/

	var options = {
	  scaleShowLabels : false,
	  scaleShowGridLines : false,
	  scaleLineColor : 'transparent',
	  datasetStrokeWidth : 0,
	  pointDotRadius : 0,
	  scaleGridLineColor : 'transparent'
	};

	var elevationChart = $("#elevation-chart").get(0).getContext("2d");
	new Chart(elevationChart).Line(elevationData, options);

	var speedChart = $("#speed-chart").get(0).getContext("2d");
	new Chart(speedChart).Line(speedData, options);
});