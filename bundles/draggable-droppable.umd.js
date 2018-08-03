(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('draggable-droppable', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global['draggable-droppable'] = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common));
}(this, (function (exports,i0,rxjs,operators,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableDroppableService = (function () {
        function DraggableDroppableService() {
        }
        DraggableDroppableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        DraggableDroppableService.ctorParameters = function () { return []; };
        /** @nocollapse */ DraggableDroppableService.ngInjectableDef = i0.defineInjectable({ factory: function DraggableDroppableService_Factory() { return new DraggableDroppableService(); }, token: DraggableDroppableService, providedIn: "root" });
        return DraggableDroppableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableDroppableComponent = (function () {
        function DraggableDroppableComponent() {
        }
        /**
         * @return {?}
         */
        DraggableDroppableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DraggableDroppableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mwl-draggable-droppable',
                        template: "\n    <p>\n      draggable-droppable works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        DraggableDroppableComponent.ctorParameters = function () { return []; };
        return DraggableDroppableComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableHelper = (function () {
        function DraggableHelper() {
            this.currentDrag = new rxjs.Subject();
        }
        DraggableHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ DraggableHelper.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
        return DraggableHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableScrollContainerDirective = (function () {
        function DraggableScrollContainerDirective(elementRef) {
            this.elementRef = elementRef;
        }
        DraggableScrollContainerDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mwlDraggableScrollContainer]'
                    },] },
        ];
        /** @nocollapse */
        DraggableScrollContainerDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        return DraggableScrollContainerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableDirective = (function () {
        /**
         * @hidden
         */
        function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
            this.element = element;
            this.renderer = renderer;
            this.draggableHelper = draggableHelper;
            this.zone = zone;
            this.vcr = vcr;
            this.scrollContainer = scrollContainer;
            this.document = document;
            /**
             * The axis along which the element is draggable
             */
            this.dragAxis = { x: true, y: true };
            /**
             * Snap all drags to an x / y grid
             */
            this.dragSnapGrid = {};
            /**
             * Show a ghost element that shows the drag when dragging
             */
            this.ghostDragEnabled = true;
            /**
             * Show the original element when ghostDragEnabled is true
             */
            this.showOriginalElementWhileDragging = false;
            /**
             * The cursor to use when dragging the element
             */
            this.dragCursor = '';
            /**
             * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
             */
            this.dragPointerDown = new i0.EventEmitter();
            /**
             * Called when the element has started to be dragged.
             * Only called after at least one mouse or touch move event.
             * If you call $event.cancelDrag$.emit() it will cancel the current drag
             */
            this.dragStart = new i0.EventEmitter();
            /**
             * Called after the ghost element has been created
             */
            this.ghostElementCreated = new i0.EventEmitter();
            /**
             * Called when the element is being dragged
             */
            this.dragging = new i0.EventEmitter();
            /**
             * Called after the element is dragged
             */
            this.dragEnd = new i0.EventEmitter();
            /**
             * @hidden
             */
            this.pointerDown$ = new rxjs.Subject();
            /**
             * @hidden
             */
            this.pointerMove$ = new rxjs.Subject();
            /**
             * @hidden
             */
            this.pointerUp$ = new rxjs.Subject();
            this.eventListenerSubscriptions = {};
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        DraggableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.checkEventListeners();
                /** @type {?} */
                var pointerDragged$ = this.pointerDown$.pipe(operators.filter(function () { return _this.canDrag(); }), operators.mergeMap(function (pointerDownEvent) {
                    /** @type {?} */
                    var globalDragStyle = _this.renderer.createElement('style');
                    _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
                    _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));
                    _this.document.head.appendChild(globalDragStyle);
                    /** @type {?} */
                    var startScrollPosition = _this.getScrollPosition();
                    /** @type {?} */
                    var scrollContainerScroll$ = new rxjs.Observable(function (observer) {
                        /** @type {?} */
                        var scrollContainer = _this.scrollContainer
                            ? _this.scrollContainer.elementRef.nativeElement
                            : 'window';
                        return _this.renderer.listen(scrollContainer, 'scroll', function (e) {
                            return observer.next(e);
                        });
                    }).pipe(operators.startWith(startScrollPosition), operators.map(function () { return _this.getScrollPosition(); }));
                    /** @type {?} */
                    var currentDrag$ = new rxjs.Subject();
                    /** @type {?} */
                    var cancelDrag$ = new rxjs.ReplaySubject();
                    _this.zone.run(function () {
                        _this.dragPointerDown.next({ x: 0, y: 0 });
                    });
                    /** @type {?} */
                    var dragComplete$ = rxjs.merge(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe(operators.share());
                    /** @type {?} */
                    var pointerMove = rxjs.combineLatest(_this.pointerMove$, scrollContainerScroll$).pipe(operators.map(function (_a) {
                        var _b = __read(_a, 2), pointerMoveEvent = _b[0], scroll = _b[1];
                        return {
                            currentDrag$: currentDrag$,
                            transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                            transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                            clientX: pointerMoveEvent.clientX,
                            clientY: pointerMoveEvent.clientY,
                            scrollLeft: scroll.left,
                            scrollTop: scroll.top
                        };
                    }), operators.map(function (moveData) {
                        if (_this.dragSnapGrid.x) {
                            moveData.transformX =
                                Math.round(moveData.transformX / _this.dragSnapGrid.x) *
                                    _this.dragSnapGrid.x;
                        }
                        if (_this.dragSnapGrid.y) {
                            moveData.transformY =
                                Math.round(moveData.transformY / _this.dragSnapGrid.y) *
                                    _this.dragSnapGrid.y;
                        }
                        return moveData;
                    }), operators.map(function (moveData) {
                        if (!_this.dragAxis.x) {
                            moveData.transformX = 0;
                        }
                        if (!_this.dragAxis.y) {
                            moveData.transformY = 0;
                        }
                        return moveData;
                    }), operators.map(function (moveData) {
                        /** @type {?} */
                        var scrollX = moveData.scrollLeft - startScrollPosition.left;
                        /** @type {?} */
                        var scrollY = moveData.scrollTop - startScrollPosition.top;
                        return __assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
                    }), operators.filter(function (_a) {
                        var x = _a.x, y = _a.y;
                        return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
                    }), operators.takeUntil(dragComplete$), operators.share());
                    /** @type {?} */
                    var dragStarted$ = pointerMove.pipe(operators.take(1), operators.share());
                    /** @type {?} */
                    var dragEnded$ = pointerMove.pipe(operators.takeLast(1), operators.share());
                    dragStarted$.subscribe(function () {
                        _this.zone.run(function () {
                            _this.dragStart.next({ cancelDrag$: cancelDrag$ });
                        });
                        _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
                        if (_this.ghostDragEnabled) {
                            /** @type {?} */
                            var rect = _this.element.nativeElement.getBoundingClientRect();
                            /** @type {?} */
                            var clone_1 = (_this.element.nativeElement.cloneNode(true));
                            if (!_this.showOriginalElementWhileDragging) {
                                _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
                            }
                            if (_this.ghostElementAppendTo) {
                                _this.ghostElementAppendTo.appendChild(clone_1);
                            }
                            else {
                                /** @type {?} */ ((_this.element.nativeElement.parentNode)).insertBefore(clone_1, _this.element.nativeElement.nextSibling);
                            }
                            _this.ghostElement = clone_1;
                            _this.setElementStyles(clone_1, {
                                position: 'fixed',
                                top: rect.top + "px",
                                left: rect.left + "px",
                                width: rect.width + "px",
                                height: rect.height + "px",
                                cursor: _this.dragCursor,
                                margin: '0'
                            });
                            if (_this.ghostElementTemplate) {
                                /** @type {?} */
                                var viewRef_1 = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);
                                clone_1.innerHTML = '';
                                viewRef_1.rootNodes
                                    .filter(function (node) { return node instanceof Node; })
                                    .forEach(function (node) {
                                    clone_1.appendChild(node);
                                });
                                dragEnded$.subscribe(function () {
                                    _this.vcr.remove(_this.vcr.indexOf(viewRef_1));
                                });
                            }
                            _this.zone.run(function () {
                                _this.ghostElementCreated.emit();
                            });
                            dragEnded$.subscribe(function () {
                                /** @type {?} */ ((clone_1.parentElement)).removeChild(clone_1);
                                _this.ghostElement = null;
                                _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
                            });
                        }
                        _this.draggableHelper.currentDrag.next(currentDrag$);
                    });
                    dragEnded$
                        .pipe(operators.mergeMap(function (dragEndData) {
                        /** @type {?} */
                        var dragEndData$ = cancelDrag$.pipe(operators.count(), operators.take(1), operators.map(function (calledCount) { return (__assign({}, dragEndData, { dragCancelled: calledCount > 0 })); }));
                        cancelDrag$.complete();
                        return dragEndData$;
                    }))
                        .subscribe(function (_a) {
                        var x = _a.x, y = _a.y, dragCancelled = _a.dragCancelled;
                        _this.zone.run(function () {
                            _this.dragEnd.next({ x: x, y: y, dragCancelled: dragCancelled });
                        });
                        _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                        currentDrag$.complete();
                    });
                    rxjs.merge(dragComplete$, dragEnded$)
                        .pipe(operators.take(1))
                        .subscribe(function () {
                        _this.document.head.removeChild(globalDragStyle);
                    });
                    return pointerMove;
                }), operators.share());
                rxjs.merge(pointerDragged$.pipe(operators.take(1), operators.map(function (value) { return [, value]; })), pointerDragged$.pipe(operators.pairwise()))
                    .pipe(operators.filter(function (_a) {
                    var _b = __read(_a, 2), previous = _b[0], next = _b[1];
                    if (!previous) {
                        return true;
                    }
                    return previous.x !== next.x || previous.y !== next.y;
                }), operators.map(function (_a) {
                    var _b = __read(_a, 2), previous = _b[0], next = _b[1];
                    return next;
                }))
                    .subscribe(function (_a) {
                    var x = _a.x, y = _a.y, currentDrag$ = _a.currentDrag$, clientX = _a.clientX, clientY = _a.clientY, transformX = _a.transformX, transformY = _a.transformY;
                    _this.zone.run(function () {
                        _this.dragging.next({ x: x, y: y });
                    });
                    if (_this.ghostElement) {
                        /** @type {?} */
                        var transform = "translate(" + transformX + "px, " + transformY + "px)";
                        _this.setElementStyles(_this.ghostElement, {
                            transform: transform,
                            '-webkit-transform': transform,
                            '-ms-transform': transform,
                            '-moz-transform': transform,
                            '-o-transform': transform
                        });
                    }
                    currentDrag$.next({
                        clientX: clientX,
                        clientY: clientY,
                        dropData: _this.dropData
                    });
                });
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        DraggableDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["dragAxis"]) {
                    this.checkEventListeners();
                }
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribeEventListeners();
                this.pointerDown$.complete();
                this.pointerMove$.complete();
                this.pointerUp$.complete();
                this.destroy$.next();
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.checkEventListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var canDrag = this.canDrag();
                /** @type {?} */
                var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
                if (canDrag && !hasEventListeners) {
                    this.zone.runOutsideAngular(function () {
                        _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                            _this.onMouseDown(event);
                        });
                        _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                            _this.onMouseUp(event);
                        });
                        _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                            _this.onTouchStart(event);
                        });
                        _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                            _this.onTouchEnd(event);
                        });
                        _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                            _this.onTouchEnd(event);
                        });
                        _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                            _this.onMouseEnter();
                        });
                        _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                            _this.onMouseLeave();
                        });
                    });
                }
                else if (!canDrag && hasEventListeners) {
                    this.unsubscribeEventListeners();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.onMouseDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                if (!this.eventListenerSubscriptions.mousemove) {
                    this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                        _this.pointerMove$.next({
                            event: mouseMoveEvent,
                            clientX: mouseMoveEvent.clientX,
                            clientY: mouseMoveEvent.clientY
                        });
                    });
                }
                this.pointerDown$.next({
                    event: event,
                    clientX: event.clientX,
                    clientY: event.clientY
                });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.onMouseUp = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.eventListenerSubscriptions.mousemove) {
                    this.eventListenerSubscriptions.mousemove();
                    delete this.eventListenerSubscriptions.mousemove;
                }
                this.pointerUp$.next({
                    event: event,
                    clientX: event.clientX,
                    clientY: event.clientY
                });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.onTouchStart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                if (!this.eventListenerSubscriptions.touchmove) {
                    this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (touchMoveEvent) {
                        _this.pointerMove$.next({
                            event: touchMoveEvent,
                            clientX: touchMoveEvent.targetTouches[0].clientX,
                            clientY: touchMoveEvent.targetTouches[0].clientY
                        });
                    });
                }
                this.pointerDown$.next({
                    event: event,
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY
                });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.onTouchEnd = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.eventListenerSubscriptions.touchmove) {
                    this.eventListenerSubscriptions.touchmove();
                    delete this.eventListenerSubscriptions.touchmove;
                }
                this.pointerUp$.next({
                    event: event,
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY
                });
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.onMouseEnter = /**
         * @return {?}
         */
            function () {
                this.setCursor(this.dragCursor);
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.onMouseLeave = /**
         * @return {?}
         */
            function () {
                this.setCursor('');
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.canDrag = /**
         * @return {?}
         */
            function () {
                return this.dragAxis.x || this.dragAxis.y;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DraggableDirective.prototype.setCursor = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.unsubscribeEventListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
                    ((_this)).eventListenerSubscriptions[type]();
                    delete ((_this)).eventListenerSubscriptions[type];
                });
            };
        /**
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */
        DraggableDirective.prototype.setElementStyles = /**
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */
            function (element, styles) {
                var _this = this;
                Object.keys(styles).forEach(function (key) {
                    _this.renderer.setStyle(element, key, styles[key]);
                });
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.getScrollPosition = /**
         * @return {?}
         */
            function () {
                if (this.scrollContainer) {
                    return {
                        top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                        left: this.scrollContainer.elementRef.nativeElement.scrollLeft
                    };
                }
                else {
                    return {
                        top: window.pageYOffset || document.documentElement.scrollTop,
                        left: window.pageXOffset || document.documentElement.scrollLeft
                    };
                }
            };
        DraggableDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mwlDraggable]'
                    },] },
        ];
        /** @nocollapse */
        DraggableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: DraggableHelper },
                { type: i0.NgZone },
                { type: i0.ViewContainerRef },
                { type: DraggableScrollContainerDirective, decorators: [{ type: i0.Optional }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        DraggableDirective.propDecorators = {
            dropData: [{ type: i0.Input }],
            dragAxis: [{ type: i0.Input }],
            dragSnapGrid: [{ type: i0.Input }],
            ghostDragEnabled: [{ type: i0.Input }],
            showOriginalElementWhileDragging: [{ type: i0.Input }],
            validateDrag: [{ type: i0.Input }],
            dragCursor: [{ type: i0.Input }],
            dragActiveClass: [{ type: i0.Input }],
            ghostElementAppendTo: [{ type: i0.Input }],
            ghostElementTemplate: [{ type: i0.Input }],
            dragPointerDown: [{ type: i0.Output }],
            dragStart: [{ type: i0.Output }],
            ghostElementCreated: [{ type: i0.Output }],
            dragging: [{ type: i0.Output }],
            dragEnd: [{ type: i0.Output }]
        };
        return DraggableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} clientX
     * @param {?} clientY
     * @param {?} rect
     * @return {?}
     */
    function isCoordinateWithinRectangle(clientX, clientY, rect) {
        return (clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom);
    }
    var DroppableDirective = (function () {
        function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
            this.element = element;
            this.draggableHelper = draggableHelper;
            this.zone = zone;
            this.renderer = renderer;
            this.scrollContainer = scrollContainer;
            /**
             * Called when a draggable element starts overlapping the element
             */
            this.dragEnter = new i0.EventEmitter();
            /**
             * Called when a draggable element stops overlapping the element
             */
            this.dragLeave = new i0.EventEmitter();
            /**
             * Called when a draggable element is moved over the element
             */
            this.dragOver = new i0.EventEmitter();
            /**
             * Called when a draggable element is dropped on this element
             */
            this.drop = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        DroppableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag$) {
                    _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
                    /** @type {?} */
                    var droppableElement = {
                        updateCache: true
                    };
                    /** @type {?} */
                    var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
                        ? _this.scrollContainer.elementRef.nativeElement
                        : 'window', 'scroll', function () {
                        droppableElement.updateCache = true;
                    });
                    /** @type {?} */
                    var currentDragDropData;
                    /** @type {?} */
                    var overlaps$ = drag$.pipe(operators.map(function (_a) {
                        var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                        currentDragDropData = dropData;
                        if (droppableElement.updateCache) {
                            droppableElement.rect = _this.element.nativeElement.getBoundingClientRect();
                            if (_this.scrollContainer) {
                                droppableElement.scrollContainerRect = _this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                            }
                            droppableElement.updateCache = false;
                        }
                        /** @type {?} */
                        var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, /** @type {?} */ (droppableElement.rect));
                        if (droppableElement.scrollContainerRect) {
                            return (isWithinElement &&
                                isCoordinateWithinRectangle(clientX, clientY, /** @type {?} */ (droppableElement.scrollContainerRect)));
                        }
                        else {
                            return isWithinElement;
                        }
                    }));
                    /** @type {?} */
                    var overlapsChanged$ = overlaps$.pipe(operators.distinctUntilChanged());
                    /** @type {?} */
                    var dragOverActive; // TODO - see if there's a way of doing this via rxjs
                    overlapsChanged$
                        .pipe(operators.filter(function (overlapsNow) { return overlapsNow; }))
                        .subscribe(function () {
                        dragOverActive = true;
                        _this.renderer.addClass(_this.element.nativeElement, _this.dragOverClass);
                        _this.zone.run(function () {
                            _this.dragEnter.next({
                                dropData: currentDragDropData
                            });
                        });
                    });
                    overlaps$.pipe(operators.filter(function (overlapsNow) { return overlapsNow; })).subscribe(function () {
                        _this.zone.run(function () {
                            _this.dragOver.next({
                                dropData: currentDragDropData
                            });
                        });
                    });
                    overlapsChanged$
                        .pipe(operators.pairwise(), operators.filter(function (_a) {
                        var _b = __read(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                        return didOverlap && !overlapsNow;
                    }))
                        .subscribe(function () {
                        dragOverActive = false;
                        _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                        _this.zone.run(function () {
                            _this.dragLeave.next({
                                dropData: currentDragDropData
                            });
                        });
                    });
                    drag$.subscribe({
                        complete: function () {
                            deregisterScrollListener();
                            _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                            if (dragOverActive) {
                                _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                                _this.zone.run(function () {
                                    _this.drop.next({
                                        dropData: currentDragDropData
                                    });
                                });
                            }
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DroppableDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.currentDragSubscription) {
                    this.currentDragSubscription.unsubscribe();
                }
            };
        DroppableDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mwlDroppable]'
                    },] },
        ];
        /** @nocollapse */
        DroppableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DraggableHelper },
                { type: i0.NgZone },
                { type: i0.Renderer2 },
                { type: DraggableScrollContainerDirective, decorators: [{ type: i0.Optional }] }
            ];
        };
        DroppableDirective.propDecorators = {
            dragOverClass: [{ type: i0.Input }],
            dragActiveClass: [{ type: i0.Input }],
            dragEnter: [{ type: i0.Output }],
            dragLeave: [{ type: i0.Output }],
            dragOver: [{ type: i0.Output }],
            drop: [{ type: i0.Output }]
        };
        return DroppableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DraggableDroppableModule = (function () {
        function DraggableDroppableModule() {
        }
        DraggableDroppableModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [
                            DraggableDroppableComponent,
                            DraggableDirective,
                            DroppableDirective,
                            DraggableScrollContainerDirective
                        ],
                        exports: [
                            DraggableDroppableComponent,
                            DraggableDirective,
                            DroppableDirective,
                            DraggableScrollContainerDirective
                        ]
                    },] },
        ];
        return DraggableDroppableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DraggableDroppableService = DraggableDroppableService;
    exports.DraggableDroppableComponent = DraggableDroppableComponent;
    exports.DraggableDroppableModule = DraggableDroppableModule;
    exports.ɵb = DraggableHelper;
    exports.ɵc = DraggableScrollContainerDirective;
    exports.ɵa = DraggableDirective;
    exports.ɵd = DroppableDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWRyb3BwYWJsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2RyYWdnYWJsZS1kcm9wcGFibGUvbGliL2RyYWdnYWJsZS1kcm9wcGFibGUuc2VydmljZS50cyIsIm5nOi8vZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLWRyb3BwYWJsZS5jb21wb25lbnQudHMiLG51bGwsIm5nOi8vZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci50cyIsIm5nOi8vZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcm9wcGFibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcmFnZ2FibGUtZHJvcHBhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURyb3BwYWJsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtZHJhZ2dhYmxlLWRyb3BwYWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBkcmFnZ2FibGUtZHJvcHBhYmxlIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEcm9wcGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudERyYWdEYXRhIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGRyb3BEYXRhOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhlbHBlciB7XG4gIGN1cnJlbnREcmFnID0gbmV3IFN1YmplY3Q8U3ViamVjdDxDdXJyZW50RHJhZ0RhdGE+PigpO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVTY3JvbGxDb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHt9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIFJlcGxheVN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRha2VVbnRpbCxcbiAgdGFrZSxcbiAgdGFrZUxhc3QsXG4gIHBhaXJ3aXNlLFxuICBzaGFyZSxcbiAgZmlsdGVyLFxuICBjb3VudCxcbiAgc3RhcnRXaXRoXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnREcmFnRGF0YSwgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdBeGlzIHtcbiAgeDogYm9vbGVhbjtcbiAgeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1BvaW50ZXJEb3duRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEV2ZW50IHtcbiAgY2FuY2VsRHJhZyQ6IFJlcGxheVN1YmplY3Q8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ01vdmVFdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0VuZEV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICBkcmFnQ2FuY2VsbGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBWYWxpZGF0ZURyYWcgPSAoY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJFdmVudCB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIGFuIG9iamVjdCBvZiBkYXRhIHlvdSBjYW4gcGFzcyB0byB0aGUgZHJvcCBldmVudFxuICAgKi9cbiAgQElucHV0KCkgZHJvcERhdGE6IGFueTtcblxuICAvKipcbiAgICogVGhlIGF4aXMgYWxvbmcgd2hpY2ggdGhlIGVsZW1lbnQgaXMgZHJhZ2dhYmxlXG4gICAqL1xuICBASW5wdXQoKSBkcmFnQXhpczogRHJhZ0F4aXMgPSB7IHg6IHRydWUsIHk6IHRydWUgfTtcblxuICAvKipcbiAgICogU25hcCBhbGwgZHJhZ3MgdG8gYW4geCAvIHkgZ3JpZFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ1NuYXBHcmlkOiBTbmFwR3JpZCA9IHt9O1xuXG4gIC8qKlxuICAgKiBTaG93IGEgZ2hvc3QgZWxlbWVudCB0aGF0IHNob3dzIHRoZSBkcmFnIHdoZW4gZHJhZ2dpbmdcbiAgICovXG4gIEBJbnB1dCgpIGdob3N0RHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBvcmlnaW5hbCBlbGVtZW50IHdoZW4gZ2hvc3REcmFnRW5hYmxlZCBpcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKSBzaG93T3JpZ2luYWxFbGVtZW50V2hpbGVEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBjdXN0b20gYmVoYXZpb3VyIHRvIGNvbnRyb2wgd2hlbiB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcblxuICAvKipcbiAgICogVGhlIGN1cnNvciB0byB1c2Ugd2hlbiBkcmFnZ2luZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ0N1cnNvcjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgdG8gYXBwbHkgd2hlbiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKSBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhlIGdob3N0IGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZCB0by4gRGVmYXVsdCBpcyBuZXh0IHRvIHRoZSBkcmFnZ2VkIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIGdob3N0RWxlbWVudEFwcGVuZFRvOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogQW4gbmctdGVtcGxhdGUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhlIGdob3N0IGVsZW1lbnQuIEl0IHdpbGwgb3ZlcndyaXRlIGFueSBjaGlsZCBub2Rlcy5cbiAgICovXG4gIEBJbnB1dCgpIGdob3N0RWxlbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBjYW4gYmUgZHJhZ2dlZCBhbG9uZyBvbmUgYXhpcyBhbmQgaGFzIHRoZSBtb3VzZSBvciBwb2ludGVyIGRldmljZSBwcmVzc2VkIG9uIGl0XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ1BvaW50ZXJEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9pbnRlckRvd25FdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaGFzIHN0YXJ0ZWQgdG8gYmUgZHJhZ2dlZC5cbiAgICogT25seSBjYWxsZWQgYWZ0ZXIgYXQgbGVhc3Qgb25lIG1vdXNlIG9yIHRvdWNoIG1vdmUgZXZlbnQuXG4gICAqIElmIHlvdSBjYWxsICRldmVudC5jYW5jZWxEcmFnJC5lbWl0KCkgaXQgd2lsbCBjYW5jZWwgdGhlIGN1cnJlbnQgZHJhZ1xuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZ2hvc3QgZWxlbWVudCBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZ2hvc3RFbGVtZW50Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdnaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnTW92ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFbmRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlckRvd24kID0gbmV3IFN1YmplY3Q8UG9pbnRlckV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyTW92ZSQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJVcCQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyU3Vic2NyaXB0aW9uczoge1xuICAgIG1vdXNlbW92ZT86ICgpID0+IHZvaWQ7XG4gICAgbW91c2Vkb3duPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZXVwPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWVudGVyPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWxlYXZlPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaHN0YXJ0PzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaG1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoZW5kPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaGNhbmNlbD86ICgpID0+IHZvaWQ7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGdob3N0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHBvaW50ZXJEcmFnZ2VkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5wb2ludGVyRG93biQucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhbkRyYWcoKSksXG4gICAgICBtZXJnZU1hcCgocG9pbnRlckRvd25FdmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGhhY2sgdG8gcHJldmVudCB0ZXh0IGdldHRpbmcgc2VsZWN0ZWQgaW4gc2FmYXJpIHdoaWxlIGRyYWdnaW5nXG4gICAgICAgIGNvbnN0IGdsb2JhbERyYWdTdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3R5bGUnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGdsb2JhbERyYWdTdHlsZSwgJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChcbiAgICAgICAgICBnbG9iYWxEcmFnU3R5bGUsXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGBcbiAgICAgICAgICBib2R5ICoge1xuICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbERyYWdTdHlsZSk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRTY3JvbGxQb3NpdGlvbiA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXJTY3JvbGwkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyXG4gICAgICAgICAgICA/IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgOiAnd2luZG93JztcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0ZW4oc2Nyb2xsQ29udGFpbmVyLCAnc2Nyb2xsJywgZSA9PlxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHN0YXJ0U2Nyb2xsUG9zaXRpb24pLFxuICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERyYWckID0gbmV3IFN1YmplY3Q8Q3VycmVudERyYWdEYXRhPigpO1xuICAgICAgICBjb25zdCBjYW5jZWxEcmFnJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnUG9pbnRlckRvd24ubmV4dCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRyYWdDb21wbGV0ZSQgPSBtZXJnZShcbiAgICAgICAgICB0aGlzLnBvaW50ZXJVcCQsXG4gICAgICAgICAgdGhpcy5wb2ludGVyRG93biQsXG4gICAgICAgICAgY2FuY2VsRHJhZyQsXG4gICAgICAgICAgdGhpcy5kZXN0cm95JFxuICAgICAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlck1vdmUgPSBjb21iaW5lTGF0ZXN0PFxuICAgICAgICAgIFBvaW50ZXJFdmVudCxcbiAgICAgICAgICB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfVxuICAgICAgICA+KHRoaXMucG9pbnRlck1vdmUkLCBzY3JvbGxDb250YWluZXJTY3JvbGwkKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3BvaW50ZXJNb3ZlRXZlbnQsIHNjcm9sbF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGN1cnJlbnREcmFnJCxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtWDogcG9pbnRlck1vdmVFdmVudC5jbGllbnRYIC0gcG9pbnRlckRvd25FdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1ZOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFkgLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgIGNsaWVudFg6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogcG9pbnRlck1vdmVFdmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGwubGVmdCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGwudG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcChtb3ZlRGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnU25hcEdyaWQueCkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1YID1cbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG1vdmVEYXRhLnRyYW5zZm9ybVggLyB0aGlzLmRyYWdTbmFwR3JpZC54KSAqXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU25hcEdyaWQueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLnkpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWSA9XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChtb3ZlRGF0YS50cmFuc2Zvcm1ZIC8gdGhpcy5kcmFnU25hcEdyaWQueSkgKlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb3ZlRGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAobW92ZURhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdBeGlzLngpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQXhpcy55KSB7XG4gICAgICAgICAgICAgIG1vdmVEYXRhLnRyYW5zZm9ybVkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbW92ZURhdGE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKG1vdmVEYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFggPSBtb3ZlRGF0YS5zY3JvbGxMZWZ0IC0gc3RhcnRTY3JvbGxQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IG1vdmVEYXRhLnNjcm9sbFRvcCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24udG9wO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ubW92ZURhdGEsXG4gICAgICAgICAgICAgIHg6IG1vdmVEYXRhLnRyYW5zZm9ybVggKyBzY3JvbGxYLFxuICAgICAgICAgICAgICB5OiBtb3ZlRGF0YS50cmFuc2Zvcm1ZICsgc2Nyb2xsWVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAoeyB4LCB5IH0pID0+ICF0aGlzLnZhbGlkYXRlRHJhZyB8fCB0aGlzLnZhbGlkYXRlRHJhZyh7IHgsIHkgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2VVbnRpbChkcmFnQ29tcGxldGUkKSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZHJhZ1N0YXJ0ZWQkID0gcG9pbnRlck1vdmUucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZHJhZ0VuZGVkJCA9IHBvaW50ZXJNb3ZlLnBpcGUoXG4gICAgICAgICAgdGFrZUxhc3QoMSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIGRyYWdTdGFydGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnQubmV4dCh7IGNhbmNlbERyYWckIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5kcmFnQWN0aXZlQ2xhc3NcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ2hvc3REcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUoXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvd09yaWdpbmFsRWxlbWVudFdoaWxlRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50QXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRBcHBlbmRUby5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgY2xvbmUsXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSBjbG9uZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGVzKGNsb25lLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB0b3A6IGAke3JlY3QudG9wfXB4YCxcbiAgICAgICAgICAgICAgbGVmdDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3JlY3Qud2lkdGh9cHhgLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmRyYWdDdXJzb3IsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudFRlbXBsYXRlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNsb25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICB2aWV3UmVmLnJvb3ROb2Rlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlIGluc3RhbmNlb2YgTm9kZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIGNsb25lLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBkcmFnRW5kZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52Y3IucmVtb3ZlKHRoaXMudmNyLmluZGV4T2Yodmlld1JlZikpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50Q3JlYXRlZC5lbWl0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZHJhZ0VuZGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBjbG9uZS5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlSGVscGVyLmN1cnJlbnREcmFnLm5leHQoY3VycmVudERyYWckKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZHJhZ0VuZGVkJFxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWVyZ2VNYXAoZHJhZ0VuZERhdGEgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW5kRGF0YSQgPSBjYW5jZWxEcmFnJC5waXBlKFxuICAgICAgICAgICAgICAgIGNvdW50KCksXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoY2FsbGVkQ291bnQgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLmRyYWdFbmREYXRhLFxuICAgICAgICAgICAgICAgICAgZHJhZ0NhbmNlbGxlZDogY2FsbGVkQ291bnQgPiAwXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNhbmNlbERyYWckLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBkcmFnRW5kRGF0YSQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCh7IHgsIHksIGRyYWdDYW5jZWxsZWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5uZXh0KHsgeCwgeSwgZHJhZ0NhbmNlbGxlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0FjdGl2ZUNsYXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudERyYWckLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgbWVyZ2UoZHJhZ0NvbXBsZXRlJCwgZHJhZ0VuZGVkJClcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGdsb2JhbERyYWdTdHlsZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50ZXJNb3ZlO1xuICAgICAgfSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIG1lcmdlKFxuICAgICAgcG9pbnRlckRyYWdnZWQkLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCh2YWx1ZSA9PiBbLCB2YWx1ZV0pXG4gICAgICApLFxuICAgICAgcG9pbnRlckRyYWdnZWQkLnBpcGUocGFpcndpc2UoKSlcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChbcHJldmlvdXMsIG5leHRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2aW91cy54ICE9PSBuZXh0LnggfHwgcHJldmlvdXMueSAhPT0gbmV4dC55O1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbcHJldmlvdXMsIG5leHRdKSA9PiBuZXh0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHsgeCwgeSwgY3VycmVudERyYWckLCBjbGllbnRYLCBjbGllbnRZLCB0cmFuc2Zvcm1YLCB0cmFuc2Zvcm1ZIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcubmV4dCh7IHgsIHkgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNmb3JtWH1weCwgJHt0cmFuc2Zvcm1ZfXB4KWA7XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZXModGhpcy5naG9zdEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiB0cmFuc2Zvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50RHJhZyQubmV4dCh7XG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGRyb3BEYXRhOiB0aGlzLmRyb3BEYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZHJhZ0F4aXMpIHtcbiAgICAgIHRoaXMuY2hlY2tFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMucG9pbnRlckRvd24kLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyTW92ZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnBvaW50ZXJVcCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBjYW5EcmFnOiBib29sZWFuID0gdGhpcy5jYW5EcmFnKCk7XG4gICAgY29uc3QgaGFzRXZlbnRMaXN0ZW5lcnM6IGJvb2xlYW4gPVxuICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucykubGVuZ3RoID4gMDtcblxuICAgIGlmIChjYW5EcmFnICYmICFoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWRvd24gPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNldXAgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaHN0YXJ0ID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNoZW5kID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGNhbmNlbCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2VlbnRlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdtb3VzZWVudGVyJyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VFbnRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbGVhdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFjYW5EcmFnICYmIGhhc0V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IG1vdXNlTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFk6IG1vdXNlTW92ZUV2ZW50LmNsaWVudFlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyRG93biQubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyVXAkLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgKHRvdWNoTW92ZUV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5wb2ludGVyTW92ZSQubmV4dCh7XG4gICAgICAgICAgICBldmVudDogdG91Y2hNb3ZlRXZlbnQsXG4gICAgICAgICAgICBjbGllbnRYOiB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZOiB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyRG93biQubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGNsaWVudFg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZSgpO1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlO1xuICAgIH1cbiAgICB0aGlzLnBvaW50ZXJVcCQubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcih0aGlzLmRyYWdDdXJzb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5EcmFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdBeGlzLnggfHwgdGhpcy5kcmFnQXhpcy55O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucykuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50U3R5bGVzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwga2V5LCBzdHlsZXNba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBwYWlyd2lzZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuXG5mdW5jdGlvbiBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gIGNsaWVudFg6IG51bWJlcixcbiAgY2xpZW50WTogbnVtYmVyLFxuICByZWN0OiBDbGllbnRSZWN0XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBjbGllbnRYID49IHJlY3QubGVmdCAmJlxuICAgIGNsaWVudFggPD0gcmVjdC5yaWdodCAmJlxuICAgIGNsaWVudFkgPj0gcmVjdC50b3AgJiZcbiAgICBjbGllbnRZIDw9IHJlY3QuYm90dG9tXG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEV2ZW50PFQgPSBhbnk+IHtcbiAgZHJvcERhdGE6IFQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcm9wcGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBZGRlZCB0byB0aGUgZWxlbWVudCB3aGVuIGFuIGVsZW1lbnQgaXMgZHJhZ2dlZCBvdmVyIGl0XG4gICAqL1xuICBASW5wdXQoKSBkcmFnT3ZlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFkZGVkIHRvIHRoZSBlbGVtZW50IGFueSB0aW1lIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ0FjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgc3RhcnRzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgc3RvcHMgb3ZlcmxhcHBpbmcgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBtb3ZlZCBvdmVyIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBkcm9wcGVkIG9uIHRoaXMgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1vdXRwdXQtbmFtZWQtYWZ0ZXItc3RhbmRhcmQtZXZlbnRcblxuICBjdXJyZW50RHJhZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBkcmFnZ2FibGVIZWxwZXI6IERyYWdnYWJsZUhlbHBlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBzY3JvbGxDb250YWluZXI6IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbiA9IHRoaXMuZHJhZ2dhYmxlSGVscGVyLmN1cnJlbnREcmFnLnN1YnNjcmliZShcbiAgICAgIGRyYWckID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLmRyYWdBY3RpdmVDbGFzc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBkcm9wcGFibGVFbGVtZW50OiB7XG4gICAgICAgICAgcmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IGJvb2xlYW47XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZXJlZ2lzdGVyU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgPyB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIDogJ3dpbmRvdycsXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjdXJyZW50RHJhZ0Ryb3BEYXRhOiBhbnk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBzJCA9IGRyYWckLnBpcGUoXG4gICAgICAgICAgbWFwKCh7IGNsaWVudFgsIGNsaWVudFksIGRyb3BEYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnREcmFnRHJvcERhdGEgPSBkcm9wRGF0YTtcbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnVwZGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQucmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNXaXRoaW5FbGVtZW50ID0gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpc1dpdGhpbkVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gICAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQuc2Nyb2xsQ29udGFpbmVyUmVjdCBhcyBDbGllbnRSZWN0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzV2l0aGluRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXBzQ2hhbmdlZCQgPSBvdmVybGFwcyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICBsZXQgZHJhZ092ZXJBY3RpdmU6IGJvb2xlYW47IC8vIFRPRE8gLSBzZWUgaWYgdGhlcmUncyBhIHdheSBvZiBkb2luZyB0aGlzIHZpYSByeGpzXG5cbiAgICAgICAgb3ZlcmxhcHNDaGFuZ2VkJFxuICAgICAgICAgIC5waXBlKGZpbHRlcihvdmVybGFwc05vdyA9PiBvdmVybGFwc05vdykpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnT3ZlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgdGhpcy5kcmFnT3ZlckNsYXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxhcHMkLnBpcGUoZmlsdGVyKG92ZXJsYXBzTm93ID0+IG92ZXJsYXBzTm93KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXIubmV4dCh7XG4gICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxhcHNDaGFuZ2VkJFxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICAgIGZpbHRlcigoW2RpZE92ZXJsYXAsIG92ZXJsYXBzTm93XSkgPT4gZGlkT3ZlcmxhcCAmJiAhb3ZlcmxhcHNOb3cpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ092ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyQ2xhc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnTGVhdmUubmV4dCh7XG4gICAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGFcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkcmFnJC5zdWJzY3JpYmUoe1xuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBkZXJlZ2lzdGVyU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICB0aGlzLmRyYWdBY3RpdmVDbGFzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkcmFnT3ZlckFjdGl2ZSkge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJDbGFzc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3AubmV4dCh7XG4gICAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHJhZ2dhYmxlRHJvcHBhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUtZHJvcHBhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcHBhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wcGFibGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERyYWdnYWJsZURyb3BwYWJsZUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmUsXG4gICAgRHJvcHBhYmxlRGlyZWN0aXZlLFxuICAgIERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHJhZ2dhYmxlRHJvcHBhYmxlQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRHJvcHBhYmxlTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIlN1YmplY3QiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiRXZlbnRFbWl0dGVyIiwiZmlsdGVyIiwibWVyZ2VNYXAiLCJPYnNlcnZhYmxlIiwic3RhcnRXaXRoIiwibWFwIiwiUmVwbGF5U3ViamVjdCIsIm1lcmdlIiwic2hhcmUiLCJjb21iaW5lTGF0ZXN0IiwidGFrZVVudGlsIiwidGFrZSIsInRha2VMYXN0IiwiY291bnQiLCJwYWlyd2lzZSIsIlJlbmRlcmVyMiIsIk5nWm9uZSIsIlZpZXdDb250YWluZXJSZWYiLCJPcHRpb25hbCIsIkluamVjdCIsIkRPQ1VNRU5UIiwiSW5wdXQiLCJPdXRwdXQiLCJkaXN0aW5jdFVudGlsQ2hhbmdlZCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3Q0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFF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