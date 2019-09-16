const gulp = require('gulp');
const path = require('path');
const replace = require('gulp-replace');
const replaceAsync = require('gulp-replace-async');
const gulpLess = require('gulp-less');
const plumber = require('gulp-plumber');
const lessCompiler = require('less');
const LessAutoPrefix = require('less-plugin-autoprefix');
const parseArguments = require('minimist');
const fs = require('fs');

const generator = require('../../themebuilder/modules/metadata-generator');
const context = require('./context');
const browsersList = require('../../package.json').browserslist;
const starLicense = require('./header-pipes').starLicense;
const autoPrefix = new LessAutoPrefix({ browsers: browsersList });

const cssArtifactsPath = path.join(process.cwd(), 'artifacts', 'css');
const commentsRegex = /\s*\/\*[\S\s]*?\*\//g;

const compileBundles = (bundles) => {
    const paths = path.join(process.cwd(), 'styles');

    return gulp
        .src(bundles)
        .pipe(plumber(e => {
            console.log(e);
            this.emit('end');
        }))
        .on('data', (chunk) => console.log('Build: ', chunk.path))
        .pipe(gulpLess({
            paths: [ paths ],
            plugins: [ autoPrefix ],
            useFileCache: true
        }))
        .pipe(replace(commentsRegex, ''))
        .pipe(starLicense())
        .pipe(gulp.dest(cssArtifactsPath));
};


gulp.task('copy-fonts-and-icons', () => {
    return gulp
        .src(['fonts/**/*', 'icons/**/*'], { base: '.' })
        .pipe(gulp.dest(cssArtifactsPath));
});

gulp.task('style-compiler-styles', () => compileBundles('styles/bundles/*.less'));

gulp.task('style-compiler-themes', gulp.parallel('style-compiler-styles', 'copy-fonts-and-icons'));

gulp.task('style-compiler-themes-dev', () => {
    const args = parseArguments(process.argv);
    const bundlesArg = args['bundles'];

    const bundles = (
        bundlesArg
            ? bundlesArg.split(',')
            : ['common', 'light', 'material.blue.light'])
        .map((bundle) => {
            const bundleName = `styles/bundles/dx.${bundle}.less`;
            if(fs.existsSync(bundleName)) {
                return bundleName;
            }
            console.log(`${bundleName} file does not exists`);
            return null;
        });

    gulp.watch('styles/**/*', gulp.parallel(() => compileBundles(bundles), 'copy-fonts-and-icons'));
});

gulp.task('style-compiler-tb-metadata', () => {
    return generator.generate(context.version.package, lessCompiler);
});

gulp.task('style-compiler-tb-assets', gulp.parallel('style-compiler-tb-metadata', () => {
    const assetsPath = path.join(process.cwd(), 'themebuilder', 'data', 'less');
    return gulp.src('styles/**/*')
        .pipe(replace(commentsRegex, ''))
        .pipe(replaceAsync(/data-uri\([^)]+\)/g, (match, callback) => {
            const validLessString = `selector{property:${match[0]};}`;
            lessCompiler.render(validLessString, { paths: [ path.join(process.cwd(), 'images') ] })
                .then(
                    (output) => callback(null, /url\(.*\)/.exec(output.css)[0]),
                    (error) => console.log(error)
                );
        }))
        .pipe(gulp.dest(assetsPath));
}));
