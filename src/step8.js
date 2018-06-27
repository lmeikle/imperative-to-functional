/**
 * Step 8: Currying
 *
 * Our last step is currying to turn our functions into unary with only one argument creating higher-order functions.
 * you can imagine it as a process of changing your arguments into a series of arrows turning (a, b, c) into a => b => c.
 */

const addEventListener = handler => event => eventMap =>
  eventMap.has(event)
    ? new Map(eventMap).set(event, eventMap.get(event).concat([handler]))
    : new Map(eventMap).set(event, [handler]);

const dispatchEvent = event => eventMap =>
  (eventMap.has(event) && eventMap.get(event).forEach(a => a())) || event;

const log = x => console.log(x) || x;

// call as they are
const myEventMap1 = addEventListener(() => log("hi - step8 a"))("hello")(new Map());
dispatchEvent("hello")(myEventMap1); // hi

// partial application
let myEventMap2 = new Map();
const onHello = handler =>
  (myEventMap2 = addEventListener(handler)("hello")(myEventMap2));
const hello = () => dispatchEvent("hello")(myEventMap2);
onHello(() => log("hi - step8 b"));
hello(); // hi

// composition
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const addEventListeners = compose(
  log,
  addEventListener(() => log("hey"))("hello"),
  addEventListener(() => log("hi - step8 c"))("hello")
);
const myEventMap3 = addEventListeners(new Map()); // myEventMap3
dispatchEvent("hello")(myEventMap3); // hi hey
