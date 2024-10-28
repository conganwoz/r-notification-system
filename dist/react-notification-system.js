(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactNotificationSystem"] = factory(require("react"), require("react-dom"));
	else
		root["ReactNotificationSystem"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var PropTypes = __webpack_require__(3);
	var merge = __webpack_require__(9);
	var NotificationContainer = __webpack_require__(13);
	var Constants = __webpack_require__(16);
	var Styles = __webpack_require__(18);

	var NotificationSystem = function (_React$Component) {
	  _inherits(NotificationSystem, _React$Component);

	  function NotificationSystem() {
	    _classCallCheck(this, NotificationSystem);

	    var _this = _possibleConstructorReturn(this, (NotificationSystem.__proto__ || Object.getPrototypeOf(NotificationSystem)).call(this));

	    _this.state = {
	      notifications: []
	    };
	    _this.uid = 3400;
	    _this._isMounted = false;
	    _this.overrideWidth = null;
	    _this.overrideStyle = {};
	    _this.elements = {
	      notification: 'NotificationItem',
	      title: 'Title',
	      messageWrapper: 'MessageWrapper',
	      dismiss: 'Dismiss',
	      action: 'Action',
	      actionWrapper: 'ActionWrapper'
	    };

	    _this.setOverrideStyle = _this.setOverrideStyle.bind(_this);
	    _this.wrapper = _this.wrapper.bind(_this);
	    _this.container = _this.container.bind(_this);
	    _this.byElement = _this.byElement.bind(_this);
	    _this._didNotificationRemoved = _this._didNotificationRemoved.bind(_this);
	    _this.addNotification = _this.addNotification.bind(_this);
	    _this.getNotificationRef = _this.getNotificationRef.bind(_this);
	    _this.removeNotification = _this.removeNotification.bind(_this);
	    _this.editNotification = _this.editNotification.bind(_this);
	    _this.clearNotifications = _this.clearNotifications.bind(_this);

	    _this._getStyles = {
	      overrideWidth: _this.overrideWidth,
	      overrideStyle: _this.overrideStyle,
	      elements: _this.elements,
	      setOverrideStyle: _this.setOverrideStyle,
	      wrapper: _this.wrapper,
	      container: _this.container,
	      byElement: _this.byElement
	    };
	    return _this;
	  }

	  _createClass(NotificationSystem, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.setOverrideStyle(this.props.style);
	        this._isMounted = true;
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        this._isMounted = false;
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'setOverrideStyle',
	    value: function () {
	      function setOverrideStyle(style) {
	        this.overrideStyle = style;
	      }

	      return setOverrideStyle;
	    }()
	  }, {
	    key: 'wrapper',
	    value: function () {
	      function wrapper() {
	        if (!this.overrideStyle) return {};
	        return merge({}, Styles.Wrapper, this.overrideStyle.Wrapper);
	      }

	      return wrapper;
	    }()
	  }, {
	    key: 'container',
	    value: function () {
	      function container(position) {
	        var override = this.overrideStyle.Containers || {};
	        if (!this.overrideStyle) return {};

	        this.overrideWidth = Styles.Containers.DefaultStyle.width;

	        if (override.DefaultStyle && override.DefaultStyle.width) {
	          this.overrideWidth = override.DefaultStyle.width;
	        }

	        if (override[position] && override[position].width) {
	          this.overrideWidth = override[position].width;
	        }

	        return merge({}, Styles.Containers.DefaultStyle, Styles.Containers[position], override.DefaultStyle, override[position]);
	      }

	      return container;
	    }()
	  }, {
	    key: 'byElement',
	    value: function () {
	      function byElement(element) {
	        var _this2 = this;

	        return function (level) {
	          var _element = _this2.elements[element];
	          var override = _this2.overrideStyle[_element] || {};
	          if (!_this2.overrideStyle) return {};
	          return merge({}, Styles[_element].DefaultStyle, Styles[_element][level], override.DefaultStyle, override[level]);
	        };
	      }

	      return byElement;
	    }()
	  }, {
	    key: '_didNotificationRemoved',
	    value: function () {
	      function _didNotificationRemoved(uid) {
	        var notification;
	        if (this._isMounted) {
	          this.setState(function (prevState) {
	            var notifications = prevState.notifications.filter(function (toCheck) {
	              if (toCheck.uid === uid) {
	                notification = toCheck;
	                return false;
	              }
	              return true;
	            });

	            return { notifications: notifications };
	          }, function () {
	            if (notification && notification.onRemove) {
	              notification.onRemove(notification);
	            }
	          });
	        }
	      }

	      return _didNotificationRemoved;
	    }()
	  }, {
	    key: 'addNotification',
	    value: function () {
	      function addNotification(notification) {
	        var _this3 = this;

	        var _notification = merge({}, Constants.notification, notification);
	        var notifications = this.state.notifications;
	        var i;

	        if (!_notification.level) {
	          throw new Error('notification level is required.');
	        }

	        if (Object.keys(Constants.levels).indexOf(_notification.level) === -1) {
	          throw new Error("'" + _notification.level + "' is not a valid level.");
	        }

	        // eslint-disable-next-line
	        if (isNaN(_notification.autoDismiss)) {
	          throw new Error("'autoDismiss' must be a number.");
	        }

	        if (Object.keys(Constants.positions).indexOf(_notification.position) === -1) {
	          throw new Error("'" + _notification.position + "' is not a valid position.");
	        }

	        // Some preparations
	        _notification.position = _notification.position.toLowerCase();
	        _notification.level = _notification.level.toLowerCase();
	        _notification.autoDismiss = parseInt(_notification.autoDismiss, 10);

	        _notification.uid = _notification.uid || this.uid;
	        _notification.ref = 'notification-' + _notification.uid;
	        this.uid += 1;

	        // do not add if the notification already exists based on supplied uid
	        for (i = 0; i < notifications.length; i += 1) {
	          if (notifications[i].uid === _notification.uid) {
	            return false;
	          }
	        }

	        this.setState(function (prevState) {
	          var otherNotifications = prevState.notifications.filter(function (item) {
	            return item.uid !== _notification.uid;
	          });
	          return {
	            notifications: _this3.props.newOnTop ? [_notification].concat(otherNotifications) : otherNotifications.concat([_notification])
	          };
	        }, function () {
	          if (typeof _notification.onAdd === 'function') {
	            notification.onAdd(_notification);
	          }
	        });

	        return _notification;
	      }

	      return addNotification;
	    }()
	  }, {
	    key: 'getNotificationRef',
	    value: function () {
	      function getNotificationRef(notification) {
	        var _this4 = this;

	        var foundNotification = null;

	        Object.keys(this.refs).forEach(function (container) {
	          if (container.indexOf('container') > -1) {
	            Object.keys(_this4.refs[container].refs).forEach(function (_notification) {
	              var uid = notification.uid ? notification.uid : notification;
	              if (_notification === 'notification-' + uid) {
	                // NOTE: Stop iterating further and return the found notification.
	                // Since UIDs are uniques and there won't be another notification found.
	                foundNotification = _this4.refs[container].refs[_notification];
	              }
	            });
	          }
	        });

	        return foundNotification;
	      }

	      return getNotificationRef;
	    }()
	  }, {
	    key: 'removeNotification',
	    value: function () {
	      function removeNotification(notification) {
	        var foundNotification = this.getNotificationRef(notification);
	        return foundNotification && foundNotification._hideNotification();
	      }

	      return removeNotification;
	    }()
	  }, {
	    key: 'editNotification',
	    value: function () {
	      function editNotification(notification, newNotification) {
	        var foundNotification = null;
	        // NOTE: Find state notification to update by using
	        // `setState` and forcing React to re-render the component.
	        var uid = notification.uid ? notification.uid : notification;

	        var newNotifications = this.state.notifications.filter(function (stateNotification) {
	          if (uid === stateNotification.uid) {
	            foundNotification = stateNotification;
	            return false;
	          }

	          return true;
	        });

	        if (!foundNotification) {
	          return;
	        }

	        newNotifications.push(merge({}, foundNotification, newNotification));

	        this.setState({
	          notifications: newNotifications
	        });
	      }

	      return editNotification;
	    }()
	  }, {
	    key: 'clearNotifications',
	    value: function () {
	      function clearNotifications() {
	        var _this5 = this;

	        Object.keys(this.refs).forEach(function (container) {
	          if (container.indexOf('container') > -1) {
	            Object.keys(_this5.refs[container].refs).forEach(function (_notification) {
	              _this5.refs[container].refs[_notification]._hideNotification();
	            });
	          }
	        });
	      }

	      return clearNotifications;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this6 = this;

	        var containers = null;
	        var notifications = this.state.notifications;

	        if (notifications.length) {
	          containers = Object.keys(Constants.positions).map(function (position) {
	            var _notifications = notifications.filter(function (notification) {
	              return position === notification.position;
	            });

	            if (!_notifications.length) {
	              return null;
	            }

	            return React.createElement(NotificationContainer, {
	              ref: 'container-' + position,
	              key: position,
	              position: position,
	              notifications: _notifications,
	              getStyles: _this6._getStyles,
	              onRemove: _this6._didNotificationRemoved,
	              noAnimation: _this6.props.noAnimation,
	              allowHTML: _this6.props.allowHTML
	            });
	          });
	        }

	        return React.createElement(
	          'div',
	          { className: 'notifications-wrapper', style: this.wrapper() },
	          containers
	        );
	      }

	      return render;
	    }()
	  }]);

	  return NotificationSystem;
	}(React.Component);

	NotificationSystem.propTypes = {
	  style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	  noAnimation: PropTypes.bool,
	  allowHTML: PropTypes.bool,
	  newOnTop: PropTypes.bool
	};

	NotificationSystem.defaultProps = {
	  style: {},
	  noAnimation: false,
	  allowHTML: false,
	  newOnTop: false
	};

	module.exports = NotificationSystem;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(5);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(8)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(12)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(6);
	} else {
	  module.exports = __webpack_require__(7);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/** @license React v16.11.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
	exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
	exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.11.0
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	var lowPriorityWarningWithoutStack = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });

	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }

	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarningWithoutStack = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(void 0, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(5);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(10);
	var checkPropTypes = __webpack_require__(11);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(10);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(10);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var PropTypes = __webpack_require__(3);
	var NotificationItem = __webpack_require__(14);
	var Constants = __webpack_require__(16);

	var NotificationContainer = function (_React$Component) {
	  _inherits(NotificationContainer, _React$Component);

	  function NotificationContainer(props) {
	    _classCallCheck(this, NotificationContainer);

	    // Fix position if width is overrided
	    var _this = _possibleConstructorReturn(this, (NotificationContainer.__proto__ || Object.getPrototypeOf(NotificationContainer)).call(this, props));

	    _this._style = props.getStyles.container(props.position);

	    if (props.getStyles.overrideWidth && (props.position === Constants.positions.tc || props.position === Constants.positions.bc)) {
	      _this._style.marginLeft = -(props.getStyles.overrideWidth / 2);
	    }
	    return _this;
	  }

	  _createClass(NotificationContainer, [{
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this2 = this;

	        var notifications;

	        if ([Constants.positions.bl, Constants.positions.br, Constants.positions.bc].indexOf(this.props.position) > -1) {
	          this.props.notifications.reverse();
	        }

	        notifications = this.props.notifications.map(function (notification) {
	          return React.createElement(NotificationItem, {
	            ref: 'notification-' + notification.uid,
	            key: notification.uid,
	            notification: notification,
	            getStyles: _this2.props.getStyles,
	            onRemove: _this2.props.onRemove,
	            noAnimation: _this2.props.noAnimation,
	            allowHTML: _this2.props.allowHTML,
	            children: _this2.props.children
	          });
	        });

	        return React.createElement(
	          'div',
	          {
	            className: 'notifications-' + this.props.position,
	            style: this._style
	          },
	          notifications
	        );
	      }

	      return render;
	    }()
	  }]);

	  return NotificationContainer;
	}(React.Component);

	NotificationContainer.propTypes = {
	  position: PropTypes.string.isRequired,
	  notifications: PropTypes.array.isRequired,
	  getStyles: PropTypes.object,
	  onRemove: PropTypes.func,
	  noAnimation: PropTypes.bool,
	  allowHTML: PropTypes.bool,
	  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
	};

	module.exports = NotificationContainer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var PropTypes = __webpack_require__(3);
	var ReactDOM = __webpack_require__(15);
	var Constants = __webpack_require__(16);
	var Helpers = __webpack_require__(17);
	var merge = __webpack_require__(9);

	/* From Modernizr */
	var whichTransitionEvent = function whichTransitionEvent() {
	  var el = document.createElement('fakeelement');
	  var transition;
	  var transitions = {
	    transition: 'transitionend',
	    OTransition: 'oTransitionEnd',
	    MozTransition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd'
	  };

	  Object.keys(transitions).forEach(function (transitionKey) {
	    if (el.style[transitionKey] !== undefined) {
	      transition = transitions[transitionKey];
	    }
	  });

	  return transition;
	};

	function _allowHTML(string) {
	  return { __html: string };
	}

	var NotificationItem = function (_React$Component) {
	  _inherits(NotificationItem, _React$Component);

	  function NotificationItem(props) {
	    _classCallCheck(this, NotificationItem);

	    var _this = _possibleConstructorReturn(this, (NotificationItem.__proto__ || Object.getPrototypeOf(NotificationItem)).call(this, props));

	    _this._notificationTimer = null;
	    _this._height = 0;
	    _this._noAnimation = null;
	    _this._isMounted = false;
	    _this._removeCount = 0;

	    _this.state = {
	      visible: undefined,
	      removed: false
	    };

	    var getStyles = props.getStyles;
	    var level = props.notification.level;
	    var dismissible = props.notification.dismissible;

	    _this._noAnimation = props.noAnimation;

	    _this._styles = {
	      notification: getStyles.byElement('notification')(level),
	      title: getStyles.byElement('title')(level),
	      dismiss: getStyles.byElement('dismiss')(level),
	      messageWrapper: getStyles.byElement('messageWrapper')(level),
	      actionWrapper: getStyles.byElement('actionWrapper')(level),
	      action: getStyles.byElement('action')(level)
	    };

	    if (!dismissible || dismissible === 'none' || dismissible === 'button') {
	      _this._styles.notification.cursor = 'default';
	    }

	    _this._getCssPropertyByPosition = _this._getCssPropertyByPosition.bind(_this);
	    _this._defaultAction = _this._defaultAction.bind(_this);
	    _this._hideNotification = _this._hideNotification.bind(_this);
	    _this._removeNotification = _this._removeNotification.bind(_this);
	    _this._dismiss = _this._dismiss.bind(_this);
	    _this._showNotification = _this._showNotification.bind(_this);
	    _this._onTransitionEnd = _this._onTransitionEnd.bind(_this);
	    _this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
	    _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
	    _this._handleNotificationClick = _this._handleNotificationClick.bind(_this);
	    return _this;
	  }

	  _createClass(NotificationItem, [{
	    key: '_getCssPropertyByPosition',
	    value: function () {
	      function _getCssPropertyByPosition() {
	        var position = this.props.notification.position;
	        var css = {};

	        switch (position) {
	          case Constants.positions.tl:
	          case Constants.positions.bl:
	            css = {
	              property: 'left',
	              value: -200
	            };
	            break;

	          case Constants.positions.tr:
	          case Constants.positions.br:
	            css = {
	              property: 'right',
	              value: -200
	            };
	            break;

	          case Constants.positions.tc:
	            css = {
	              property: 'top',
	              value: -100
	            };
	            break;

	          case Constants.positions.bc:
	            css = {
	              property: 'bottom',
	              value: -100
	            };
	            break;

	          default:
	        }

	        return css;
	      }

	      return _getCssPropertyByPosition;
	    }()
	  }, {
	    key: '_defaultAction',
	    value: function () {
	      function _defaultAction(event) {
	        var notification = this.props.notification;

	        event.preventDefault();
	        this._hideNotification();
	        if (typeof notification.action.callback === 'function') {
	          notification.action.callback();
	        }
	      }

	      return _defaultAction;
	    }()
	  }, {
	    key: '_hideNotification',
	    value: function () {
	      function _hideNotification() {
	        if (this._notificationTimer) {
	          this._notificationTimer.clear();
	        }

	        if (this._isMounted) {
	          this.setState({
	            visible: false,
	            removed: true
	          });
	        }

	        if (this._noAnimation) {
	          this._removeNotification();
	        }
	      }

	      return _hideNotification;
	    }()
	  }, {
	    key: '_removeNotification',
	    value: function () {
	      function _removeNotification() {
	        this.props.onRemove(this.props.notification.uid);
	      }

	      return _removeNotification;
	    }()
	  }, {
	    key: '_dismiss',
	    value: function () {
	      function _dismiss() {
	        if (!this.props.notification.dismissible) {
	          return;
	        }

	        this._hideNotification();
	      }

	      return _dismiss;
	    }()
	  }, {
	    key: '_showNotification',
	    value: function () {
	      function _showNotification() {
	        var _this2 = this;

	        setTimeout(function () {
	          if (_this2._isMounted) {
	            _this2.setState({
	              visible: true
	            });
	          }
	        }, 50);
	      }

	      return _showNotification;
	    }()
	  }, {
	    key: '_onTransitionEnd',
	    value: function () {
	      function _onTransitionEnd() {
	        if (this._removeCount > 0) return;
	        if (this.state.removed) {
	          this._removeCount += 1;
	          this._removeNotification();
	        }
	      }

	      return _onTransitionEnd;
	    }()
	  }, {
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        var self = this;
	        var transitionEvent = whichTransitionEvent();
	        var notification = this.props.notification;
	        var element = ReactDOM.findDOMNode(this);

	        this._height = element.offsetHeight;

	        this._isMounted = true;

	        // Watch for transition end
	        if (!this._noAnimation) {
	          if (transitionEvent) {
	            element.addEventListener(transitionEvent, this._onTransitionEnd);
	          } else {
	            this._noAnimation = true;
	          }
	        }

	        if (notification.autoDismiss) {
	          this._notificationTimer = new Helpers.Timer(function () {
	            self._hideNotification();
	          }, notification.autoDismiss * 1000);
	        }

	        this._showNotification();
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: '_handleMouseEnter',
	    value: function () {
	      function _handleMouseEnter() {
	        var notification = this.props.notification;
	        if (notification.autoDismiss) {
	          this._notificationTimer.pause();
	        }
	      }

	      return _handleMouseEnter;
	    }()
	  }, {
	    key: '_handleMouseLeave',
	    value: function () {
	      function _handleMouseLeave() {
	        var notification = this.props.notification;
	        if (notification.autoDismiss) {
	          this._notificationTimer.resume();
	        }
	      }

	      return _handleMouseLeave;
	    }()
	  }, {
	    key: '_handleNotificationClick',
	    value: function () {
	      function _handleNotificationClick() {
	        var dismissible = this.props.notification.dismissible;
	        if (dismissible === 'both' || dismissible === 'click' || dismissible === true) {
	          this._dismiss();
	        }
	      }

	      return _handleNotificationClick;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        var element = ReactDOM.findDOMNode(this);
	        var transitionEvent = whichTransitionEvent();
	        element.removeEventListener(transitionEvent, this._onTransitionEnd);
	        this._isMounted = false;
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var notification = this.props.notification;
	        var className = 'notification notification-' + notification.level;
	        var notificationStyle = merge({}, this._styles.notification);
	        var cssByPos = this._getCssPropertyByPosition();
	        var dismiss = null;
	        var actionButton = null;
	        var title = null;
	        var message = null;

	        if (this.props.notification.className) {
	          className += ' ' + this.props.notification.className;
	        }

	        if (this.state.visible) {
	          className += ' notification-visible';
	        } else if (this.state.visible === false) {
	          className += ' notification-hidden';
	        }

	        if (notification.dismissible === 'none') {
	          className += ' notification-not-dismissible';
	        }

	        if (this.props.getStyles.overrideStyle) {
	          if (!this.state.visible && !this.state.removed) {
	            notificationStyle[cssByPos.property] = cssByPos.value;
	          }

	          if (this.state.visible && !this.state.removed) {
	            notificationStyle.height = this._height;
	            notificationStyle[cssByPos.property] = 0;
	          }

	          if (this.state.removed) {
	            notificationStyle.overlay = 'hidden';
	            notificationStyle.height = 0;
	            notificationStyle.marginTop = 0;
	            notificationStyle.paddingTop = 0;
	            notificationStyle.paddingBottom = 0;
	          }

	          if (this._styles.notification.isVisible && this._styles.notification.isHidden) {
	            notificationStyle.opacity = this.state.visible ? this._styles.notification.isVisible.opacity : this._styles.notification.isHidden.opacity;
	          }
	        }

	        if (notification.title) {
	          title = React.createElement(
	            'h4',
	            { className: 'notification-title', style: this._styles.title },
	            notification.title
	          );
	        }

	        if (notification.message) {
	          if (this.props.allowHTML) {
	            message = React.createElement('div', {
	              className: 'notification-message',
	              style: this._styles.messageWrapper,
	              dangerouslySetInnerHTML: _allowHTML(notification.message)
	            });
	          } else {
	            message = React.createElement(
	              'div',
	              {
	                className: 'notification-message',
	                style: this._styles.messageWrapper
	              },
	              notification.message
	            );
	          }
	        }

	        if (notification.dismissible === 'both' || notification.dismissible === 'button' || notification.dismissible === true) {
	          dismiss = React.createElement(
	            'span',
	            {
	              className: 'notification-dismiss',
	              onClick: this._dismiss,
	              style: this._styles.dismiss,
	              'aria-hidden': true
	            },
	            '\xD7'
	          );
	        }

	        if (notification.action) {
	          actionButton = React.createElement(
	            'div',
	            {
	              className: 'notification-action-wrapper',
	              style: this._styles.actionWrapper
	            },
	            React.createElement(
	              'button',
	              {
	                className: 'notification-action-button',
	                onClick: this._defaultAction,
	                style: this._styles.action
	              },
	              notification.action.label
	            )
	          );
	        }

	        if (notification.children) {
	          actionButton = notification.children;
	        }

	        return React.createElement(
	          'div',
	          {
	            className: className,
	            onClick: this._handleNotificationClick,
	            onMouseEnter: this._handleMouseEnter,
	            onMouseLeave: this._handleMouseLeave,
	            style: notificationStyle,
	            role: 'alert'
	          },
	          title,
	          message,
	          dismiss,
	          actionButton
	        );
	      }

	      return render;
	    }()
	  }]);

	  return NotificationItem;
	}(React.Component);

	NotificationItem.propTypes = {
	  notification: PropTypes.object,
	  getStyles: PropTypes.object,
	  onRemove: PropTypes.func,
	  allowHTML: PropTypes.bool,
	  noAnimation: PropTypes.bool,
	  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
	};

	NotificationItem.defaultProps = {
	  noAnimation: false,
	  onRemove: function () {
	    function onRemove() {}

	    return onRemove;
	  }(),
	  allowHTML: false
	};

	module.exports = NotificationItem;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var CONSTANTS = {

	  // Positions
	  positions: {
	    tl: 'tl',
	    tr: 'tr',
	    tc: 'tc',
	    bl: 'bl',
	    br: 'br',
	    bc: 'bc'
	  },

	  // Levels
	  levels: {
	    success: 'success',
	    error: 'error',
	    warning: 'warning',
	    info: 'info'
	  },

	  // Notification defaults
	  notification: {
	    title: null,
	    message: null,
	    level: null,
	    position: 'tr',
	    autoDismiss: 5,
	    dismissible: 'both',
	    action: null
	  }
	};

	module.exports = CONSTANTS;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	var Helpers = {
	  Timer: function () {
	    function Timer(callback, delay) {
	      var timerId;
	      var start;
	      var remaining = delay;

	      this.pause = function () {
	        clearTimeout(timerId);
	        remaining -= new Date() - start;
	      };

	      this.resume = function () {
	        start = new Date();
	        clearTimeout(timerId);
	        timerId = setTimeout(callback, remaining);
	      };

	      this.clear = function () {
	        clearTimeout(timerId);
	      };

	      this.resume();
	    }

	    return Timer;
	  }()
	};

	module.exports = Helpers;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// Used for calculations
	var defaultWidth = 320;
	var defaultColors = {
	  success: {
	    rgb: '94, 164, 0',
	    hex: '#5ea400'
	  },
	  error: {
	    rgb: '236, 61, 61',
	    hex: '#ec3d3d'
	  },
	  warning: {
	    rgb: '235, 173, 23',
	    hex: '#ebad1a'
	  },
	  info: {
	    rgb: '54, 156, 199',
	    hex: '#369cc7'
	  }
	};
	var defaultShadowOpacity = '0.9';

	var STYLES = {

	  Wrapper: {},
	  Containers: {
	    DefaultStyle: {
	      fontFamily: 'inherit',
	      position: 'fixed',
	      width: defaultWidth,
	      padding: '0 10px 10px 10px',
	      zIndex: 9998,
	      WebkitBoxSizing: 'border-box',
	      MozBoxSizing: 'border-box',
	      boxSizing: 'border-box',
	      height: 'auto'
	    },

	    tl: {
	      top: '0px',
	      bottom: 'auto',
	      left: '0px',
	      right: 'auto'
	    },

	    tr: {
	      top: '0px',
	      bottom: 'auto',
	      left: 'auto',
	      right: '0px'
	    },

	    tc: {
	      top: '0px',
	      bottom: 'auto',
	      margin: '0 auto',
	      left: '50%',
	      marginLeft: -(defaultWidth / 2)
	    },

	    bl: {
	      top: 'auto',
	      bottom: '0px',
	      left: '0px',
	      right: 'auto'
	    },

	    br: {
	      top: 'auto',
	      bottom: '0px',
	      left: 'auto',
	      right: '0px'
	    },

	    bc: {
	      top: 'auto',
	      bottom: '0px',
	      margin: '0 auto',
	      left: '50%',
	      marginLeft: -(defaultWidth / 2)
	    }

	  },

	  NotificationItem: {
	    DefaultStyle: {
	      position: 'relative',
	      width: '100%',
	      cursor: 'pointer',
	      borderRadius: '2px',
	      fontSize: '13px',
	      margin: '10px 0 0',
	      padding: '10px',
	      display: 'block',
	      WebkitBoxSizing: 'border-box',
	      MozBoxSizing: 'border-box',
	      boxSizing: 'border-box',
	      opacity: 0,
	      transition: '0.3s ease-in-out',
	      WebkitTransform: 'translate3d(0, 0, 0)',
	      transform: 'translate3d(0, 0, 0)',
	      willChange: 'transform, opacity',

	      isHidden: {
	        opacity: 0
	      },

	      isVisible: {
	        opacity: 1
	      }
	    },

	    success: {
	      borderTop: '2px solid ' + defaultColors.success.hex,
	      backgroundColor: '#f0f5ea',
	      color: '#4b583a',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    error: {
	      borderTop: '2px solid ' + defaultColors.error.hex,
	      backgroundColor: '#f4e9e9',
	      color: '#412f2f',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    warning: {
	      borderTop: '2px solid ' + defaultColors.warning.hex,
	      backgroundColor: '#f9f6f0',
	      color: '#5a5343',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    info: {
	      borderTop: '2px solid ' + defaultColors.info.hex,
	      backgroundColor: '#e8f0f4',
	      color: '#41555d',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')'
	    }
	  },

	  Title: {
	    DefaultStyle: {
	      fontSize: '14px',
	      margin: '0 0 5px 0',
	      padding: 0,
	      fontWeight: 'bold'
	    },

	    success: {
	      color: defaultColors.success.hex
	    },

	    error: {
	      color: defaultColors.error.hex
	    },

	    warning: {
	      color: defaultColors.warning.hex
	    },

	    info: {
	      color: defaultColors.info.hex
	    }

	  },

	  MessageWrapper: {
	    DefaultStyle: {
	      margin: 0,
	      padding: 0
	    }
	  },

	  Dismiss: {
	    DefaultStyle: {
	      cursor: 'pointer',
	      fontFamily: 'Arial',
	      fontSize: '17px',
	      position: 'absolute',
	      top: '4px',
	      right: '5px',
	      lineHeight: '15px',
	      backgroundColor: '#dededf',
	      color: '#ffffff',
	      borderRadius: '50%',
	      width: '14px',
	      height: '14px',
	      fontWeight: 'bold',
	      textAlign: 'center'
	    },

	    success: {
	      color: '#f0f5ea',
	      backgroundColor: '#b0ca92'
	    },

	    error: {
	      color: '#f4e9e9',
	      backgroundColor: '#e4bebe'
	    },

	    warning: {
	      color: '#f9f6f0',
	      backgroundColor: '#e1cfac'
	    },

	    info: {
	      color: '#e8f0f4',
	      backgroundColor: '#a4becb'
	    }
	  },

	  Action: {
	    DefaultStyle: {
	      background: '#ffffff',
	      borderRadius: '2px',
	      padding: '6px 20px',
	      fontWeight: 'bold',
	      margin: '10px 0 0 0',
	      border: 0
	    },

	    success: {
	      backgroundColor: defaultColors.success.hex,
	      color: '#ffffff'
	    },

	    error: {
	      backgroundColor: defaultColors.error.hex,
	      color: '#ffffff'
	    },

	    warning: {
	      backgroundColor: defaultColors.warning.hex,
	      color: '#ffffff'
	    },

	    info: {
	      backgroundColor: defaultColors.info.hex,
	      color: '#ffffff'
	    }
	  },

	  ActionWrapper: {
	    DefaultStyle: {
	      margin: 0,
	      padding: 0
	    }
	  }
	};

	module.exports = STYLES;

/***/ })
/******/ ])
});
;