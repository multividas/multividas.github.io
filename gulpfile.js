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
      const sassFiles = [
          { src: 'src/scss/_header.scss', dest: 'docs/header.css' },
          { src: 'src/scss/_footer.scss', dest: 'docs/footer.css' },
          { src: 'src/scss/main.scss', dest: 'docs/main.css' }
      ]

      for (const file of sassFiles) {
          const result = await sass.compileAsync(path.join(__dirname, file.src))
          fs.writeFileSync(path.join(__dirname, file.dest), result.css)
      }

      console.log('Sass compiled successfully.')
  } catch (error) {
      console.error('Sass compilation error:', error)
  }
}

const buildComponentStyles = () => {
  const cssFiles = [
      { src: './docs/header.css', rename: 'mv-header@2.css' },
      { src: './docs/footer.css', rename: 'mv-footer@2.css' },
      { src: './docs/main.css', rename: 'mv-main@2.css' }
  ]

  return cssFiles.map(file =>
    gulp.src(file.src)
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename(file.rename))
      .pipe(header(headerComment))
      .pipe(gulp.dest('./docs/'))
  )
}

exports.build = gulp.series(compileSass, buildComponentStyles)
