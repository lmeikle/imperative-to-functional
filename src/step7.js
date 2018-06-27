/**
 * Step 7: Now you don’t need any {}
 */

const addEventListener = (event, handler, eventMap) =>
  eventMap.has(event)
    ? new Map(eventMap).set(event, eventMap.get(event).concat([handler]))
    : new Map(eventMap).set(event, [handler]);

const dispatchEvent = (event, eventMap) =>
  (eventMap.has(event) && eventMap.get(event).forEach(a => a())) || event;

const myMap = addEventListener(
  "hello",
  () => console.log("hi - step7"),
  new Map()
);
dispatchEvent("hello", myMap);
