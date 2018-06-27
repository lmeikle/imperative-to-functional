/**
 * Step 2: Use lambda arrow functions
 */

const eventMap = new Map ();
const addEventListener = (event, handler) => {
  if (eventMap.has (event)) {
    eventMap.set (event, eventMap.get (event).concat ([handler]));
  } else {
    eventMap.set (event, [handler]);
  }
}
const dispatchEvent = event => {
  if (eventMap.has (event)) {
    const handlers = eventMap.get (event);
    for (const i in handlers) {
      handlers [i] ();
    }
  }
}

addEventListener("hello", function() {
  console.log("hi - step2");
});

dispatchEvent("hello");
