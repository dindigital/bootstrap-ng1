/**
 * @description
 * Exemplo de serviço
 */

var app = angular.module('services.ramdom.user', []);

app.service('ramdomUserService', function ($q, $http, __env) {
    var self = {
        'get': function () {
            var d = $q.defer();

            $http.get(__env.URL_API + 'api')
                .success(function (res) {
                    d.resolve(res);
                })

                .error(function (err) {
                    d.reject(err);
                });

            return d.promise;
        }
    };

    return self;
});