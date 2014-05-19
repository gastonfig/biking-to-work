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

	// var distanceAnimation = new countUp("distance-value", 0, 4.52, 2, 1.5, options),
	// 	speedAnimation = new countUp("speed-value", 0, 17.52, 2, 1.5, options),
	// 	elevationAnimation = new countUp("elevation-value", 0, 325, 0, 1.5, options),
	// 	timeAnimation = new countUp("time-value", 0, 15.28, 2, 1.5, timeOptions);


	// distanceAnimation.start();
	// timeAnimation.start();
	// speedAnimation.start();
	// elevationAnimation.start();

	var elevationData = {
	  labels : [" "," "," "," "," "],
		datasets : [
			{
				fillColor : "#e1e3de",
				strokeColor : "#e1e3de",
				data : [-39,30,-27,9,-22]
			}
	     
		]
	}

	var speedData = {
	  labels : [" "," "," "," "," "],
		datasets : [
			{
				fillColor : "#e1e3de",
				strokeColor : "#e1e3de",
				data : [16.54,20.95,19.30,20.72,10.97]
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
	  scaleGridLineColor : 'transparent',
	  bezierCurve : false
	};

	var elevationChart = $("#elevation-chart").get(0).getContext("2d");
	new Chart(elevationChart).Line(elevationData, options);

	var speedChart = $("#speed-chart").get(0).getContext("2d");
	new Chart(speedChart).Line(speedData, options);
});