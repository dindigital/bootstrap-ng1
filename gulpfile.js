'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/**
 * @description
 * Concatena arquivos internos do app
 */

gulp.task('scripts', function () {
    return gulp.src([
        './resources/assets/js/app.js',
        './resources/assets/js/app.config.js',
        './resources/assets/js/app.constants.js',
        './resources/assets/js/directives/**/*.js',
        './resources/assets/js/controllers/**/*.js',
        './resources/assets/js/services/**/*.js',
        './resources/assets/js/filters/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./assets/js'));
});

/**
 * @description
 * Concatena arquivos externos
 */

gulp.task('concatjs', function () {
    return gulp.src([
        './lib/angular/angular.min.js',
        './lib/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./assets/js'));
});

/**
 * @description
 * Watch de todos os arquivos JS internos do app
 */

gulp.task('watch', function () {
    gulp.watch('./resources/assets/js/**/*.js', ['scripts']);
});

/**
 * @description
 * Tarefa default
 */

gulp.task('default', ['scripts', 'concatjs']);
