var gulp = require('gulp');
var aglio = require('aglio');
var drakov = require('drakov');

gulp.task('aglio', function() {
  aglio.renderFile('api.md', 'index.html', {
    themeVariables: 'Flatly'
  }, function (err, warnings) {
    if (err) {
      return console.log(err);
    }
    if (warnings) {
      return console.log(warnings);
    }
  });
});

gulp.task('drakov', function() {
  drakov.run({
    sourceFiles: 'api.md',
    serverPort: 9001
  }, function(){});
});

gulp.task('default', ['aglio', 'drakov'], function() {
  console.log('done :)');
});
