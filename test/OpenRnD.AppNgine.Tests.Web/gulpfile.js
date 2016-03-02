/// <binding AfterBuild='default' />

var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('../../src/OpenRnD.AppNgine/out/debug/out.debug.js').pipe(gulp.dest('wwwroot'));
});