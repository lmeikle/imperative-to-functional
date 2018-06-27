/**
 * Step 4: Remove for statement
 * We will replace for with foreach:
 */

const addEventListener = (event, handler, eventMap) => {
  if (eventMap.has(event)) {
    return new Map(eventMap).set(event, eventMap.get(event).concat([handler]));
  } else {
    return new Map(eventMap).set(event, [handler]);
  }
};
const dispatchEvent = (event, eventMap) => {
  if (eventMap.has(event)) {
    eventMap.get(event).forEach(a => a());
  }
  return eventMap;
};

const myMap = addEventListener(
  "hello",
  () => console.log("hi - step4"),
  new Map()
);
dispatchEvent("hello", myMap);
