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
    "url": "index.html",
    "revision": "4df9d3afee2408533a39b21802810897"
  },
  {
    "url": "main.9ca7f243dadc6a36f8f0.js",
    "revision": "3ee18bb4c5ec295c52434c3ab05bbfd4"
  },
  {
    "url": "polyfills.7fb637d055581aa28d51.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "runtime.a66f828dca56eeb90e02.js",
    "revision": "f2c1a0d5e113c332e6bbe7887eb378b2"
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
