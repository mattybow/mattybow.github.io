import gulp from 'gulp';
import runSeq from 'run-sequence';
import exec from 'gulp-exec';
import child from 'child_process';

gulp.task('jekyll-watch',() =>{
  child.exec('JEKYLL_ENV=DEV jekyll watch');
});

gulp.task('default',() => {
  runSeq('jekyll-watch');
});
