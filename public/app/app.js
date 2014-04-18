angular.module('app', ['ui.bootstrap', 'kendo.directives' ]);
angular.module('app').controller('AppCtrl', function($scope) {
  $scope.title = "Who Is Next";
  $scope.io = io.connect();

  $scope.addVote = function(name)
  {
   $scope.io.emit('vote', { name: name }) ;
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
