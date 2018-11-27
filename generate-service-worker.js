const { generateSW } = require('workbox-build')
const path = require('path')

const BUILD_DIR = 'dist'

const options = {
    swDest: path.join(`${BUILD_DIR}`, 'sw.js'),
    globDirectory: BUILD_DIR,
    globPatterns: [`**/*.{js,css,html,svg,png,jpg}`],
    navigateFallback: '/index.html',
    clientsClaim: true
}

generateSW(options).then(obj => {
    console.log(`Generated service worker with static cache. ${obj.count} files are cached`)
})