(function (){
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function ($scope){

        $scope.name = "";
        $scope.NameValue = 0;
        
        $scope.displayNameValue = function (){
            var StringValue = CalculateNameValue($scope.name);
            $scope.NameValue = StringValue;
        };
        
        function CalculateNameValue(string)
        {
            var value = 0;
            for(var i = 0; i < string.length; i++){
                value = value + string.charCodeAt(i);
            }
            return value;
        }
    });
})();