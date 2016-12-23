/**
 * @description
 * Exemplo de controller.
 *
 * Obs.: opte pelo uso de diretivas :)
 */

var app = angular.module('controllers.user', []);

app.controller('UserCtrl', function ($scope, ramdomUserService) {
    var vm = this;

    vm.user = {};
    vm.isLoading = true;

    ramdomUserService.get().then(
        function (res) {
            vm.user = res;
            vm.isLoading = false;
        },
        function (err) {
            vm.isLoading = false;
            console.error('Erro ao carregar usuário', err);
        }
    );
});