/**
 * @description
 * Exemplo de diretiva.
 */

var app = angular.module('directives.spinner', []);

app.directive('ddSpinner', function () {
    return {
        'restrict' : 'AEC',
        'templateUrl' : '/resources/assets/tpl/directives/spinner.html',
        'scope' : {
            'isLoading' : '='
        }
    }
});