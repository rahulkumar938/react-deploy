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

importScripts(
<<<<<<< HEAD
  "/react-deploy/precache-manifest.34a868c4b10d85210fda0c8d1febc860.js"
=======
  "/rahulkumar938/react-stock/precache-manifest.b03d3d6416eb4448f0f869527edbca11.js"
>>>>>>> 01c3ff2a4df54c886fe666333d0489a43a23b73c
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute("/react-deploy/index.html", {
=======
workbox.routing.registerNavigationRoute("/rahulkumar938/react-stock/index.html", {
>>>>>>> 01c3ff2a4df54c886fe666333d0489a43a23b73c
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
