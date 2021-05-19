import gulp from 'gulp'
import browserSync from "browser-sync"

let config = {
    paths: {
        scss: './dev/scss/**/*.scss',
        html: './done/index.html',
        css: './done/css/style.css'
    },
    output: {
        cssName: 'min.css',
        path: './done'
    },
    isDevelop: true
}

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    })
    // gulp.watch(config.paths.scss, ['scss']);
    gulp.watch(config.paths.html).on('change', browserSync.reload)
    gulp.watch(config.paths.css).on('change', browserSync.reload)
})

gulp.task('default', gulp.parallel('serve'))
