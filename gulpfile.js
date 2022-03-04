const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('default', () => {
    nodemon({
        exec: 'cross-env NODE_ENV=development node ./src/application.js',
        ext: 'js html css',
        env: {
            'NODE_ENV': 'development'
        }
    })
})
