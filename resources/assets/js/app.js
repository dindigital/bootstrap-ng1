/**
 * @description
 * Dependências do app.
 */

'use strict';

var env = {};

// Import variables if present (from env.js)
if (window) {
    Object.assign(env, window.__env);
}

var app = angular.module('myapp', [
    'ui.router',
    'filters.app',
    'constants.app',

    'controllers.user',

    'directives.spinner',

    'services.ramdom.user'
]);