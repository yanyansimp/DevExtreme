import resizeCallbacks from '__internal/core/utils/m_resize_callbacks';
import domAdapter from '__internal/core/m_dom_adapter';
import windowUtils from '__internal/core/utils/m_window';

QUnit.module('resizeCallbacks', {
    beforeEach: function() {
        const test = this;

        const fakeWindow = {
            innerHeight: 300,
            innerWidth: 400
        };
        fakeWindow.window = fakeWindow;
        test.fakeWindow = fakeWindow;

        windowUtils.setWindow(fakeWindow, true);

        test.__originalListener = domAdapter.listen;

        const resizeHandlers = [];
        domAdapter.listen = function(element, event, handler) {
            if(element.window === element && event === 'resize') {
                resizeHandlers.push(handler);
            }
        };

        this.callbacks = resizeCallbacks;

        this.triggerResize = function() {
            if(!arguments.length || arguments[0]) {
                ++fakeWindow.innerWidth;
                ++fakeWindow.innerHeight;
            }
            resizeHandlers.forEach(function(handler) {
                handler();
            });
        };
        this.callbacks.add(function() { });
        this.triggerResize(); //  to reset size cache
    },
    afterEach: function() {
        windowUtils.setWindow(window);
        domAdapter.listen = this.__originalListener;
        delete this.__originalListener;
        delete this.fakeWindow;
        delete this.callbacks;
        this.triggerResize(); //  to reset size cache
        delete this.triggerResize;
    }
});

QUnit.test('Callback is called on window resize', function(assert) {
    let called = false;
    this.callbacks.add(function() {
        called = true;
    });

    this.triggerResize();

    assert.ok(called, 'callback is called');
});

QUnit.test('Callback is called for each resize for multiple resizes', function(assert) {
    let callCount = 0;
    this.callbacks.add(function() {
        ++callCount;
    });

    this.triggerResize();
    this.triggerResize();
    this.triggerResize();

    assert.strictEqual(callCount, 3, 'callback is called 3 times');
});

QUnit.test('Callback is not called if size is not changed', function(assert) {
    let called = false;
    this.callbacks.add(function() {
        called = true;
    });

    this.triggerResize(false);

    assert.ok(!called, 'callback is not called');
});

QUnit.test('Callback is called if window innerHeight is changed (T834502)', function(assert) {
    const spy = sinon.spy();
    this.callbacks.add(spy);

    try {
        sinon.stub(windowUtils, 'getWindow').returns({ innerHeight: 100, innerWidth: 200 });

        this.triggerResize(false);

        assert.strictEqual(spy.callCount, 1, 'callback is called');
    } finally {
        windowUtils.getWindow.restore();
        this.callbacks.remove(spy);
    }
});

QUnit.test('add', function(assert) {
    let called1 = false;
    let called2 = false;
    let called3 = false;
    this.callbacks.add(function() {
        called1 = true;
    }).add(function() {
        called2 = true;
    }).add(function() {
        called3 = true;
    });

    this.triggerResize();

    assert.ok(called1, 'callback1 is called');
    assert.ok(called2, 'callback2 is called');
    assert.ok(called3, 'callback3 is called');
});

QUnit.test('remove', function(assert) {
    let callCount1 = 0;
    let callCount2 = 0;
    const callback1 = function() { ++callCount1; };
    const callback2 = function() { ++callCount2; };
    this.callbacks.add(callback1).add(callback2);

    this.triggerResize();
    this.callbacks.remove(callback1);
    this.triggerResize();

    assert.strictEqual(callCount1, 1, 'callback1 is called 1 time');
    assert.strictEqual(callCount2, 2, 'callback2 is called 2 times');
});

QUnit.test('has', function(assert) {
    const callback1 = function() { };
    const callback2 = function() { };
    this.callbacks.add(callback1).add(callback2);

    assert.ok(this.callbacks.has(callback1), 'has callback1');
    assert.ok(this.callbacks.has(callback2), 'has callback2');

    this.callbacks.remove(callback1);
    assert.ok(!this.callbacks.has(callback1), 'does not have callback1');
    assert.ok(this.callbacks.has(callback2), 'has callback2');

    this.callbacks.remove(callback2);
    assert.ok(!this.callbacks.has(callback1), 'does not have callback1');
    assert.ok(!this.callbacks.has(callback2), 'does not have callback2');
});

QUnit.test('add - one callback several times', function(assert) {
    let callCount = 0;
    const callback = function() { ++callCount; };

    this.callbacks.add(callback).add(callback).add(callback);
    this.triggerResize();

    assert.strictEqual(callCount, 3, 'callback is called 3 times');
});

QUnit.test('remove - one callback several times', function(assert) {
    let callCount = 0;
    const callback = function() { ++callCount; };
    this.callbacks.add(callback);

    this.callbacks.remove(callback).remove(callback).remove(callback);
    this.triggerResize();

    assert.strictEqual(callCount, 0, 'callback is not called');
});

QUnit.test('callbacks should be fired with changed dimensions', function(assert) {
    const callback = sinon.spy();
    this.callbacks.add(callback);

    callback.resetHistory();
    this.fakeWindow.innerWidth = 500;
    this.triggerResize(false);

    assert.ok(callback.calledWith('width'), 'callback is called for width only');

    callback.resetHistory();
    this.fakeWindow.innerHeight = 500;
    this.triggerResize(false);

    assert.ok(callback.calledWith('height'), 'callback is called for height only');
});
