const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const sass = require('sass')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const header = require('gulp-header')

const headerComment = `/**
* Copyright (c) 2023 by Soulaimane Yahya.
* All rights reserved.
*
* This code is developed by Soulaimane Yahya and is protected under international copyright laws.
* Unauthorized reproduction, distribution, or modification of this code is strictly prohibited.
*
* Website: https://www.multividas.com
*/\n`

const compileSass = async () => {
    try {
        const result = await sass.compileAsync(
          path.join(__dirname, 'assets/scss/main.scss')
        )

        fs.writeFileSync(path.join(__dirname, 'assets/css/main.css'), result.css)
        console.log('Sass compiled successfully.')
    } catch (error) {
        console.error('Sass compilation error:', error)
    }
}

const buildComponentStyles = () => {
  return gulp.src('./assets/css/main.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('mv-main@2.css'))
    .pipe(header(headerComment))
    .pipe(gulp.dest('./assets/css/'))
}

const watchSass = () => {
    gulp.watch('./assets/scss/**/*.scss', compileSass)
}

exports.build = gulp.series(compileSass, buildComponentStyles)
exports.watch = gulp.series(watchSass)
