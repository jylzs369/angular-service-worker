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
    "url": "index.html",
    "revision": "a7cab64169985670c24fae2342cd6e36"
  },
  {
    "url": "main.a20f422d6b154fdc7a19.js",
    "revision": "7ea058ac3f1811bc86f2bfdad2167679"
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

workbox.routing.registerRoute(/\/assets\/(.*)/, workbox.strategies.cacheFirst(), 'GET');
