
import gulp from 'gulp'
import config from 'config'
import runSequence from 'run-sequence'
import webpack from 'webpack-stream'

import nib from 'nib'

//PostCSS
import mqpacker from 'css-mqpacker'
import base64 from 'postcss-inline-base64'
import cssnano from 'cssnano'

let browserSync = require('browser-sync').create()
let { folders: { source: source, dist: dist } } = config
let { nodemon, postcss, stylus, imageOptimization, plumber, notify, svgmin, tinypng, svgstore } = require('gulp-load-plugins')()

let imagesSource = [`${source}/images/**/*.jpg`, `${source}/images/**/*.gif`]
let othersSource = `${source}/others/**/*.*`
let fontsSource = `${source}/fonts/**/*.*`
let htmlSource = `${source}/templates/**/*.jade`
let svgSpriteSource = `${source}/images/svg/sprite/*.svg`
let svgSource = [`${source}/images/svg/**/*.svg`, `!${svgSpriteSource}`]

let svgMinConfig = [
    { convertStyleToAttrs: true },
    { moveGroupAttrsToElems: false },
    { removeUselessStrokeAndFill: false },
    { cleanupIDs: true },
    { removeComments: true },
    { moveGroupAttrsToElems: false },
    { convertPathData: { straightCurves: false } }
]

gulp.task('svg:optimize', () => (
    gulp
        .src(svgSource)
        .pipe(svgmin(svgMinConfig))
        .pipe(gulp.dest(`${dist}/images/svg/`))
))

gulp.task('svg:sprite', () => (
    gulp
        .src(svgSpriteSource)
        .pipe(svgmin(svgMinConfig))
        .pipe(svgstore())
        .pipe(gulp.dest(`${dist}/images/svg/`))
))

gulp.task('images:jpg', () => (
    gulp.src(imagesSource)
        .pipe(imageOptimization({
            optimizationLevel: 1,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(`${dist}/images/`))
))

gulp.task('images:png', () => (
    gulp.src(`${source}/images/**/*.png`)
        //.pipe(tinypng('TYLShla2f8RyFY5i0s-LHfSxenjvIv-V'))
        .pipe(gulp.dest(`${dist}/images/`))
))

gulp.task('css:create', () => (
    gulp.src(`${source}/css/style.styl`)
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(stylus({ use: nib() }))
        .pipe(postcss([base64({ baseDir: `${dist}/css/` }), mqpacker({ sort: true })]))
        .pipe(gulp.dest(`${dist}/css/`))
))

gulp.task('css:min', () => (
    gulp.src(`${dist}/css/**/*.css`)
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(`${dist}/css/`))
))

gulp.task('scripts', () => (
    gulp.src([`${source}/js/**/*.js`])
        .pipe(webpack(require('../webpack/production.js')))
        .pipe(gulp.dest(`${dist}/js/`))
))

gulp.task('nodemon', () => (
    nodemon({
        nodeArgs: ['--debug'],
        script: 'index.js'
    })
))


gulp.task('svg', () => (runSequence('svg:optimize', 'svg:sprite')))
gulp.task('css', () => (runSequence('css:create', 'css:min')))
gulp.task('images', () => (runSequence('images:jpg', 'images:png')))

gulp.task('fonts', () => (gulp.src(fontsSource).pipe(gulp.dest(`${dist}/fonts/`))))
gulp.task('others', () => (gulp.src(othersSource).pipe(gulp.dest(`${dist}/others/`))))
gulp.task('server:update', () => (browserSync.reload('/layout/css/style.css')))
gulp.task('server:reload', () => (browserSync.reload()))
gulp.task('server:start', () => (browserSync.init({ proxy: 'localhost:3000', port: 8000 })))



gulp.task('build', () => (runSequence('images', 'others', 'fonts', 'svg', 'css', 'scripts')))

gulp.task('watch', () => {

    runSequence('nodemon', 'server:start')

    gulp.watch(`${source}/css/**/*.styl`, () => (runSequence('css:create', 'server:update')))
    gulp.watch(imagesSource, () => runSequence('images'))
    gulp.watch(svgSource, () => runSequence('svg:optimize'))
    gulp.watch(svgSpriteSource, () => runSequence('svg:sprite'))
    gulp.watch(fontsSource, () => runSequence('fonts'))
    gulp.watch(othersSource, () => runSequence('others'))
    gulp.watch([othersSource, htmlSource], () => runSequence('server:reload'))

})
