/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ './src/index.js':
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /***/ (
                __unused_webpack_module,
                __unused_webpack_exports,
                __webpack_require__
            ) => {
                eval(
                    "let volume = 0;\nconst player = document.querySelector('lottie-player');\n\nfunction onMicrophoneDenied() {\n  console.log('denied');\n}\n\nasync function onMicrophoneGranted(stream) {\n  const audioContext = new window.AudioContext();\n  console.log('Setting up volume processor');\n  await audioContext.audioWorklet.addModule(new URL(/* asset import */ __webpack_require__(/*! ./volume-processor.js */ \"./src/volume-processor.js\"), __webpack_require__.b));\n  const mediaStreamSource = audioContext.createMediaStreamSource(stream);\n  const node = new AudioWorkletNode(audioContext, 'volume-processor');\n\n  node.port.onmessage = event => {\n    if (event.data.volume) {\n      volume = Math.ceil(event.data.volume * 100);\n    }\n  };\n\n  mediaStreamSource.connect(node).connect(audioContext.destination);\n  render();\n}\n\nfunction render() {\n  player.seek(`${volume}%`);\n  console.log(`${volume * 1000}`);\n  requestAnimationFrame(render);\n}\n\nnavigator.getUserMedia({\n  audio: true\n}, onMicrophoneGranted, onMicrophoneDenied);\n\n//# sourceURL=webpack://lottie-audio-visualization-demo/./src/index.js?"
                );

                /***/
            },

        /***/ './src/volume-processor.js':
            /*!*********************************!*\
  !*** ./src/volume-processor.js ***!
  \*********************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                'use strict';
                eval(
                    'module.exports = __webpack_require__.p + "d2dafdea4a73a711b849.js";\n\n//# sourceURL=webpack://lottie-audio-visualization-demo/./src/volume-processor.js?'
                );

                /***/
            }

        /******/
    }; // The module cache
    /************************************************************************/
    /******/ /******/ var __webpack_module_cache__ = {}; // The require function
    /******/

    /******/ /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
            /******/
        }); // Execute the module function
        /******/

        /******/ /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__
        ); // Return the exports of the module
        /******/

        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/

    /******/ /******/ __webpack_require__.m = __webpack_modules__; /* webpack/runtime/global */
    /******/

    /************************************************************************/
    /******/ /******/ (() => {
        /******/ __webpack_require__.g = (function() {
            /******/ if (typeof globalThis === 'object') return globalThis;
            /******/ try {
                /******/ return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/ if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })(); /* webpack/runtime/hasOwnProperty shorthand */
    /******/

    /******/ /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })(); /* webpack/runtime/publicPath */
    /******/

    /******/ /******/ (() => {
        /******/ var scriptUrl;
        /******/ if (__webpack_require__.g.importScripts)
            scriptUrl = __webpack_require__.g.location + '';
        /******/ var document = __webpack_require__.g.document;
        /******/ if (!scriptUrl && document) {
            /******/ if (document.currentScript)
                /******/ scriptUrl = document.currentScript.src;
            /******/ if (!scriptUrl) {
                /******/ var scripts = document.getElementsByTagName('script');
                /******/ if (scripts.length)
                    scriptUrl = scripts[scripts.length - 1].src;
                /******/
            }
            /******/
        } // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
        /******/ /******/ /******/ if (!scriptUrl)
            throw new Error(
                'Automatic publicPath is not supported in this browser'
            );
        /******/ scriptUrl = scriptUrl
            .replace(/#.*$/, '')
            .replace(/\?.*$/, '')
            .replace(/\/[^\/]+$/, '/');
        /******/ __webpack_require__.p = scriptUrl;
        /******/
    })(); /* webpack/runtime/jsonp chunk loading */
    /******/

    /******/ /******/ (() => {
        /******/ __webpack_require__.b = document.baseURI || self.location.href; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/

        /******/ /******/ /******/ /******/ var installedChunks = {
            /******/ main: 0
            /******/
        };
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/ // no on chunks loaded
        /******/
        /******/ // no jsonp function
        /******/
    })(); // startup // Load entry module and return exports // This entry module can't be inlined because the eval devtool is used.
    /******/

    /************************************************************************/
    /******/

    /******/ /******/ /******/ /******/ var __webpack_exports__ = __webpack_require__(
        './src/index.js'
    );
    /******/
    /******/
})();
