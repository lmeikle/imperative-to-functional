/**
 * Step 6: Replace if with ternary operator
 */

const addEventListener = (event, handler, eventMap) => {
  return eventMap.has(event)
    ? new Map(eventMap).set(event, eventMap.get(event).concat([handler]))
    : new Map(eventMap).set(event, [handler]);
};

const dispatchEvent = (event, eventMap) => {
  return (
    (eventMap.has(event) && eventMap.get(event).forEach(a => a())) || event
  );
};

const myMap = addEventListener(
  "hello",
  () => console.log("hi - step6"),
  new Map()
);
dispatchEvent("hello", myMap);
