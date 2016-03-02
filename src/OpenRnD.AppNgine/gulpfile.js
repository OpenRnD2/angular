/// <binding BeforeBuild='scripts' />

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var debugFileName = 'appngine.debug.js';
var releaseFileName = 'appngine.js'

var debugProject = typescript.createProject('tsconfig.json', {
    removeComments: true,
    sortOutput: true,
    outFile: debugFileName
});

var releaseProject = typescript.createProject('tsconfig.json', {
    removeComments: true,
    sortOutput: true,
    outFile: releaseFileName
});

var debugOut = 'out/debug';
var releaseOut = 'out/release';

gulp.task('scripts', function () {

    var debugResults = debugProject.src()
        .pipe(sourcemaps.init())
        .pipe(typescript(debugProject));
    var releaseResults = releaseProject.src()
        .pipe(typescript(releaseProject));

    debugResults.js
        .pipe(concat(debugFileName))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(debugOut));

    releaseResults.js
        .pipe(concat(releaseFileName))
        .pipe(gulp.dest(releaseOut))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(releaseOut));

    debugResults.dts
        .pipe(gulp.dest(debugOut));
    releaseResults.dts
        .pipe(gulp.dest(releaseOut));
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch(['**/*.ts', 'tsconfig.json'], ['scripts']);
});
