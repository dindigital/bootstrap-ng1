/**
 * @description
 * Módulo responsável pelos filtros do app.
 */

var app = angular.module('filters.app', []);

/**
 * @description
 * Retorna um texto plano.
 */

app.filter('htmlToPlaintext', function () {
    return function(text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});
