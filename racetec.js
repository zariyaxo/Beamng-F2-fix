angular.module('gaugesScreen', [])
.controller('GaugesScreenController', function($scope, $window) {
  var unit = null;
  $scope.data = {}
  // overwriting plain javascript function so we can access from within the controller
  $window.setUnits = (data) => {
    unit = data.unitType;
  }
  
  $window.updateData = (data) => {
    $scope.$evalAsync(function() {
	
	$scope.data.speedVal = "Bork"
	$scope.data.gear = "Bork"
	$scope.data.ripems = "Bork"
		

    if (data.gear === -1) {
		$scope.data.gear = "R";
    }
    else if (data.gear === 0) {
		$scope.data.gear = "N";
    }
    else {
		$scope.data.gear = data.gear;
    }

	$scope.data.ripems = data.ripems;

    $scope.data.time = data.time;

      // checking if metric gauge cluster is being used
    if (unit === "metric") {
		$scope.data.speedVal = (data.speed * 3.6).toFixed(0);
        $scope.data.speedUnit = "km/h";
		
        $scope.data.oilTempVal = data.oiltemp
		$scope.data.tempUnit = "C";
		
        $scope.data.fuelQty = Math.floor(data.fuel);
        $scope.data.fuelUnit = "L";
		
		
    }
    else {
        $scope.data.speedVal = (data.speed * 2.23694).toFixed(0);
		$scope.data.speedUnit = "mph";
		
        $scope.data.oilTempVal = (data.oiltemp * 1.8 + 32).toFixed(0);
		$scope.data.tempUnit = "F";
		
        $scope.data.fuelQty = Math.floor(data.fuel / 3.785 *10) /10;
        $scope.data.fuelUnit = "Ga.";
		
    }
    }
	)
 }
});    