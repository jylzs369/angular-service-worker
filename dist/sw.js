/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0.274dd20b585dcfb51b79.js",
    "revision": "2dfc5e93c322415947db1126b2db1eeb"
  },
  {
    "url": "assets/img/avatars/1.jpg",
    "revision": "5a0fc4811977c611851bf002e38f4c2c"
  },
  {
    "url": "assets/img/avatars/10.jpg",
    "revision": "953461ff24dcd7b2f58df0facafff6d9"
  },
  {
    "url": "assets/img/avatars/2.jpg",
    "revision": "8fd4b5ab22853ed07e1e703e2e69babf"
  },
  {
    "url": "assets/img/avatars/3.jpg",
    "revision": "23735aba2d5298ce2c678fb713b92fa4"
  },
  {
    "url": "assets/img/avatars/4.jpg",
    "revision": "2eccf5e3a19b48ff2f9b121150c6a574"
  },
  {
    "url": "assets/img/avatars/5.jpg",
    "revision": "6f8bfb5edf02015df46842cc0f5c350d"
  },
  {
    "url": "assets/img/avatars/6.jpg",
    "revision": "86089425fea5ad53ab2072679b74c1d9"
  },
  {
    "url": "assets/img/avatars/7.jpg",
    "revision": "e18b7a03b8d2450da89076d3b52c6b53"
  },
  {
    "url": "assets/img/avatars/8.jpg",
    "revision": "139a2fbb6fc190b1b90b72e43cea0e0b"
  },
  {
    "url": "assets/img/avatars/9.jpg",
    "revision": "51bef79890a601223105c965c4f6fb77"
  },
  {
    "url": "index.html",
    "revision": "b280787dc000dd7c8ec83264ddf4f4e2"
  },
  {
    "url": "main.d12298fb96e8e64ca84b.js",
    "revision": "2ff2ab9319b7da681e6a7a13de1930a8"
  },
  {
    "url": "polyfills.711e3454d84842421680.js",
    "revision": "510603868fedadcfad7828de54a3f79d"
  },
  {
    "url": "runtime.d7f2bf3c9e1c69e549fc.js",
    "revision": "1e2ea15465822296117e364d62933a63"
  },
  {
    "url": "styles.3ff695c00d717f2d2a11.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
