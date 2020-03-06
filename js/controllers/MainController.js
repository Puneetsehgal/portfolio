/**
 * Created by Lucky on 28/09/2015.
 */

app.controller('MainController', ['$scope',  '$interval',  function($scope, $interval) {
    $scope.refresh = function() {
        var d = new Date();
        var h = d.getHours();
        if (h >= 6 && h < 16) {
            $scope.imageName = 'morning';
            $scope.nameColor = '#161616';
        }
        else {
            $scope.imageName = '';
            $scope.nameColor = '#efefef';
        }

        if (h >= 19 || h < 6) {
            $scope.timeZone = 'night';
        }
        else if (h >= 16 && h < 19) {
            $scope.timeZone = 'evening';
        }
        else {
            $scope.timeZone = 'day';
        }
    };
    $scope.intervalPromise = $interval(function(){
        $scope.refresh();
    }, 10);

    // initial load of data
    $scope.refresh();

}]);