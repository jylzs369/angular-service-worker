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
    "url": "0.16e8f0680940fb6c284a.js",
    "revision": "6ea25cc47eb973157cf0b37e39581ae8"
  },
  {
    "url": "index.html",
    "revision": "65c53b1c8f7f0b1529f18ad54a68ae8b"
  },
  {
    "url": "main.70972cae6f5853a64cf9.js",
    "revision": "903be6a053e0c9ec0269f18bdf0a4141"
  },
  {
    "url": "polyfills.711e3454d84842421680.js",
    "revision": "510603868fedadcfad7828de54a3f79d"
  },
  {
    "url": "runtime.c13eacd733dc09acad59.js",
    "revision": "c8112097fbc0ebe757cdd7ad26ad614b"
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
