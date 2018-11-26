const build = require('workbox-build')
const SRC_DIR = './'
const BUILD_DIR = 'dist/'

const options = {
    swDest: `${BUILD_DIR}/sw.js`,
    globDirectory: BUILD_DIR,
    navigateFallback: '/index.html',
    clientsClaim: true,
    runtimeCaching: [
        {
            urlPattern: /\/assets\/(.*)/,
            handler: 'cacheFirst'
        }
    ]
}

build.generateSW(options).then(() => {
    console.log('Generated service worker with static cache')
})