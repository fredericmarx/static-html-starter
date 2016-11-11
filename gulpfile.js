const autoprefixer = require('autoprefixer')
const babel = require('gulp-babel')
const bsCreate = require('browser-sync').create
const cssnano = require('cssnano')
const del = require('del')
const gulp = require('gulp')
const gulpIgnore = require('gulp-ignore')
const postcss = require('gulp-postcss')
const postcssImport = require('postcss-import')
const postcssCustomProperties = require('postcss-custom-properties')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

const browserSync = bsCreate()

const dirs = {
  src: 'src',
  dest: 'dist'
}

const htmlPaths = {
  srcFiles: `${dirs.src}`,
  destDir: `${dirs.dest}`,
  exclude: `partials/**`
}

const cssPaths = {
  srcFiles: `${dirs.src}/styles`,
  destDir: `${dirs.dest}/styles`,
  exclude: `partials/**`
}

const jsPaths = {
  srcFiles: `${dirs.src}/scripts`,
  destDir: `${dirs.dest}/scripts`,
  exclude: `includes/**`
}

gulp.task('html', () => {
  return gulp.src(`${htmlPaths.srcFiles}/**/*.html`)
    .pipe(gulpIgnore.exclude(htmlPaths.exclude))
    .pipe(size({title: 'Write HTML:', showFiles: true}))
    .pipe(gulp.dest(htmlPaths.destDir))
})

gulp.task('css', () => {
  return gulp.src(`${cssPaths.srcFiles}/**/*.css`)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      postcssCustomProperties(),
      autoprefixer(),
      cssnano()
    ]))
    .pipe(gulpIgnore.exclude(cssPaths.exclude))
    .pipe(size({title: 'Write CSS:', showFiles: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPaths.destDir))
})

gulp.task('js', () => {
  return gulp.src(`${jsPaths.srcFiles}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['latest']
    }))
    .pipe(uglify())
    .pipe(gulpIgnore.exclude(jsPaths.exclude))
    .pipe(size({title: 'Write JS:', showFiles: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsPaths.destDir))
})

gulp.task('browsersync', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('watch', () => {
  gulp.watch(`${htmlPaths.srcFiles}/**/*.html`, ['html', browserSync.reload])
  gulp.watch(`${cssPaths.srcFiles}/**/*.css`, ['css', browserSync.reload])
  gulp.watch(`${jsPaths.srcFiles}/**/*.js`, ['js', browserSync.reload])
})

gulp.task('clean', () => {
  return del(dirs.dest)
})

gulp.task('build', ['clean'], () => {
  gulp.start([
    'html',
    'css',
    'js'
  ])
})

gulp.task('default', ['clean'], () => {
  gulp.start([
    'html',
    'css',
    'js',
    'browsersync',
    'watch'
  ])
})
