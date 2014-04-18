angular.module('app', ['ui.bootstrap', 'kendo.directives' ]);
angular.module('app').controller('AppCtrl', function($scope) {
  $scope.title = "Who is next";
  $scope.io = io.connect();
  $scope.admitted = true;

  $scope.addVote = function(name)
  {
	if($scope.admitted)
	{
	   $scope.io.emit('vote', { name: name }) ;
	   $scope.admitted = false;
	}
  }
  $scope.io.on('voted', function(data) 
  {
	$scope.scores = data;
	$("#chart").kendoChart({
          series: [{
            type: "pie",
            categoryField: "type",
            data: [
              { value: data.gennaro, type: "Gennaro Amendola" },
              { value: data.dario, type: "Dario Carlomagno" },
              { value: data.cincis, type: "Gianluca Cincis" },
              { value: data.loi, type: "Domenico Loi" },
            ]
          }]
        });
	console.log($scope.scores);
  });

});
