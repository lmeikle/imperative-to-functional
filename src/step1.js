/**
 * Step 1: Replace class by functions
 *
 * If you wanted to use this code as your module, you can simple add export at the end of your code:
 * export default {addEventListener, dispatchEvent};
 * And then import it and use it as a singleton:
 * import * as EM from './event-manager.js';
 * EM.dispatchEvent ('event');
 */

const eventMap = new Map();

function addEventListener(event, handler) {
  if (eventMap.has(event)) {
    eventMap.set(event, eventMap.get(event).concat([handler]));
  } else {
    eventMap.set(event, [handler]);
  }
}

function dispatchEvent(event) {
  if (eventMap.has(event)) {
    const handlers = eventMap.get(event);
    for (const i in handlers) {
      handlers[i]();
    }
  }
}

addEventListener("hello", function() {
  console.log("hi - step1");
});

dispatchEvent("hello");
